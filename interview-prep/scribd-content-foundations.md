# Overlay — Scribd, Senior Backend Engineer (Content Foundations)

**Req:** https://jobs.ashbyhq.com/ScribdInc/df3f9e47-6df4-4ae6-be4a-cba1de5a36de
**Team:** Publisher Content Management · **Dept:** Engineering · **Published:** 2026-05-12
**Location:** San Francisco (primary); **Ottawa listed as a secondary hiring location**, alongside Toronto, Vancouver, Phoenix, LA and others
**Advertised comp (Canada, from the JD):** CAD 153,000 – 202,000
**Created:** 2026-08-12

> Read [fundamentals-plan.md](fundamentals-plan.md) first. This overlay adds role-specific weighting on top of the generic core; it does not replace it.

---

## Read this before investing effort

**Do not build a Scribd-specific project.** At 8–12 hrs/week, a bespoke project for one role means finishing nothing. The recommendation in `fundamentals-plan.md` is a **pivot of the single existing project slot** — from IoT fleet telemetry to geospatial content ingestion — because that payload serves this role *and* higher-ranked targets simultaneously.

**Where this role actually ranks.** Better than its title suggested, but not top of the list:

- ✅ *"7+ years of software engineering experience, including experience navigating the trade-offs of refactoring legacy systems while maintaining high availability"* — close to a description of the legacy-SatCom → next-gen-NMS arc, with the 100% RVT stability result as proof.
- ✅ Go is in their stack ("Ruby, Python, or Go — our stack includes all three").
- ✅ Remote-eligible from Ottawa; no visa friction; Scribd is a genuine **CA + US entity**, which is criterion 3 in `career/employers.md`.
- ❌ **Zero domain overlap.** Digital reading and publishing. Your eleven-year satcom/geospatial moat is not priced here at all — this is a pure portable-skills play.
- ⚠️ **Comp likely straddles rather than beats current.** The JD's CAD 202,000 top is explicitly *"our highest geographic market"* — Toronto or Vancouver. Ottawa is a lower-cost market, so realistically 153–180K against a current 175K and a 200K floor.

**Net:** worth applying to if the project lands and you want breadth, but it ranks below the Lyft Toronto mapping roles (domain match, same city tier, no visa friction). Build the project for the portfolio and for Lyft; let this be one of several doors it opens.

---

## What this team actually does

From the JD, verbatim:

> "The Content Foundations team builds the systems that power how content enters, evolves, and is delivered across Scribd. This includes everything from ingestion, metadata extraction, early quality controls, and the core artifacts that power search, recommendations, AI/ML systems..."

> "You'll be joining a small and growing team working at the boundary between messy, real-world content and highly structured systems, where file formats vary, metadata can be inconsistent, and scale amplifies every edge case."

> "**Decisions made at ingestion ripple across every downstream system.**"

Their stated current focus areas:
1. Content quality and early-stage validation
2. Spam detection at upload time
3. OCR and content extraction for ML/LLM use cases
4. Evolving content formats to support downstream AI workflows
5. Security hardening
6. Architectural improvements to content/metadata flow, **including data observability for complex, asynchronous pipelines**

---

## Requirement-by-requirement read

| JD requirement | Your standing | Evidence / gap |
|---|---|---|
| "7+ years ... refactoring legacy systems while maintaining high availability" | ✅ **Strong** | Legacy SatCom → next-gen NMS; "100% system stability during high-scale RVT" |
| "building and scaling ingestion pipelines, ETL workflows, or document/content processing systems" | ❌ **Primary gap** | No direct evidence in `cv.md`. **This is what the project closes.** |
| "Comfortable working with messy data and building systems resilient to real-world inputs" | ⚠️ Adjacent | Field debugging, aviation traffic-drop, terminal edge cases — real but not *data* messiness |
| "Proficient in Ruby, Python, or Go" | ✅ Direct | Go and Python both in Skills |
| "AWS (Lambda, SQS/SNS, S3, Step Functions) and distributed workflows" | ⚠️ **Partial gap** | AWS listed; serverless specifics absent. **Project closes this.** |
| "Strong database design skills (SQL and/or NoSQL), reliability and resilience" | ✅ **Strong** | PostgreSQL, SQL; ERD cardinality standard for the Maestro object model adopted org-wide |
| "communicate technical complexity to non-technical stakeholders ... building consensus across cross-functional engineering teams" | ✅ **Strong** | STO across 6 Epics aligning PM/architects/UX; the month-long Keycloak stalemate resolution |
| "Enjoy mentoring others and working collaboratively" | ✅ Good | Scrum Master; matrix leadership across Belgium/USA/Canada |
| *Nice:* document formats (PDF, ebooks, markdown), OCR, parsing | ❌ Gap | None. Partially addressable via the project's multi-format parsing. |
| *Nice:* ML/AI systems (embeddings, chunking, retrieval) | ❌ Gap | None. **Project stage 8 closes this.** |
| *Nice:* spam or content security systems | ❌ Gap | None. Partially addressable via the quality-gate stage. |

