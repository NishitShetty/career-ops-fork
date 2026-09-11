# Prep — Google, Technical Program Manager, Google Public Sector

**Req:** https://www.google.com/about/careers/applications/jobs/results/85741897305203398-technical-program-manager-google-public-sector
**Locations:** Ottawa · Toronto · Montreal · Remote-eligible (Ontario)
**Comp:** CAD 166–170K base + 15% bonus target + equity · **Level posted:** Mid (maps to L4)
**Clearance:** Must hold or be eligible for a Canadian Personnel Security Clearance
**Evaluation:** [reports/020-google-2026-09-10.md](../reports/020-google-2026-09-10.md) — **4.0/5, Apply**
**Created:** 2026-09-10

> Covers the prep items flagged in report 020 Block F. Read Part 6 before the FAQs —
> the bridge from your record to this vocabulary is the whole argument.

---

## Why this document exists

The evaluation found one weak spot, and it is a **minimum** qualification:

> *"Experience in designing and delivering programs to meet contractual requirements and obligations within the public sector environment."*

You have the delivery half and not the public-sector half. The gap is **narrower than it looks**, because it is largely a vocabulary gap over a discipline you already practise. This document closes the vocabulary gap and shows you where your record already speaks the language under different names.

**It does not manufacture public-sector experience.** You will still say "I have not delivered a government program." What changes is that the sentence after it is informed rather than empty.

---

# Part 1 — The commercial contract stack: MSA, SoW, Order Form

The JD names three artifacts:

> *"Ensure strict adherence to contractual client commitments across all relevant Master Services Agreements (MSAs), Statement of Works (SoWs), and order forms."*

These are not three words for the same thing. They are **three layers of one structure**, and the reason the structure exists is that renegotiating legal terms for every project would be unworkable.

```
┌─────────────────────────────────────────────────────┐
│  MSA — Master Services Agreement                    │
│  Signed once. Governs the whole relationship.       │
│  Liability caps · IP ownership · confidentiality ·  │
│  indemnities · payment terms · termination ·        │
│  governing law · dispute resolution                 │
└─────────────────────────────────────────────────────┘
            ▲                    ▲
            │ plugs into         │ plugs into
┌───────────┴──────────┐  ┌──────┴───────────────────┐
│  SoW #1              │  │  SoW #2                  │
│  One project.        │  │  A different project.    │
│  Scope · deliverables│  │  Own scope, own dates,   │
│  milestones ·        │  │  own acceptance criteria │
│  acceptance criteria │  │                          │
│  · pricing · term    │  │                          │
└──────────────────────┘  └──────────────────────────┘
            ▲
            │
┌───────────┴──────────────────────────────────────────┐
│  Order Form                                          │
│  The transactional layer. Quantities, SKUs, terms,   │
│  start date, price. "300 seats of X for 12 months."  │
└──────────────────────────────────────────────────────┘
```

### What each one actually is

**MSA — the rulebook.** Negotiated once, often over months, by legal on both sides. It answers *"if this relationship goes wrong, what happens?"* — who owns the IP, what the liability cap is, who indemnifies whom, how either side exits. It deliberately contains **no project detail**, because project detail changes and you do not want to reopen liability negotiations every quarter.

**SoW — the work.** This is the TPM's document. Scope, deliverables, milestones, dates, acceptance criteria, assumptions, dependencies, pricing for this engagement. Shorter than the MSA and far more specific. Each SoW "plugs into" the MSA and inherits its legal terms.

**Order Form — the transaction.** Products, quantities, subscription terms, start dates, price. In a cloud context this is often what actually turns commitments into billing.

### The four things a TPM gets burned by

**1. Order of precedence.** When the SoW and the MSA conflict, which controls? A well-drafted MSA states this explicitly — usually the MSA wins **unless** the SoW expressly overrides a named clause. Get this wrong and you commit to something the SoW appears to permit and the MSA forbids.

> **Interview-usable:** *"The first thing I'd want to know about a new SoW is the order-of-precedence clause — whether it can override the MSA and, if so, on which terms."* That single sentence signals you have thought about this structurally.

