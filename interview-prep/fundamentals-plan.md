# Fundamentals Prep Plan — DSA, System Design, and a Portfolio Project

**Owner:** Nishit · **Started:** 2026-08-03 · **Widened to a generic multi-archetype plan:** 2026-08-03 · **Review cadence:** weekly, logged at the bottom

**How to use this file, per your own two-step workflow:** everything down to **"Company/role overlays"** is the **generic core** — it applies whether the req is SDE, TPM, PM, or EM, at Tesla, Amazon, Google, or anyone else. Finish the core first. Then, for a *specific* req, read the matching overlay (or ask for a new one) for what to add on top — company-specific loop structure, domain primers, and comp intel live there, not here. `interview-prep/tesla-distributed-systems-engineer.md` is the first overlay; it's Tesla-specific and should not be read as if it applies generally (Scala/Akka weighting, CoderPad, etc. are Tesla-only).

**Time budget assumption: 8–12 hrs/week** alongside a full-time job. If a week slips, slip the plan — don't compress it.

---

## Honest starting assessment

| Area | Standing | Why |
|---|---|---|
| **Systems / low-level** | **Strong — this is your edge** | U-Boot bootloader memory audit, memory/CPU leak profiling, SatCom L1/L3. Most cloud candidates cannot speak to this. |
| **Distributed systems (practical)** | **Strong** | 11 years on an NMS — fleet telemetry, monitoring, remote control at production scale |
| **Kubernetes / AWS / PostgreSQL** | **Solid** | Helm pipeline, cloud-native NMS, production deployments |
| **System design (interview format)** | **Medium** | You *do* this work; you haven't had to perform it in 45 minutes on a whiteboard |
| **DSA / algorithms** | **Weak — the real gap** | 11 years since this was exercised daily. Assume rusty, not absent. |
| **People-management / product-ownership titles** | **None formal** | Real leadership evidence (STO, Scrum Master, matrix PI planning), but no title. Affects EM/PM prep — see the archetype overlays below. |

**The strategic read: your DSA gap is the one thing standing between you and roles you're otherwise over-qualified for, and it gates every employer equally.** This plan is weighted accordingly.

**Generic time split, ~65 hours over the core:** **45% DSA, 25% system design + concurrency, 15% project, 15% behavioral/archetype prep.** (Company overlays add their own weighting on top — e.g. the Tesla overlay reallocates some of this to Scala concepts and an energy-domain primer.)

---

## Resources — concrete, not generic advice

