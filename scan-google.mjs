#!/usr/bin/env node
/**
 * scan-google.mjs — zero-token Google Careers scanner for Ontario/Quebec.
 *
 * Google is not on Greenhouse/Ashby/Lever, so scan.mjs cannot see it. This
 * fetches google.com/about/careers directly, matches titles against
 * portals.yml -> title_filter.positive, dedups against data/scan-history.tsv,
 * and appends new roles to data/pipeline.md under "## Pending".
 *
 * It also tracks REMOVALS. A req that disappears is a signal the previous
 * scan had no way to surface — this is what would have caught the
 * "Technical Program Manager, Google Public Sector" req closing.
 *
 * Usage:  node scan-google.mjs [--dry-run] [--quiet]
 * Zero LLM cost. Only reads a public careers page.
 */
import { readFileSync, writeFileSync, existsSync, appendFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';

const DRY      = process.argv.includes('--dry-run');
const QUIET    = process.argv.includes('--quiet');
const ROOT     = new URL('.', import.meta.url).pathname;
const HISTORY  = 'data/scan-history.tsv';
const PIPELINE = 'data/pipeline.md';
const SNAPSHOT = 'data/google-jobs-snapshot.json';
const LOG      = 'data/google-scan.log';
const PORTALS  = 'portals.yml';
const BASE     = 'https://www.google.com/about/careers/applications';
const UA       = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const TODAY    = new Date().toISOString().slice(0, 10);

const LOCATIONS = [
  'Ottawa, ON, Canada',
  'Toronto, ON, Canada',
  'Montreal, QC, Canada',
];

/** Roles we specifically want to know about if they ever reappear. */
const WATCHLIST = [
  { name: 'Public Sector TPM (the 2026-09 req)', test: t => /public sector/i.test(t) && /program manager/i.test(t) },
];

const log = (...a) => { if (!QUIET) console.log(...a); };

function titleFilters() {
  const empty = { positive: [], negative: [] };
  if (!existsSync(PORTALS)) return empty;
  const y = readFileSync(PORTALS, 'utf8');
  const grab = key => {
    const m = y.match(new RegExp(key + ':\\s*\\n((?:\\s*(?:#[^\\n]*|-\\s*"[^"]*")\\s*\\n)+)'));
    return m ? [...m[1].matchAll(/-\s*"([^"]+)"/g)].map(x => x[1].toLowerCase()) : [];
  };
  return { positive: grab('positive'), negative: grab('negative') };
}

async function fetchLocation(loc) {
  // Google paginates 20/page and renders results server-side. Walk pages until
  // one yields no IDs we haven't already seen (guard at 15 pages = 300 roles).
  const out = new Map();
  for (let page = 1; page <= 15; page++) {
    const url = `${BASE}/jobs/results?location=${encodeURIComponent(loc)}&page=${page}`;
    const res = await fetch(url, { headers: { 'User-Agent': UA }, redirect: 'follow' });
    if (!res.ok) { log(`  ! ${loc} p${page}: HTTP ${res.status}`); break; }
    const html = await res.text();
    let added = 0;
    for (const m of html.matchAll(/jobs\/results\/(\d+)-([a-z0-9-]+)/g)) {
      const [, id, slug] = m;
      if (out.has(id)) continue;
      const title = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      out.set(id, { id, slug, title, location: loc, url: `${BASE}/jobs/results/${id}-${slug}` });
      added++;
    }
    if (added === 0) break;
    await new Promise(r => setTimeout(r, 800));
  }
  return [...out.values()];
}

function seenUrls() {
  const s = new Set();
  if (existsSync(HISTORY)) {
    for (const line of readFileSync(HISTORY, 'utf8').split('\n')) {
      const u = line.split('\t')[0];
      if (u && u.startsWith('http')) s.add(u);
    }
  }
  if (existsSync(PIPELINE)) {
    for (const m of readFileSync(PIPELINE, 'utf8').matchAll(/-\s*\[[ x]\]\s*(\S+)/g)) s.add(m[1]);
  }
  return s;
}

function appendPipeline(rows) {
  let md = existsSync(PIPELINE) ? readFileSync(PIPELINE, 'utf8')
         : '# Pipeline — URL Inbox\n\n## Pending\n';
  const block = rows.map(r =>
    `- [ ] ${r.url} | Google | ${r.title} | ${r.location} | first_seen: ${TODAY}`).join('\n');
  const i = md.indexOf('## Pending');
  if (i < 0) md += `\n## Pending\n${block}\n`;
  else {
    const nl = md.indexOf('\n', i);
    md = md.slice(0, nl + 1) + block + '\n' + md.slice(nl + 1);
  }
  writeFileSync(PIPELINE, md);
}

function appendHistory(rows) {
  mkdirSync(dirname(HISTORY), { recursive: true });
  const lines = rows.map(r => [
    r.url, TODAY, 'google-careers', r.title, 'Google', 'added', r.location, '', '', '', '', 'google'
  ].join('\t')).join('\n');
  appendFileSync(HISTORY, lines + '\n');
}

(async () => {
  const { positive, negative } = titleFilters();
  log(`\n=== Google Careers scan — ${TODAY} ===`);
  log(`  filters: +${positive.length} / -${negative.length} | locations: ${LOCATIONS.length}`);

  const live = new Map();
  for (const loc of LOCATIONS) {
    const jobs = await fetchLocation(loc);
    log(`  ${loc}: ${jobs.length} postings`);
    for (const j of jobs) if (!live.has(j.id)) live.set(j.id, j);
    await new Promise(r => setTimeout(r, 1200)); // be polite
  }

  // ---- removal detection -------------------------------------------------
  const prev = existsSync(SNAPSHOT) ? JSON.parse(readFileSync(SNAPSHOT, 'utf8')) : null;
  let removed = [];
  if (prev?.ids) {
    removed = prev.ids.filter(p => !live.has(p.id));
  }

  // ---- watchlist ---------------------------------------------------------
  const hits = [];
  for (const w of WATCHLIST)
    for (const j of live.values())
      if (w.test(j.title)) hits.push({ w: w.name, j });

  // ---- new + matching ----------------------------------------------------
  const seen = seenUrls();
  const matched = [...live.values()].filter(j => {
    const t = j.title.toLowerCase();
    if (negative.some(n => t.includes(n))) return false;
    return positive.some(f => t.includes(f));
  });
  const fresh = matched.filter(j => !seen.has(j.url));

  log(`\n  live: ${live.size} | title-matched: ${matched.length} | new: ${fresh.length} | removed since last run: ${removed.length}`);

  if (hits.length) {
    log(`\n  *** WATCHLIST HIT ***`);
    for (const h of hits) log(`    [${h.w}] ${h.j.title}\n      ${h.j.url}`);
  }
  if (removed.length) {
    log(`\n  --- REMOVED (closed or filled) ---`);
    for (const r of removed) log(`    ${r.title}\n      ${r.url}`);
  }
  if (fresh.length) {
    log(`\n  --- NEW MATCHES ---`);
    for (const f of fresh) log(`    ${f.title}  [${f.location}]\n      ${f.url}`);
  }

  if (!DRY) {
    if (fresh.length) { appendPipeline(fresh); appendHistory(fresh); }
    writeFileSync(SNAPSHOT, JSON.stringify({
      scanned_at: new Date().toISOString(),
      ids: [...live.values()].map(({ id, title, url }) => ({ id, title, url })),
    }, null, 2));
    const entry = [
      `[${new Date().toISOString()}] live=${live.size} matched=${matched.length} new=${fresh.length} removed=${removed.length}`,
      ...hits.map(h => `    WATCHLIST: ${h.j.title} -> ${h.j.url}`),
      ...removed.map(r => `    REMOVED: ${r.title}`),
      ...fresh.map(f => `    NEW: ${f.title} -> ${f.url}`),
    ].join('\n');
    appendFileSync(LOG, entry + '\n');
  }

  log(`\n  ${DRY ? '(dry run — nothing written)' : `wrote: ${PIPELINE}, ${HISTORY}, ${SNAPSHOT}, ${LOG}`}`);
  if (fresh.length && !DRY) log(`  next: /career-ops pipeline\n`);
})();