**2. Acceptance criteria are the real deadline.** "Delivered" is not when you ship. It is when the customer **accepts** against the criteria written in the SoW. Vague acceptance criteria are how programs that look done stay open for months. This is the concept your Site Acceptance Testing work maps onto exactly — see Part 6.

**3. Assumptions and dependencies are contractual.** A SoW usually lists what the *customer* must provide — data, access, environments, sign-off within N days. When the customer misses those, the schedule relief has to be claimed, in writing, at the time. TPMs who let it slide silently absorb the delay into their own schedule and then own a slip that was not theirs.

**4. Change control.** Scope changes go through a written amendment or change order, not a meeting. "We agreed in standup" is not a contract modification.

**References:** [Ironclad — MSA vs SOW](https://ironcladapp.com/journal/contracts/msa-vs-sow) · [PandaDoc — MSA vs SOW](https://www.pandadoc.com/blog/master-services-agreement-vs-statement-of-work/) · [HCR Law — distinguishing MSA and SoW](https://www.hcrlaw.com/news-and-insights/distinguishing-between-a-master-services-agreement-and-a-statement-of-works/)

---

# Part 2 — How Canadian federal procurement actually works

**This is the part that makes the role "public sector" rather than just "enterprise."** The commercial stack above has a government analogue with different names and materially different rules.

### The layered structure

| Commercial | Government of Canada | What it is |
|---|---|---|
| MSA | **Standing Offer** / **Supply Arrangement** / **Framework Agreement** | Pre-negotiated terms and pricing with qualified suppliers. **Not itself a contract.** |
| SoW | **Call-up** (against a Standing Offer) or **Contract** (from a Supply Arrangement) | The instrument that creates the actual binding obligation |
| Change order / task | **Task Authorization (TA)** | Authorises specific work under an existing contract, common in professional services |

**The critical distinction, and it is a favourite interview question:**

- A **Standing Offer** is an offer to supply at pre-arranged prices and terms. **It is not a contract.** It becomes one only when a department issues a **call-up** against it. Canada's liability is limited to the actual value of call-ups made — **there is no guaranteed minimum volume.**
- A **Supply Arrangement** is not a contract either. It pre-qualifies a pool of suppliers, and departments then solicit bids *from that pool* for specific requirements.

**Why a TPM should care:** being on the vehicle is not revenue. Winning the call-up is. A program plan built on the assumption that a framework agreement guarantees work is built on sand — and the flip side is that call-ups can arrive with short lead times against terms already locked months earlier.

### Google's actual position

Google Cloud holds a **Framework Agreement for Secure Cloud Services** with the Government of Canada, and has announced a second Canadian data-centre region in Toronto.

Shared Services Canada (SSC) established framework agreements with multiple public cloud providers and runs a **Cloud Brokering Portal** through which departments self-serve. SSC acts as broker between departments and providers for IaaS, PaaS and SaaS.

**The live competitive pressure:** SSC has also launched a procurement track prioritising **Canadian-owned and controlled** sovereign cloud providers. That is a real headwind for US hyperscalers in Canadian government, and it is almost certainly part of why this team is hiring. Knowing it exists is a strong signal in an interview — it shows you researched the business context rather than just the JD.

**References:** [CanadaBuys — standing offers and supply arrangements](https://canadabuys.canada.ca/en/tender-opportunities/standing-offers-and-supply-arrangements) · [Google Cloud awarded GC Framework Agreement](https://www.prnewswire.com/news-releases/google-cloud-awarded-framework-agreement-for-secure-cloud-services-by-canadian-federal-government-301157484.html) · [SSC cloud services evaluation](https://www.canada.ca/en/shared-services/corporate/about-us/transparency/audits-evaluations/2024-25/evaluation-ssc-cloud-services.html) · [BidFit — federal procurement process](https://bidfit.ca/guides/federal-procurement-process-canada)

---

# Part 3 — Data classification: the constraint that drives everything

**If you learn one technical thing from this document, learn this.** Canadian government data classification is what turns an ordinary cloud program into a hard one, and it is the substance behind "sovereign/air-gap infrastructure" in the preferred qualifications.

### Two ladders

| Ladder | Levels | Meaning |
|---|---|---|
| **Protected** (personal/business sensitive) | Protected A → B → C | Injury to a **person or organisation** |
| **Classified** (national interest) | Confidential → Secret → Top Secret | Injury to the **national interest** |

**Protected B is the centre of gravity.** Treasury Board has determined that commercial public cloud can, under conditions, adequately protect data **up to and including Protected B**. That single policy decision is why most GC cloud work targets exactly that line.

### PBMM — the acronym to know cold

**PBMM = Protected B / Medium Integrity / Medium Availability.**

It is a **security control profile**, not a product. It comes from **ITSG-33** (the CCCS IT security risk management framework) and is expressed in the *Government of Canada Security Control Profile for Cloud-Based GC Services*. It defines the baseline set of controls a system must implement to handle Protected B data at medium integrity and medium availability.

**How assessment actually works** — and this is a nuance worth having:

> Cloud providers **do not assess themselves against ITSG-33.** They hold internationally recognised certifications (ISO 27001, SOC 2 and so on), and the **Canadian Centre for Cyber Security (CCCS)** runs a CSP IT Security Assessment Program that evaluates whether a provider's controls meet GC requirements up to PBMM.

So there is a chain: *international certification → CCCS assessment → departmental authority to operate.* A TPM delivering into this environment is managing a program whose gating milestones are **compliance events, not engineering events** — and those have their own schedules, owners, and failure modes.

**Above Protected B**, you leave commercial public cloud. Classified workloads need isolation — which is where air-gapped offerings come in.

**References:** [GC Security Control Profile for Cloud-Based Services](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/cloud-services/government-canada-security-control-profile-cloud-based-it-services.html) · [CCCS — CSP IT security assessment process (ITSM.50.100)](https://www.cyber.gc.ca/en/guidance/cloud-service-provider-information-technology-security-assessment-process-itsm50100) · [Direction on Secure Use of Commercial Cloud Services (SPIN)](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/cloud-services/direction-secure-use-commercial-cloud-services-spin.html) · [Google Cloud — Protected B landing zones](https://cloud.google.com/blog/topics/public-sector/meet-canadian-compliance-requirements-protected-b-landing-zones) · [GC White Paper: Data Sovereignty and Public Cloud](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/cloud-services/digital-sovereignty/gc-white-paper-data-sovereignty-public-cloud.html)

---

# Part 4 — Sovereign and air-gapped: what Google actually sells

The preferred qualification says *"sovereign/air-gap infrastructure."* Google's portfolio has three tiers, and confusing them in an interview would be costly.

| Offering | What it is | Who buys it |
|---|---|---|
| **Google Cloud Data Boundary** | Controls **where** data is stored and processed. Boundary controls pin processing and storage to a region or country. Runs on the public cloud. | Organisations with data-residency obligations |
| **Google Cloud Dedicated** | Regional data **and operational** sovereignty, delivered by a **local independent operator** — partnerships with Thales in France, T-Systems in Germany. Designed to remain survivable for up to a year without Google. | National compliance regimes requiring operational independence from the US |
| **Google Cloud Air-Gapped** | **Fully standalone.** No connectivity to external networks required. Authorised for classified US government data in isolated environments. | Intelligence, defence, strictest security requirements |

**The three sovereignties worth distinguishing** — this framing will serve you well:

1. **Data sovereignty** — where data physically lives
2. **Operational sovereignty** — who can touch it, and from which jurisdiction
3. **Software sovereignty** — can it keep running if the provider is cut off?

Data Boundary addresses (1). Dedicated addresses (1)+(2)+(3). Air-Gapped is the extreme of all three.

**Why this matters to a TPM, concretely:** an air-gapped program inverts normal cloud delivery. No continuous deployment from a central pipeline. No telemetry flowing back. No remote debugging. Updates ship as physical or tightly-controlled media on a release cadence. Your feedback loop is measured in weeks, and every bug you cannot reproduce locally is a genuine problem.

**References:** [Sovereign Cloud from Google](https://cloud.google.com/sovereign-cloud) · [Google Cloud — delivering a secure, open, sovereign digital world](https://cloud.google.com/blog/products/identity-security/delivering-a-secure-open-sovereign-digital-world) · [The Register — Google extends sovereign cloud options](https://www.theregister.com/off-prem/2025/05/21/google-extends-sovereign-cloud-options-over-us-anxieties/750322)

---

# Part 5 — The clearance: levels, timeline, what to expect

### Levels

| Level | Grants access to | Citizenship |
|---|---|---|
| **Reliability Status** | Protected A, B, C | Not strictly required |
| **Secret** | Secret | Generally required |
| **Top Secret / Enhanced Top Secret** | Top Secret | **Canadian citizens only** |

**Reliability Status is a prerequisite** for Secret and Top Secret — and the clock for the higher levels **starts after Reliability is granted**, not in parallel. This is the single most misunderstood part of the timeline.

### Timelines (indicative, and highly variable)

| Level | Simple | Complex |
|---|---|---|
| Reliability Status | ~7 business days | up to ~120 business days |
| Secret | ~75 business days | 6–12 months |
| Top Secret | — | 6–18 months |

Complexity is driven mainly by **time spent outside Canada** — foreign residence, education, and employment all require verification, and each foreign period extends the process.

**Your situation:** you completed an MEng at the University of Maryland (2012–2014) and worked at iDirect in the USA. That is a meaningful period of US residence and employment. It does not disqualify you — it is routine and verifiable — but it likely puts you in the "complex" bucket for timeline purposes. **Expect months, not weeks, and raise it early** rather than being surprised by it.

### What this means practically

Ask in the recruiter screen whether the clearance must be **in place before start** or is obtained **on the job**. The answer materially changes your start date and therefore your notice period and any competing offers. The JD's phrasing — *"hold or be eligible to obtain"* — suggests obtained on the job, but confirm it.

**References:** [PSPC Contract Security Program / screening overview](https://www.jrvs.ca/blog/government-personnel-security-screening-canada) · [TBS Directive on Security Screening](https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=32805) · [BidFit — clearance timelines](https://bidfit.ca/guides/security-clearance-timeline-canada) · [CSE — hiring process and security](https://www.cse-cst.gc.ca/en/careers/hiring-process-and-security)

---

# Part 6 — The bridge: you already do this, commercially

**Read this before the FAQs.** It is the argument that makes the rest usable.

Government contracting is not a different discipline from what you have done. It is the **same discipline under a stricter regime with more formal vocabulary.** Every core concept above has a direct analogue in your record.

| Contract concept | Your equivalent (from `cv.md`) |
|---|---|
| **Acceptance criteria** — delivery is when the customer accepts, not when you ship | **Site Acceptance Testing for Inmarsat in Michigan and Perth.** SAT *is* formal acceptance against agreed criteria, performed on the customer's site, with sign-off gating completion. This is the single strongest mapping you have. |
| **Compliance-gated release** — a program milestone that is an audit event, not an engineering one | **"100% system stability during high-scale RVT."** A verification gate that must pass before release proceeds. |
| **SLA / service commitment under live conditions** | **The aviation network traffic-drop debug, resolved before the aircraft landed.** A live-service obligation with a hard, externally imposed deadline. |
| **Milestone commitment with external visibility** | **The 4 AM terminal-movement fix for a 10 AM Inmarsat executive demo.** |
| **Multi-party delivery with dependency management** | **STO across 6 Epics**, aligning PM, architects, and UI/UX; **PI planning across Belgium, USA and Canada.** |
| **Scope change absorbed against a committed plan** | **The overnight "Connector-3" re-plan** before a stakeholder readout. |

**The sentence that carries the interview:**

> *"I have not delivered a government program. But I have spent eleven years delivering against external customer commitments where acceptance was formal, the deadline was someone else's, and failure was visible — Site Acceptance Testing on the customer's site in Michigan and Perth, regulated verification gates before release, and a live aviation network fault I had to close before the aircraft landed. The instruments are new to me. The discipline is not."*

That is honest, specific, entirely backed by `cv.md`, and it reframes the gap from *missing experience* to *missing vocabulary* — which is true, and which you will have closed by the time you say it.

> ⚠️ **Unresolved before you use this:** `cv.md` and your Technical resume expand RVT as **"Regulated Verification Testing"**; your Product resume says **"Release Validation Testing."** These cannot both be right, and the first is doing real work in the argument above. Settle it before an interview — an interviewer who asks what RVT stands for will get a confident wrong answer otherwise.

---

# FAQs — interview questions and how to answer them

## A. Contract and delivery fundamentals

**Q1. What's the difference between an MSA and a SoW?**

> The MSA is the governing agreement for the relationship — liability, IP, confidentiality, payment terms, termination. It's negotiated once and deliberately contains no project detail. The SoW is per-engagement: scope, deliverables, milestones, acceptance criteria, assumptions and dependencies. Each SoW plugs into the MSA and inherits its legal terms. The thing I'd check first on any new SoW is the order-of-precedence clause — whether the SoW can override the MSA, and on which terms, because that's where teams accidentally commit to something the master agreement forbids.

**Q2. What's an order form for, if you already have an MSA and a SoW?**

> It's the transactional layer — SKUs, quantities, subscription term, start date, price. In a cloud engagement it's often what actually turns a commitment into billing and entitlement. The MSA says how we work together, the SoW says what we're building, the order form says what's being bought and when the meter starts.

**Q3. The customer insists a feature is in scope. The SoW doesn't mention it. What do you do?**

> I don't litigate it in the meeting. I confirm my reading in writing, and I separate two questions: is this genuinely in scope under a reasonable reading, and — regardless — do we want to do it? If it's out of scope and we want to do it, it goes through change control as a written amendment, not a verbal agreement in standup. What I won't do is absorb it silently, because unpriced scope that isn't tracked becomes a schedule slip nobody can explain three months later.
>
> **Follow with the real story:** the month-long Keycloak stalemate. *"I've been on the other side of this — a decision that stayed open because nobody would own it. I evaluated the options, picked the most cost-effective one, implemented it, and documented why. The lesson I took was that unresolved scope questions don't decay, they compound."*

**Q4. How do you track contractual commitments across a multi-team program?**

> I want a single register that maps every contractual obligation — deliverable, milestone, acceptance criterion, SLA — to an owning team and a current status, and I want it reviewed on a cadence rather than at milestone boundaries. The failure mode I'd guard against is commitments living only in the contract document while the team tracks work in a backlog that was never reconciled against it. Those two drift, and you find out at acceptance.

**Q5. You're going to miss a contractual milestone. Walk me through the next 48 hours.**

> First, confirm it's real and size it — what exactly slips, by how long, and what depends on it. Second, check whether the cause is ours or a customer dependency that was an assumption in the SoW, because those have different remedies and the relief has to be claimed at the time, not retroactively. Third, decide the options: descope to hit the date, move the date, or add capacity — with the cost of each. Then escalate with the options, not just the problem.
>
> The part I'd insist on is telling the customer early. A miss you flag three weeks out is a replanning conversation. The same miss flagged three days out is a trust problem.
>
> **Back it with:** the overnight Connector-3 re-plan — *"I've done the compressed version of this. A high-priority requirement landed and I re-architected the delivery plan overnight so the stakeholder readout could still happen with a commitment we could actually meet."*

**Q6. How have you worked with legal and finance?**

> **Answer honestly — this is a real gap.** *"Not much, and I'd be learning that. My stakeholder set has been product, architecture, UX and quality, plus customers directly during deployments. What I'd bring is the habit of getting the decision made rather than letting it sit — the Keycloak situation was a month-long deadlock across teams that I broke by evaluating the options and committing to one. I'd expect legal and finance to be a different vocabulary, not a different problem."*
>
> Do not invent a legal or finance story. The follow-up question will find it.

## B. Public sector specifics

**Q7. What's different about delivering for government versus a commercial customer?**

> Three things stand out to me. The contracting instruments are layered differently — a Standing Offer or Framework Agreement isn't itself a contract, it's a pre-negotiated vehicle, and the binding obligation only exists once a department issues a call-up. So being on the vehicle isn't revenue, and program plans that assume otherwise are fragile.
>
> Second, compliance is a delivery milestone rather than a background activity. Data classification drives the architecture, and the authorisation events have their own schedules and owners that aren't under my control.
>
> Third, the procurement process is public and rule-bound in a way commercial negotiation isn't, which changes how much flexibility exists mid-flight.

**Q8. What is Protected B, and why does it matter to us?**

> It's the GC data classification level where injury from disclosure is serious but not to the national interest. It matters because Treasury Board has determined commercial public cloud can adequately protect data **up to and including** Protected B — which makes it the line most GC cloud work is built against.
>
> The control profile is **PBMM** — Protected B, Medium Integrity, Medium Availability — derived from ITSG-33 and expressed in the GC Security Control Profile for Cloud-Based Services. And the assessment path is worth being precise about: providers don't self-assess against ITSG-33. They hold international certifications, and CCCS runs an assessment program that evaluates whether those meet GC requirements up to PBMM. Above Protected B you're into classified, and that's where isolation and air-gapped environments come in.

**Q9. What does "air-gapped" actually mean, and what does it do to your delivery process?**

> Fully standalone — no required connectivity to external networks. Google Cloud Air-Gapped sits at that end of the sovereign portfolio, below Dedicated, which gives operational sovereignty through a local independent operator, and Data Boundary, which controls residency on the public cloud.
>
> What it does to delivery is invert the normal cloud model. No continuous deployment from a central pipeline, no telemetry flowing back, no remote debugging. Releases ship on a controlled cadence, and your feedback loop goes from minutes to weeks. As a TPM that changes the plan structurally: you front-load validation, because you can't hotfix your way out, and any defect that can't be reproduced outside the environment is a genuinely hard problem.
>
> **Bridge to your record:** *"That constraint is familiar in shape. In SatCom I worked on terminals in the field where you couldn't just redeploy — the Inmarsat deployments in Michigan and Perth were on-site precisely because remote iteration wasn't available."*

**Q10. How would you run a program where the customer can't fully describe the workload?**

> I'd separate what's genuinely classified from what's merely unfamiliar, because in my experience most of it is the second. Then I'd push for the abstractions I actually need — data volumes, latency envelopes, availability expectations, integration surfaces — without needing to know what the data is. If real detail is withheld, I'd make that an explicit, written assumption in the plan with a named risk, so that when the assumption turns out wrong we're revising a documented decision rather than discovering a surprise.

## C. TPM craft

**Q11. How do you handle a dependency on a team that doesn't report to you?**

> That's most of the job. **STO across 6 Epics with PM, architects, and UI/UX** — none of whom reported to me. What works is making the dependency explicit and dated in a place both teams see, and getting agreement on the date from the person who owns the work rather than announcing it. What doesn't work is escalating early; escalation spends credibility, so I save it for when the date is actually at risk and I've already tried directly.

**Q12. Tell me about a time you re-planned under pressure.**

> The Connector-3 re-plan — a high-priority requirement arrived and I re-architected the delivery plan overnight so the stakeholder readout the next day carried a commitment we could actually meet. *(Expand as STAR: the requirement, the constraint of the fixed readout, what you cut and resequenced, the readout outcome.)*

**Q13. How do you decide what to escalate?**

> When I can't resolve it at my level within a timeframe that still leaves options. The test I use is whether escalating buys a decision that's otherwise unavailable — more resource, a scope call, a priority ruling. If it just transfers anxiety upward, it isn't an escalation, it's a status update. And I escalate with options and a recommendation, not just a problem.

**Q14. How would you use AI/ML tooling to analyse program health?**

> **This is a stated preferred qualification you don't have. Do not bluff it.**
>
> *"I haven't shipped that, so I'll tell you how I'd approach it rather than claim experience. The signals I'd want are the ones humans miss — not whether a milestone is red today, but whether its slip rate is accelerating, whether estimate churn on a workstream is rising, whether review latency is trending up. Those are leading indicators and they're exactly the kind of thing worth automating, because a human reading a status deck sees the current state and not the derivative.*
>
> *What I'd be careful about is measuring what's easy rather than what predicts. A dashboard that's green until the week it isn't is worse than no dashboard, because people trust it."*
>
> That answer demonstrates judgment about the problem, which is what's actually being tested.

## D. Fit and motivation

**Q15. Why a TPM title now?**

> I've been doing the work without the title since April 2023. Single-Threaded Owner of the NMS Map Visualization capability across six epics — planning, dependency management, stakeholder alignment across PM, architecture and UX, and the technical trade-off calls. Before that I ran PI planning as Scrum Master for distributed teams across Canada, the US and Belgium. What I want is to do it at larger scope, and to stop splitting my time between owning the program and writing the code.

**Q16. Why Google Public Sector, specifically?**

> Two reasons, one general and one particular.
>
> The particular one: I've spent eleven years in satellite communications, which is infrastructure that governments and regulated industries depend on and where availability and compliance aren't negotiable. Public sector cloud is a different technology stack with the same posture, and that's the part I actually like.
>
> The general one: the sovereignty question is genuinely live in Canada right now. SSC is running a procurement track prioritising Canadian-owned providers at the same time Google holds a Framework Agreement for Secure Cloud and is building a second Toronto region. That's a real competitive problem, not a settled one, and I'd rather work on something contested.

**Q17. You don't have public sector experience. Why should we hire you?**

> **The Part 6 sentence.** Then:
>
> *"Two things I'd add. I'm a Canadian citizen and eligible for the clearance, which I understand is a hard filter on this role. And I can review an architecture and push back on it — the JD asks for development-level judgment on technical specifications, and I've done that as an engineer, not just managed people who do. I'd guess that combination is less common in your applicant pool than public sector experience is."*

---

# Questions to ask them

1. Is this req fixed at L4, or can the loop level to L5 given eleven years of experience?
2. The posting describes Google Public Sector as focused on **US** public sector institutions, but this role is Canadian and Canadian-clearance-gated. What's the Canadian mandate, and which customers does this team serve?
3. Does the clearance need to be in place before start, or is it obtained on the job? What timeline are you seeing?
4. How much of this role is sovereign or air-gapped delivery versus general Protected B cloud work?
5. Given SSC's push toward Canadian-owned sovereign providers, how is that shaping the team's roadmap?
6. What does the L4 → L5 path look like for a TPM on this team?

---

# What NOT to claim

- ❌ Public sector or government program delivery experience
- ❌ Defence or national security program delivery
- ❌ Ownership of MSA or SoW compliance as an artifact
- ❌ Shipped AI/ML tooling for program health
- ❌ Air-gapped infrastructure delivery
- ❌ Working relationships with legal or finance

Every one of these is a stated JD requirement you don't meet. Naming two of them yourself, unprompted and without apology, is more credible than having all six discovered.

---

# Prep checklist

- [ ] **Resolve the RVT expansion** — Regulated Verification vs Release Validation. Blocks the Part 6 bridge.
- [ ] Resolve the Helm vs CI/CD-decomposition discrepancy between your two resumes (report 020 / resume review)
- [ ] Re-read Parts 1–3 until MSA/SoW/order form and Standing Offer/call-up are automatic
- [ ] Memorise: **PBMM = Protected B, Medium Integrity, Medium Availability**; ITSG-33; CCCS assessment
- [ ] Be able to distinguish Data Boundary / Dedicated / Air-Gapped in one sentence each
- [ ] Write the Connector-3 re-plan and the Keycloak deadlock as full STAR+R entries in [story-bank.md](story-bank.md)
- [ ] Reframe `cv.md` per report 020 Block E, then `/career-ops pdf google`
- [ ] Apply — target within 7 days of 2026-09-10
- [ ] Run `/career-ops contacto` for a referral into the Ottawa or Toronto team
