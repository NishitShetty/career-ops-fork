# Fundamentals Prep Plan — DSA, System Design, and a Portfolio Project

**Owner:** Nishit · **Started:** 2026-08-03 · **Review cadence:** weekly, logged at the bottom

**Why this exists:** these fundamentals are portable. They're required for Tesla, Lyft, Amazon, Google, Uber and Microsoft alike — every employer in the Phase 1 target set. Nothing here is Tesla-specific; company-specific prep lives in `interview-prep/{company}-{role}.md`.

**Time budget assumption: 8–12 hrs/week** alongside a full-time job. The plan is built for that, not for a sabbatical. If a week slips, slip the plan — don't compress it.

---

## Honest starting assessment

| Area | Standing | Why |
|---|---|---|
| **Systems / low-level** | **Strong — this is your edge** | U-Boot bootloader memory audit, memory/CPU leak profiling, SatCom L1/L3. Most cloud candidates cannot speak to this. |
| **Distributed systems (practical)** | **Strong** | 11 years on an NMS — fleet telemetry, monitoring, remote control at production scale |
| **Kubernetes / AWS / PostgreSQL** | **Solid** | Helm pipeline, cloud-native NMS, production deployments |
| **System design (interview format)** | **Medium** | You *do* this work; you haven't had to perform it in 45 minutes on a whiteboard |
| **DSA / algorithms** | **Weak — the real gap** | 11 years since this was exercised daily. Assume rusty, not absent. |
| **Scala / Akka** | **None** | Zero on record. Preferred-not-required for Tesla; irrelevant elsewhere. |

**The strategic read: your DSA gap is the one thing standing between you and roles you're otherwise over-qualified for.** Don't over-invest in Scala at the expense of it — Scala helps at exactly one employer; DSA gates all of them.

---

## Phase 1 — Weeks 1–4: DSA core patterns

**Goal: rebuild fluency in the 8 patterns that cover the large majority of interview questions.** Not breadth — fluency.

- [ ] **Week 1 — Baseline + arrays/strings/hashing.** Do 3 timed medium problems *cold* on day 1 before studying anything, and record honestly how it went. That's your baseline. Then: two pointers, sliding window, frequency maps.
- [ ] **Week 2 — Binary search + sorting.** Search on sorted arrays, search on answer space, interval merging. Binary search on the answer is the highest-leverage single pattern; know it cold.
- [ ] **Week 3 — Trees + graphs.** BFS, DFS, level-order traversal, topological sort, cycle detection, union-find. Graph traversal is the most-asked category at senior level.
- [ ] **Week 4 — Heaps, stacks/queues, and consolidation.** Top-K, merge-K, monotonic stack. Re-do the week-1 baseline problems and compare.

**Method that matters more than the problem count:**
- **Timebox 35 minutes.** If stuck at 35, read the solution, understand it, and re-implement from scratch the next day. Grinding for 2 hours teaches you very little.
- **Talk out loud while solving**, even alone. The bottleneck in real interviews is narrating your reasoning, not finding the answer.
- **Volume target: 6–10 problems/week.** ~60 well-understood problems beat 300 skimmed.
- Prefer **medium** difficulty. Hard problems are a poor use of time at this stage; easy ones stop teaching quickly.

## Phase 2 — Weeks 5–8: Concurrency + system design

**This is where your existing strength converts into interview performance.**

- [ ] **Week 5 — Concurrency fundamentals.** Threads vs processes, mutexes/semaphores, deadlock and livelock, race conditions, atomics, memory model basics, thread pools. **Go's goroutines/channels and Java's concurrency primitives are both fair game — you know both languages.** This is explicitly named in the Tesla JD ("multi-threading, concurrency") and is genuinely rare in candidates.
- [ ] **Week 6 — System design framework.** Learn a repeatable structure: requirements → capacity estimation → API → data model → high-level design → deep dive → bottlenecks/failure modes. The structure is what's scored; freestyle designs read as unstructured even when technically sound.
- [ ] **Week 7 — Design drills in your own domain.** Design: a telemetry ingestion pipeline for millions of devices; a time-series store; a command/control plane with delivery guarantees; a fleet-monitoring dashboard. **You have lived every one of these** — the work is learning to present them in 45 minutes.
- [ ] **Week 8 — Design drills outside your domain.** URL shortener, rate limiter, notification service, distributed cache. Generic prompts still appear; don't be caught flat.

