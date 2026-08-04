# Custom Instructions -- career-ops

<!-- ============================================================
     THIS FILE IS YOURS. It will NEVER be auto-updated.

     Put your own house rules, custom workflows, and automations
     here -- anything you want the agent to ALWAYS do (or never do).

     This is for PROCEDURAL rules ("HOW I want things done").
     For WHO you are (archetypes, narrative, comp, negotiation),
     use modes/_profile.md instead. Keeping the two separate keeps
     each one readable.

     The agent reads this file alongside the system instructions;
     your rules here take precedence over the defaults, as long as
     they don't break the Data Contract (your files are never
     touched, and we never auto-submit an application for you).

     Because this is a user-layer file, anything you write here
     survives `node update-system.mjs`. Put customizations HERE,
     not in CLAUDE.md / modes/_shared.md / other system files --
     those get overwritten on update.
     ============================================================ -->

## House Rules

<!-- Rules the agent should always follow. Examples:
     - Always write evaluation summaries in British English.
     - Never include a photo in my CV (US / ATS-first market).
     - Cap each batch run at 20 listings unless I say otherwise.
     - If a report scores below 6, skip the cover letter. -->

### Repo boundary — long-term strategy is out of scope here

This repo evaluates individual job postings. **Long-term career and immigration
strategy lives in a separate private repo (`career`) and is not this repo's job.**

- The `<!-- BEGIN DERIVED ... -->` block in `modes/_profile.md` is **generated**.
  Do not edit inside the sentinels, and do not expand it. Changes are made in the
  `career` repo, re-pasted, and verified with its `check.sh`.
- Use that block to **score work authorization on a specific posting**. Do not
  reason beyond it, extrapolate from it, or answer open-ended immigration or
  career-strategy questions from it — those belong in the other repo.
- Never copy family details, visa-application outcomes, or salary figures into
  this repo. It is a fork of a public repository.
- If you recall immigration strategy that is not present in that block, it is
  stale. Do not use it.

## Custom Workflows

<!-- Multi-step routines you run often, given a short name. Examples:
     - "weekly review": scan my saved portals, evaluate the new roles,
       then give me a one-paragraph summary of the top 3.
     - "prep <company>": pull the JD, generate STAR stories from
       article-digest.md, and draft 5 likely interview questions. -->

### Discovery: prefer aggregators over exhaustive scanning for broad, cross-archetype search

Decided 2026-08-03. `node scan.mjs` (zero-token, Greenhouse/Ashby/Lever APIs) is precise
but limited to `tracked_companies` in `portals.yml` — a curated, mostly-satcom list.
Since the target is now broadened to SDE/TPM/PM/EM across ANY Ottawa/Toronto employer
clearing the comp floor, `scan.mjs` alone under-covers badly — it can't discover a
company that isn't already on the list.

**For broad discovery, use external aggregators (LinkedIn/Indeed saved alerts, per the
setup given directly to the user) as the primary net, not agent-driven WebSearch
scanning company-by-company** — that would burn tokens re-deriving what a free daily
email alert already does better and continuously. `scan.mjs` stays the fast, zero-token
tool for the tracked domain-relevant company list specifically.

Paste any URLs the user finds via aggregators into `data/pipeline.md` and run
`/career-ops pipeline` as normal.

## Output Preferences

<!-- How you like results formatted. Examples:
     - Reports: lead with the score and the one-line verdict.
     - Show the per-step token breakdown after a batch run.
     - Save PDFs date-first: YYYY-MM-DD-company.pdf -->

(none yet -- add yours above)

## Off-Limits

<!-- Things the agent must never do for you. Examples:
     - Never auto-fill or submit an application without showing me first.
     - Never edit a system file to customize my setup -- put it here. -->

(none yet -- add yours above)
