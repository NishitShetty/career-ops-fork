# Overlay — Cohere, Forward Deployed Engineer (Sovereign AI)

**Req:** https://www.linkedin.com/jobs/view/4383939143/ · LinkedIn job id 4383939143
**Location:** Ottawa (proximity to government customers), 20–40% travel
**Comp:** CAD 175,000 – 385,000 · **Clearance:** eligibility for Active Top Secret
**Evaluation:** [reports/019-cohere-2026-08-14.md](../reports/019-cohere-2026-08-14.md) — **3.8/5, Apply**
**Created:** 2026-08-31

> Read [fundamentals-plan.md](fundamentals-plan.md) first. This overlay adds role-specific weighting on top of the generic core.

---

## Why this role matters more than the others

Of 19 evaluated roles, this is the only one that clears every structural constraint at once:

| Constraint | This role |
|---|---|
| Comp floor CAD 200,000 | ✅ Band is 175–385K. Reports 011–018 all topped out at 108–176K. |
| Location | ✅ **Ottawa.** No relocation. |
| Work authorization | ✅ Not needed — Canadian citizen |
| Clearance | ✅ Eligible as a citizen. This *narrows the field* rather than blocking you. |
| CA + US entity | ✅ Toronto HQ, offices in NYC/SF/Montreal — targeting priority (a) |

Everything else in the tracker failed at least one of these. Treat it accordingly.

---

## The honest odds, and what actually moves them

**200+ applicants within an hour of posting.** You will not out-compete that pool on AI credentials — you have none. You compete on the half of the job most applicants *don't* have.

Read what they asked for, verbatim:

> *"We are seeking engineers with diverse skill sets, including backend, infrastructure, **agent development, and deployments**, who deeply care about customers"*

**Deployments is a named, first-class slot.** And:

> *"**Lead end-to-end deployment of North in private cloud and on-premises environments**, including planning, configuration, testing, and rollout"*

That is not adjacent to your record — it *is* your record. Inmarsat site acceptance testing in Michigan and Perth. Debugging an aviation network traffic drop before the aircraft landed. A 4 AM fix to make a 10 AM executive demo. Helm-based deployment standardisation. Eleven years of shipping into customer environments where failure was visible and immediate.

**The pitch is: "I'm the deployment and customer half of this role. The agent half is what I'm actively building."** Honest, specific, and it maps to a slot they explicitly listed.

### What moves the odds, ranked

1. **Applying this week.** Every day costs you against a pool that grows hourly.
2. **A referral.** Worth more than anything else on this list. See Track 1.
3. **The deployment framing landing in the first six lines** of your CV and cover letter.
4. **A working RAG/agentic artifact** — matters for the *interview*, not the application. Don't wait for it.

---

## Track 1 — Apply this week (do not wait for the project)

**This is the part people get wrong.** Building the project first and applying in six weeks means applying to a closed req. Apply now with what you have; build in parallel.

### Before you submit

- [ ] **Reframe `cv.md` for deployment, not satcom.** Your summary currently opens with "Satellite Communications (SatCom) lifecycle." For this req it should open with customer-facing delivery of production systems into client environments. Same facts, different first sentence. Run `/career-ops pdf cohere` once edited.
- [ ] **Promote the four deployment proof points** to the top of the experience section: Inmarsat SAT (Michigan, Perth) · in-flight traffic-drop debug · 4 AM pre-demo fix · Helm deployment standardisation, 1hr → 5min (92%).
- [ ] **Be precise about Python.** The JD says *"shipped (lots of) Python in production."* You have Python in your stack; every quantified result in `cv.md` is Go, Java, Helm, or firmware. **Claim familiarity, never volume.** A screener will ask, and "I've shipped production Go and Java; Python I use but wouldn't claim as my deepest language" is a better answer than being caught.
- [ ] **Cover letter** via `/career-ops cover cohere`. Lead with the deployment thesis. Name the AI gap in one sentence and say what you're doing about it — do not hide it, and do not over-apologise.
- [ ] **Say yes to clearance.** The JD accepts *"candidates eligible and willing to obtain clearance."* Willing is the answer.

### The referral, which is worth more than the CV

Run `/career-ops contacto` for this req. Cohere's Ottawa presence is small and new — the team is likely a handful of people, which makes a warm intro disproportionately effective and unusually achievable. Look for Cohere FDEs or solutions engineers in Ottawa, and anyone in the Ottawa satcom/defence community who has moved there.

---

## Track 2 — The project that closes the gap

### Decision: build the RAG layer *first*, then fold it into urban-heat-atlas

`urban-heat-atlas` is the right long-term project — geospatial moat, transferability research, EB-1A material. But **CatBoost and spatial ML do not close the Cohere gap.** Its optional stage 9 (embeddings → chunking → retrieval) is the only part that speaks to this role.

So invert: **build stage 9 as a standalone artifact now**, and fold it into the atlas later as its question-answering layer. One body of work, ordered so the urgent half ships first.

### What to build: a deployable RAG-and-agent system over Canadian public-sector documents

**Why this corpus specifically.** An FDE at Cohere deploys AI over *sensitive enterprise data* in *on-premises environments* for *government customers*. A retrieval system over municipal bylaws, council minutes, and federal open documents is structurally the same problem — domain-specific documents, grounded answers, auditability requirements — and it is **public-sector flavoured**, which is the literal "Sovereign AI" framing of the role.