**Core concepts to be able to explain without notes:** CAP and its practical consequences, consistency models, partitioning/sharding, replication and leader election, idempotency, at-least-once vs exactly-once delivery, backpressure, circuit breakers, the outbox pattern, time-series vs relational storage trade-offs.

## Phase 3 — Weeks 9–12: The project (see below) + mock interviews

- [ ] **Weeks 9–11 — Build the project.** Scope discipline over completeness.
- [ ] **Week 12 — Mocks.** At least 3: one DSA, one system design, one behavioral. Use a peer or a paid service (interviewing.io, Pramp). **Recording yourself and rewatching is unpleasant and unusually effective.**
- [ ] Write STAR stories into `interview-prep/story-bank.md` — you already have excellent raw material (bootloader audit, Keycloak stalemate, Connector-3 overnight re-plan, 4 AM demo fix, HackRF improvisation).

---

## The project: an IoT device-fleet telemetry and control plane

**Recommendation, and the reasoning matters more than the idea.** This single project serves six goals at once:

| Goal | How it serves it |
|---|---|
| **Tesla interview prep** | It *is* the Tesla job's problem — "monitoring, aggregation and control of millions of IoT devices" |
| **Closes the Scala/Akka gap** | Built on Akka Streams / Reactive Streams, with running code rather than a claim |
| **Fills the portfolio gap** | `config/profile.yml` has no portfolio URL — this is currently a flagged weakness on every application |
| **System design material** | Gives you *measured numbers* to cite instead of hypotheticals |
| **EB-1A raw material** | A genuinely adopted open-source tool supports the "original contribution" criterion |
| **Product seed** | Ground-segment/IoT fleet tooling has a real buyer market (the 40–60 satcom employers) |

### Scope — deliberately narrow

**Build:**
1. **Device simulator** — N simulated devices (start 1K, scale to 100K+) publishing telemetry over MQTT or HTTP
2. **Ingestion pipeline** — Akka Streams with **explicit backpressure handling**
3. **Time-series storage** — InfluxDB or TimescaleDB (the Tesla JD names InfluxDB) plus PostgreSQL for device metadata
4. **Control plane** — dispatch commands *to* devices with **at-least-once delivery** and idempotency
5. **Deployment** — Kubernetes + Helm (leverages your existing strength; costs you almost no learning time)

**Do NOT build:** a pretty UI, authentication, multi-tenancy, or a mobile app. They consume weeks and demonstrate nothing this project is for.

### The part that actually matters: measure it

**Benchmark and write up the results.** This is what converts a side project into interview currency:

- Throughput ceiling — messages/sec before degradation
- Latency percentiles — p50/p95/p99 under sustained load
- **Behaviour under backpressure** — what happens when storage is slower than ingest?
- **Failure modes** — kill the DB mid-stream; kill a pod; partition the network. What breaks, and how does it recover?

A README that says *"at 50K devices at 1 Hz, ingest sustains X msg/s at p99 Y ms; when the write path is throttled, Akka Streams backpressure propagates to the source in Z ms and no messages are lost"* is worth more in a system design interview than any number of LeetCode problems.

### Honest caveats

- **Timebox it to 3 weeks.** Projects like this expand indefinitely. A finished narrow version beats an abandoned ambitious one.
- **Scala is a real learning curve.** If it's consuming the DSA time, build the pipeline in **Go** (which you know) and write only the *stream-processing layer* in Scala/Akka. Partial Scala exposure honestly described beats no project.
- **Don't claim production scale you haven't reached.** "Simulated fleet of 100K devices on a local cluster" is credible and defensible; "handles millions of devices" is not, and will be probed.

---

## Progress log

Update this yourself between sessions; I'll read it when you share progress and adjust the plan.

| Week | Dates | DSA (problems / patterns) | System design | Project | Notes / blockers |
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