**Summary:** the *judgment* requirements (legacy refactoring, DB design, consensus-building, stakeholder communication) are already strong. Every gap is a **build-able artifact** gap. That is unusually favourable — it means a single project can move this from a marginal application to a credible one.

---

## The four project features that signal *this* team

The generic project spec is in `fundamentals-plan.md` — a **publicly hosted** civic map-data product ("what's happening on Ottawa's streets, and where is the map wrong?"). These four features map onto Content Foundations' stated focus areas — build them deliberately and write them up.

**The hosted-product decision helps here specifically.** Their team works "at the boundary between messy, real-world content and highly structured systems." A live URL where an interviewer can *see* the rejection-rate page and the disagreement layer is far stronger evidence than describing a pipeline you ran locally. Put `portfolio_url` in `config/profile.yml` and in the CV header before applying.

### 1. Idempotent re-ingestion
Their line: *"Decisions made at ingestion ripple across every downstream system."*
Make re-processing provably safe: content-hash dedup, exactly-once downstream effects. **Then measure it** — replay a full corpus and show downstream state is byte-identical with no duplicate work. This is the single most on-message feature you can build for this team.

### 2. Quality gate with quarantine
Their focus area 1 ("content quality and early-stage validation") and the "resilient to real-world inputs" requirement.
Never drop bad input silently. Quarantine with a reason code, expose a rejection-rate metric broken down by failure class. The write-up sentence — *"1.8% of real input is quarantined: 60% invalid geometry, 30% encoding, 10% truncated"* — is exactly the evidence they're screening for, and you can only produce it with real messy data.

### 3. Data observability across async stages
Their focus area 6, and named explicitly as an architectural priority.
Trace a single item across every pipeline stage. Be able to answer *"where is item X, and why is it stuck?"* This is the hardest of the four and the most differentiating — most side projects have no answer to it at all.

### 4. Embeddings + chunking + retrieval (optional stage 8)
Their nice-to-have, plus focus areas 3 and 4.
Extract metadata → chunk → embed → retrieve. This also closes the ML/LLM gap flagged in reports 008 and 009 for the Anthropic roles, so it pays for itself twice.

**Stack choice to mirror theirs:** Go (in their stack, and your strongest), PostgreSQL, and **Lambda + SQS + Step Functions** for orchestration specifically — those four are named in the JD and absent from `cv.md` today.

---

## If you interview

**Lead with the legacy-refactoring line.** It is their first stated requirement and your strongest match. The NMS modernisation — legacy SatCom deployments feeding a next-gen architecture, with 100% stability maintained through regulated verification testing — is a better answer to *"navigating the trade-offs of refactoring legacy systems while maintaining high availability"* than most candidates will have.

**Then the consensus story.** The Keycloak stalemate (a month-long deadlock, broken by independently evaluating options on cost and performance and shipping the decision) directly answers *"building consensus across cross-functional engineering teams."*

**Then the ERD standard** for database design judgment — proposed and adopted across all scrum teams is influence-without-authority evidence, not just schema skill.

**Be straightforward about the gaps.** You have not built content-ingestion pipelines professionally, and you have no document-format or OCR background. The honest framing: *"I've built the pipeline patterns — backpressure, idempotency, observability — on telemetry and geospatial data rather than documents. The project is where I closed the format-parsing and serverless-orchestration parts deliberately."* That is a stronger answer than stretching NMS work to sound like ETL.

**Expect a question about `Scribd Flex`.** The JD says *"Occasional in-person attendance is required for all Scribd, Inc. employees, regardless of location."* Clarify what that means from Ottawa in practice — frequency, and who pays — before it becomes a surprise.

**Ask these:**
1. Is Ottawa an actual site, or purely a payroll/hiring location? What does the Canadian entity look like?
2. Where does Ottawa sit in the Canadian geographic bands quoted in the JD?
3. What does "occasional in-person attendance" mean concretely for a Canada-based hire?
4. Of the six focus areas listed, which two would this role own first?
5. How much of the work is modernising the decade-old systems vs. building new services?

---

## Related

- **Generic core:** [fundamentals-plan.md](fundamentals-plan.md) — do this first
- **Company/board assessment:** Scribd runs on Ashby; 19 roles, 17 Ottawa-eligible, 10 in Engineering
- **Competing target with better domain fit:** the Lyft Toronto mapping roles (Places and Search, Routing, MapXP) — surfaced by the 2026-08-12 reverse-ATS sweep, `reports/scans/2026-08-12.md`