**DSA:**
- **[NeetCode 150](https://neetcode.io/practice)** — the single best-curated pattern list; free tier covers everything you need. Go through it pattern-by-pattern, not randomly.
- **[LeetCode](https://leetcode.com/)** — filter by pattern (not by company-tagged lists this early). Premium unlocks company-tagged questions, worth it once you're targeting specific reqs.
- Book, optional but good for structured reading away from a keyboard: ***Elements of Programming Interviews*** (Aziz, Lee, Prakash) — has a Go edition, which matches your primary language.

**System design:**
- ***Designing Data-Intensive Applications*** (Martin Kleppmann) — not an interview-prep book, but it's the single best foundation for everything a design interview probes: replication, partitioning, consistency, batch vs. stream processing. Read the first 200 pages minimum; you'll recognize your own NMS work in it.
- ***System Design Interview*** Vol. 1 and 2 (Alex Xu) — interview-format specific, good for the repeatable structure and worked examples.
- **[ByteByteGo](https://bytebytego.com/)** newsletter/YouTube — short, concrete, free content on real-world architecture patterns.

**Concurrency:**
- You already know Go and Java — no new language needed. For Go: *The Go Programming Language* (Donovan & Kernighan), concurrency chapters. For a refresher on the concepts generically (locks, atomics, memory models): any solid OS course material — you have an MEng, this will come back fast.

**Mock interviews:**
- **[Pramp](https://www.pramp.com/)** — free, peer-matched, both DSA and system design.
- **[interviewing.io](https://interviewing.io/)** — paid, anonymized real engineers, higher signal, worth it once in the last 2-3 weeks before a real loop.

**Pattern recognition (the diagnostic layer):**
- **`~/github/career/dsa/pattern-diagnostic.html`** — open in a browser. Problem statement → pattern → approach: a 60-second triage script, the constraints→complexity budget, 53 searchable signals, two decision flowcharts (shape-first tree + exhaustive cascade), 14 pattern cards, and a composite-problems section for two-pattern problems. This is the layer NeetCode's tree and the UCSD course theory both skip, and it's the skill that decides interviews. Use it *while* doing Phase 1 — predict the pattern before solving, then check.
- [AlgoMonster templates](https://algo.monster/templates/backtracking-aggregation) — code skeletons per pattern, deliberately not duplicated in the diagnostic. The diagnostic tells you which template; this gives you the skeleton.
- **`~/github/career/dsa/problem-log.md`** — the spaced-revision system (day / next-Sunday / month-end checkpoints) and its companion `problem-log.csv` + `review-due.py`. Use this to log every problem from Weeks 1-4, not just solve-and-move-on — the topic tags in the log line up with the week-by-week table below.

**Project hosting:** a public GitHub repo with a real README is the deliverable — `config/profile.yml` currently has no `portfolio_url`/`github`, which is a flagged gap on every application. Fixing that is part of this plan, not optional.

---

## Phase 1 — Weeks 1–4: DSA core patterns

**Goal: rebuild fluency in the patterns that cover the large majority of interview questions.** Not breadth — fluency.

- [ ] **Week 1 — Baseline + arrays/strings/hashing.** Do 3 timed medium problems *cold* on day 1, before studying anything, and record honestly how it went (see Baseline below). Then: two pointers, sliding window, frequency maps.
- [ ] **Week 2 — Graphs + trees.** BFS, DFS, level-order, topological sort, cycle detection, union-find. The single most-asked category at senior level across almost every employer.
- [ ] **Week 3 — Binary search, heaps, intervals.** Search on sorted arrays and on the answer space; top-k and merge-k; interval merging; monotonic stack.
- [ ] **Week 4 — Streaming/aggregation patterns + consolidation.** Rate limiter, sliding-window aggregation, rolling median, dedup, TTL/LRU cache. This cluster comes up disproportionately for candidates with an infra/systems background — recruiters and hiring managers tend to reach for it. Re-do the week-1 baseline problems and compare.

**Method that matters more than the problem count:**
- **Timebox 35 minutes.** If stuck at 35, read the solution, understand it, and re-implement from scratch the next day.
- **Talk out loud while solving**, even alone. The bottleneck in real interviews is narrating your reasoning, not finding the answer.
- **Volume target: 6–10 problems/week.** ~60 well-understood problems beat 300 skimmed.
- Prefer **medium** difficulty. Hard problems are a poor use of time at this stage; easy ones stop teaching quickly.

## Phase 2 — Weeks 5–8: Concurrency + system design

**This is where your existing strength converts into interview performance.**

- [ ] **Week 5 — Concurrency fundamentals.** Threads vs processes, mutexes/semaphores, deadlock/livelock/starvation, race conditions, atomics, memory model basics, thread pool sizing. Go's goroutines/channels and Java's concurrency primitives are both fair game — you know both. This is a genuine strength most cloud-application candidates lack.
- [ ] **Week 6 — System design framework.** A repeatable structure: requirements → capacity estimation → API → data model → high-level design → deep dive → bottlenecks/failure modes. The structure is what's scored; freestyle designs read as unstructured even when technically sound.
- [ ] **Week 7 — Design drills in your own domain.** Design: a telemetry ingestion pipeline for millions of devices; a time-series store; a command/control plane with delivery guarantees; a fleet-monitoring dashboard. **You have lived every one of these** — the work is learning to present them in 45 minutes.
- [ ] **Week 8 — Design drills outside your domain.** URL shortener, rate limiter, notification service, distributed cache, chat system. Generic prompts still appear at most companies; don't be caught flat.

**Core concepts to be able to explain without notes:** CAP and its practical consequences, consistency models, partitioning/sharding, replication and leader election, idempotency, at-least-once vs exactly-once delivery, backpressure, circuit breakers, the outbox pattern, time-series vs relational storage trade-offs.

## Phase 3 — Weeks 9–12: The project + mock interviews + behavioral

- [ ] **Weeks 9–11 — Build the project** (see below). Scope discipline over completeness.
- [ ] **Week 12 — Mocks.** At least 3: one DSA, one system design, one behavioral. Recording yourself and rewatching is unpleasant and unusually effective.
- [ ] **Write STAR stories into `interview-prep/story-bank.md`** — you already have excellent raw material: the U-Boot bootloader audit, the Keycloak stalemate resolution, the overnight Connector-3 re-plan, the 4 AM production fix, the HackRF improvisation, the Helm 1hr→5min pipeline.
- [ ] **Write two failure stories, generically useful everywhere:** a design decision you got wrong and how you detected it, and a time you were the bottleneck. Most candidates arrive with only triumph narratives; interviewers increasingly probe for self-awareness deliberately (this is explicit at some companies — see the Tesla overlay — but the underlying question shows up almost everywhere as "tell me about a mistake").
- [ ] **Read the archetype overlay(s) relevant to what you're actually applying for** — TPM/PM/EM below — since you're targeting all four archetypes, not just SDE.

---

## Archetype overlays — TPM / PM / EM

You're targeting SDE, TPM, PM, and EM roles simultaneously. The DSA/system-design core above is necessary for SDE and helps you sound credible in TPM/EM technical screens, but it is **not sufficient** for TPM/PM/EM-specific rounds, which test different things.

**Honest positioning first, from `modes/_brief.md`:** you have no formal people-management or product-ownership *title*. Real evidence exists (Single-Threaded Ownership, Scrum Master, matrix PI planning across Belgium/USA/Canada, stakeholder alignment across PM/architects/UX), but external hire into a *first-time* EM or PM role is genuinely harder than an IC or TPM hire, for the same reason discussed in the career strategy: employers de-risk by hiring people who've already done the job under that title. **Weight your effort toward TPM and IC applications; treat EM and PM as good-if-it-lands stretch applications, not the primary route.**

### TPM overlay — your strongest non-SDE fit

Your existing material (Connector-3 overnight re-plan, cross-geo PI planning across Belgium/USA/Canada, the Keycloak stakeholder resolution) is *already* TPM-shaped. Prep beyond the core:

- **Program-management case questions:** "how would you launch X across three teams with conflicting priorities," "a dependency just slipped two weeks before a hard deadline, walk me through what you do." Practice structuring answers around: stakeholders, dependencies, risk, communication cadence, and a concrete decision.
- **Metrics and tracking:** be ready to talk about how you'd define and track a program's health (burn-down, risk register, RAG status) — you've done PI planning, so this should be a reframe of existing experience, not new learning.
- **Resource:** [Exponent's TPM interview guide](https://www.tryexponent.com/) — free content on the standard TPM loop shape (technical breadth screen, program-sense case, communication/stakeholder round).

### PM overlay — the largest new-skill gap of the four

- **Framework to learn: CIRCLES method** (Comprehend, Identify users, Report needs, Cut through prioritization, List solutions, Evaluate trade-offs, Summarize) for product-design/"how would you improve X" questions.
- **Prioritization frameworks:** RICE (Reach, Impact, Confidence, Effort), MoSCoW. Be able to apply one to a concrete example from your own NMS work — you *have* made prioritization calls (the Keycloak decision is one), you just haven't labeled them with PM vocabulary before.
- **Estimation/metrics questions:** "how many X are there in Y," and "how would you measure success of Z feature" — these test structured thinking, not domain knowledge.
- **Resource:** *Cracking the PM Interview* (McDowell & Bulygo) and *Decode and Conquer* (Lewis Lin) — the two standard references, both short.
- **Honest note:** without a PM title on your resume, expect PM screens to probe hard on "why PM now." Your honest answer — you've been doing the PM-adjacent parts of Product Delivery Lead (stakeholder alignment, roadmap input, cross-functional prioritization) and want the title to match the work — is a legitimate answer. Don't oversell it as more than that.

### EM overlay — same honesty, applied to management

- **Expect to be asked directly about direct-report experience.** Answer as in the Lyft report: no formal reports, but extensive matrix/cross-geo leadership, Scrum Master facilitation for a team, and frame the interview as the deliberate step into formal people management.
- **Prep the standard EM behavioral set:** a time you gave difficult feedback, a low performer you managed (or, honestly, a peer-level equivalent if you have no direct-report example), how you'd structure 1:1s and career development conversations, a conflict between two engineers you had to resolve.
- **Resource:** *The Manager's Path* (Camille Fournier) — short, respected, and directly useful for framing "technical leadership readiness" honestly in interviews.
- **Realistic sequencing note** (also recorded in `career` repo `decisions.md`, 2026-08-03): landing as a strong IC or TPM first and converting to EM internally is generally an easier path than an external EM hire with no formal management history. Don't over-invest prep time in EM-specific interviews relative to TPM/IC unless a specific EM req is genuinely strong on other dimensions.

---

## The project: Urban Heat Atlas — block-level urban heat mapping

> **This slot now points at a separate public repo: `~/github/urban-heat-atlas`.** Full phased plan in its [ROADMAP.md](../../github/urban-heat-atlas/ROADMAP.md). It lives in its own **public** repo, not here and not in `career`, because it needs a public URL, a commit history employers will read, and eventually a citable artifact — none of which can share a repository with private immigration and salary material.
>
> **Pivot history.** This slot held an *IoT fleet-telemetry control plane* (2026-08-03), then a *geospatial content-ingestion pipeline* (2026-08-12), now Urban Heat Atlas (2026-08-14). Each pivot kept the same core — ingest messy real-world inputs, engineer features, model, serve, observe — and changed what rides on top. Urban Heat Atlas is the version that adds a *model* worth defending and a research question worth answering, while still using the geospatial moat.
>
> **What it is in one line:** your weather app says "Ottawa: 28°C"; a parking lot runs 10–15°C hotter than a shaded street a few blocks away. Landsat measures surface temperature and land cover for every 30m patch, so you can learn the relationship and map every block.
>
> **Why this one and not the others:** it prices the geospatial background rather than discarding it; the cross-city transferability phase is a genuine open question (single-city heat mapping has been done since ~2005); and that phase feeds the O-1A/EB-1A scholarly-evidence clock, which `career/STATE.md` flags as a 2–3 year build from zero.
>
> **Keep the earlier framings in your pocket** — for a Tesla or satcom-fleet req, the ingestion half re-frames as fleet telemetry with almost no rework.

**Recommendation, and the reasoning matters more than the idea.** One project, several goals at once:

| Goal | How it serves it |
|---|---|
| **System design material** | Gives you *measured numbers* to cite instead of hypotheticals — the single best differentiator in a design interview |
| **Fills the portfolio gap** | `config/profile.yml` has no portfolio URL — a flagged weakness on every application, and called out explicitly in report 008 as a real recall disadvantage for senior IC roles |
| **Uses the moat instead of discarding it** | "Vector Tiles vs. GeoJSON POC" is already on the CV; this extends real experience rather than inventing a new domain |
| **Domain-relevant across the current target set** | Mapping/geo ingestion is directly Lyft (Places & Search, Routing, MapXP); the ingestion-pipeline shape is directly Scribd Content Foundations; the adapter/topology modelling is directly Aalyria |
| **EB-1A raw material** | A genuinely adopted open-source tool supports the "original contribution" criterion, per the career strategy |
| **Closes named CV gaps** | AWS serverless (Lambda/SQS/Step Functions) and embeddings/chunking/retrieval are both absent from `cv.md` and both appear as requirements across current targets |

### Scope, phases, and stack

All of it now lives in the project repo so it stays next to the code: **[`~/github/urban-heat-atlas/ROADMAP.md`](../../github/urban-heat-atlas/ROADMAP.md)**.

Five phases, each answering one question:

| Phase | Question | Ships | Effort |
|---|---|---|---|
| 1 | How much hotter is each block, and why? | **A live map** — the portfolio artifact | ~20 hrs |
| 2 | Do learned spatial features beat engineered ones? | An honest ablation, either result | ~15 hrs |
| 3 | Can it run itself and tell me when it breaks? | Airflow + ClickHouse + MLflow + Evidently | ~15 hrs |
| 4 | Does a model trained on one city work in another? | **The finding** — the paper | ~20 hrs |
| 5 | Worth writing up? | Workshop submission (declared upside) | — |

**The one rule:** ship Phase 1 to a live URL before starting Phase 2. `config/profile.yml` → `portfolio_url` stays empty until that happens, and report 008 flagged the empty field as a real recall disadvantage on senior IC applications.

**Explicitly out of scope:** Triton, KServe, PyFlink, Kafka. Understand the patterns, discuss them in interviews, don't build them solo.

---

## Company/role overlays

Read the generic core above first. Overlays add company- or role-specific weighting and domain knowledge on top — they don't replace the core.

| Overlay | File | What it adds |
|---|---|---|
| Tesla — Software Distributed Systems Engineer | [tesla-distributed-systems-engineer.md](tesla-distributed-systems-engineer.md) | Loop structure, Scala/Akka framing, energy-domain primer, Richmond Hill site read, comp/level negotiation |

**When you have a specific req to prepare for, ask for an overlay** — same deep-research process as Tesla, tailored to that company's actual interview process and domain, on top of this shared foundation.

---

## Progress log

Update this yourself between sessions; I'll read it when you share progress and adjust the plan.

| Week | Dates | DSA (problems / patterns) | System design | Project / archetype prep | Notes / blockers |
|---|---|---|---|---|---|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |
| 6 | | | | | |
| 7 | | | | | |
| 8 | | | | | |
| 9 | | | | | |
| 10 | | | | | |
| 11 | | | | | |
| 12 | | | | | |

### Baseline (fill in Week 1, before studying)

- Cold timed problems attempted: __ / 3 solved
- Time to first working solution: ___
- Where it broke down (approach / implementation / edge cases / speed): ___

### Running notes

*(Add dated entries as you go — what clicked, what didn't, what to revisit.)*