### Scope — ~35 hours

| # | Component | Why it matters for this role |
|---|---|---|
| 1 | **Ingestion** — real public docs (Ottawa council minutes, bylaws, federal open data). Chunking, metadata extraction | You already do messy-input ingestion; this is that skill in a new medium |
| 2 | **Retrieval** — embeddings + vector search, hybrid keyword/semantic | The core RAG competency |
| 3 | **An agent that takes an action**, not just answers — e.g. "find every bylaw amended since 2024 and produce a summary table." Multi-step, tool-calling | JD: *"Develop autonomous agents"*, *"design and build agentic workflows"* |
| 4 | **An eval harness** — a scored test set, regression detection, a rubric for "correct" | **The single highest-signal component.** See below. |
| 5 | **On-prem deployability** — Docker Compose, runs against a local model, no external API required | JD: *"private cloud and on-premises environments"* — the exact deployment constraint |
| 6 | **Citations in every answer** — grounded, traceable to source document and page | Non-negotiable for government/regulated use, and it's what makes an AI product trustworthy |

### The eval harness is the differentiator — build it, don't skip it

Almost every portfolio RAG project stops at "it answers questions." Very few have an eval harness. **Both** the Cohere-shaped roles you've looked at named it — Mercury asked for it explicitly, and Cohere's *"experiment at a high velocity and with a high level of quality"* means the same thing.

It's also the component that lets you say something concrete instead of something vague:

> *"Retrieval hits the correct source document 87% of the time on a 120-question set I labelled myself. The 13% failures cluster on questions spanning multiple bylaws, which is why I added the multi-hop path."*

That sentence is worth more than the entire rest of the project, because it demonstrates you measure rather than assert — the same instinct behind the Phase 2 ablation in `urban-heat-atlas`.

### Stack

Python (this project *is* your Python production evidence) · an embedding model · a vector store — start with pgvector or Chroma, not a managed service, because on-prem is the point · Docker Compose · a local model via Ollama, with the API-model swap documented · FastAPI + a thin read-only UI.

**Deliberately not:** LangChain-heavy abstraction. Write the retrieval loop yourself. In an interview you'll be asked how retrieval works, and "the framework did it" is a failed answer.

### Timeline

At the standing 15% budget this takes ~5 months, which is too slow. **Temporarily reallocate to roughly 50/50 with DSA for six weeks** to land it in ~6 weeks, then return to the 85/15 split. This is a deliberate, time-boxed exception — the standing allocation exists because DSA gates every employer, and that logic still holds after this sprint.

---

## Track 3 — Interview preparation

### Expected loop (FDE roles, typical shape)

1. **Recruiter screen** — motivation, clearance willingness, comp expectations
2. **Technical screen** — Python coding, likely practical rather than algorithmic
3. **System design** — deploy an AI system into a constrained customer environment
4. **Customer-scenario round** — the round you should *win*
5. **Team fit**

### Where you win: the customer round

This is the round most engineers are weakest in and you are strongest. Have these ready as STAR+R:

| Scenario | Story |
|---|---|
| High-stakes delivery under time pressure | 4 AM terminal-movement fix → successful 10 AM Inmarsat executive demo |
| Debugging in a live customer environment | Aviation network traffic drop, resolved before the aircraft landed |
| On-site deployment | Site Acceptance Testing, Michigan and Perth |
| Breaking a stakeholder deadlock | Month-long Keycloak stalemate, resolved by evaluating options and shipping the decision |
| Cross-functional ownership | STO across 6 epics, aligning PM, architects, UX |
| Deployment engineering | Helm standardisation, 1hr → 5min (92%) |

### Where you're weak: the AI rounds

Be ready for: how RAG retrieval actually works · chunking strategy trade-offs · why an agent loop fails and how you bound it · hallucination mitigation and grounding · evaluating a non-deterministic system · latency and cost trade-offs in production LLM deployments.

**Ground every answer in the project.** "In the system I built, I chunked on section boundaries rather than fixed token windows because bylaws have semantic structure, and it moved retrieval accuracy from X to Y." Specific beats theoretical.

### The clearance conversation

You are eligible as a Canadian citizen. Confirm willingness plainly. Reasonable to ask: does the role require clearance *before* start, or is it obtained on the job? That timeline can be months and it affects your start date.

### Questions to ask them

1. How large is the Ottawa team today, and how does it split between FDE and core product?
2. What does a typical North on-prem deployment involve end to end — and how long does one take?
3. Which is the bigger constraint right now, deployment throughput or product capability?
4. Where does the band's 175–385K spread map to level, and what level is this req?
5. How much of the role is net-new agent development versus deploying and adapting existing capability?

---

## What not to do

- **Don't wait for the project to apply.** The req is a day old with 200+ applicants and it will not be open in six weeks.
- **Don't claim Python volume, LLM experience, or RAG production work you don't have.** One probing question ends the interview and the reputational cost outlasts the req.
- **Don't abandon `urban-heat-atlas`.** This RAG artifact becomes its stage 9. Same project, reordered.
- **Don't let the DSA reallocation become permanent.** Six weeks, then back to 85/15.

## Success criteria

- [ ] Applied within 7 days of 2026-08-31
- [ ] Referral attempted via `/career-ops contacto`
- [ ] CV reframed around deployment; PDF generated
- [ ] RAG artifact live with an eval harness and a number to quote
- [ ] `portfolio_url` populated in `config/profile.yml`
