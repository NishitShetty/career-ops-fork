# Nishit Shetty — Triage Brief

<!-- ============================================================
     THIS FILE IS YOURS. USER LAYER — never auto-updated.

     PURPOSE: Compact context for first-pass triage agents
     (`modes/triage.md`). Replaces reading the full evaluation stack
     with a single small read (~1.5-2K tokens).

     PRECEDENCE: if anything here disagrees with `modes/_profile.md`,
     **_profile.md wins.** This file is a compressed convenience copy
     for fast triage, never a second source of truth. Work-authorization
     rules originate in the DERIVED block of _profile.md.
     ============================================================ -->

## Identity
Product Delivery Lead / Senior Systems Architect — 11+ yrs SatCom (L1/L3, NMS, geospatial).
Ottawa, ON (ET), open to Toronto. Canadian citizen: **no constraint for Canadian roles**.
US roles need a work-authorization route — see Hard DQ below.

## Target Archetypes

**Widened 2026-08-03: open to SDE (IC), TPM, PM, and EM broadly — not just
architecture-track roles — provided comp clears the CAD 200K floor.** Archetype match
still affects the score (better match = easier framing = higher confidence), but a
strong-comp Ottawa/Toronto role should not be filtered solely for being IC or PM rather
than an architecture/delivery title.

| # | Archetype | What they buy (proof) |
|---|-----------|----------------------------|
| 1 | **Product Delivery Lead / Single-Threaded Owner** | Owned NMS Map Visualization end-to-end across 6 Epics, aligning PM/architects/UX |
| 2 | **Senior Systems / Solutions Architect** | Vector Tiles vs GeoJSON POC; broke a month-long Keycloak stalemate; ERD/Maestro standard adopted org-wide |
| 3 | **Senior/Staff Software Engineer (IC)** | 11+ yrs building/operating distributed systems for device fleets; U-Boot bootloader audit; memory/CPU leak profiling |
| 4 | **Engineering Manager (technical, hands-on)** | Matrix leadership across Belgium/USA/Canada; Scrum Master; PI planning — see prep note below |
| 5 | **Technical Program Manager** | Overnight "Connector-3" re-plan with successful stakeholder readout |
| 6 | **Product Manager (technical)** | STO stakeholder alignment (PM/architects/UX); customer-centric NMS roadmap input — see prep note below |

Analog titles that count as hits: Delivery Manager, Technical Product Manager (infra),
Ground Segment Lead, Platform Architect, Geospatial Engineering Lead, Software
Development Engineer, SDE II/III/Senior.

**Prep note for EM/PM archetypes:** candidate has no formal people-management title and
no formal product-ownership title. Real leadership/stakeholder evidence exists (STO,
Scrum Master, matrix PI planning) but external hire into first-time EM or PM is harder
than IC hire — see `career` repo `decisions.md` (2026-08-03 refinement: prefer landing
as IC/architect-track first, convert internally). Don't auto-fail EM/PM postings on this
basis, but flag the stretch in the report.

## Proof Points (use exact metrics in matching)
- NMS Map Visualization capability — single-threaded owner across **6 Epics**
- Helm-based deployment standardization — container build/deploy **1 hr → 5 min (92%)**
- U-Boot bootloader memory audit — prevented a redundant **3-month** kernel migration
- Inmarsat field deployments (Michigan, Perth); resolved an aviation traffic-drop issue in flight

## Comp Strategy
| Target | Requirement |
|--------|-------------|
| **CAD 200,000+** | **Hard floor, set 2026-08-03.** Applies across all archetypes (SDE/TPM/PM/EM). No ceiling target set — do not invent one for negotiation scripts. |

Current comp is CAD 175,000. A role stating comp clearly below CAD 200K should score
low on Comp (not an automatic Hard DQ — see below — but treat as a strong red flag);
a role with no stated comp is scored **Unstated/neutral**, not penalized.

## Location Scoring
- Fully remote / async-first → **5.0**
- **Ottawa or Toronto**, ON — remote, hybrid, or on-site → **5.0**, no penalty
- Other Canada — remote, hybrid, or on-site (incl. relocation) → **5.0**, no penalty
- Hybrid outside Canada → **3.0** (not 1.0)
- On-site outside Canada, 4-5 days/week with no exceptions → **1.0**
- High travel (>25%) → deduct 0.5-1.0

## Hard DQ Criteria — instant FAIL (< 3.0)
- **Requires US citizenship, permanent residency, security clearance, or "US person"
  status (ITAR/EAR).** Hard blocker today — no available status satisfies it.
  Disqualifies most US space/defense employers.
- US role **and** the title is not a TN-eligible category (Engineer / Computer Systems
  Analyst) **and** the JD states no sponsorship.
- Primary hands-on skill outside the discipline (mobile/iOS/Android, PHP, Ruby,
  Salesforce admin, SAP, mainframe/COBOL, blockchain/Web3).
- Junior / intern / entry-level seniority.

> "No sponsorship" alone is **not** a DQ if the title is TN-eligible — TN involves no
> employer petition. Note the distinction instead of auto-failing.

## Quick Scoring Guide

Bands are relative to `triage_threshold` (`config/profile.yml → pipeline.triage_threshold`,
default **3.5**), matching the verdict table in `modes/triage.md`.

| Score | Verdict | What it means |
|-------|---------|---------------|
| ≥ threshold (default 3.5) | **PASS** | Clears the bar — strong archetype + location, gaps bridgeable |
| 3.0 – (threshold − 0.1) | **MARGINAL** | Borderline — shown to user as one line |
| < 3.0 | **FAIL** | Does not clear the bar — filtered |

## Soft Red Flags (−0.5 each, additive)
- Stated comp below the CAD 200,000 floor (−1.0, not −0.5 — this one is load-bearing)
- Pure people-management with no technical depth (loses the cross-cutting advantage)
- Domain with no SatCom/geospatial/infra adjacency — needs a full framing rewrite
- US role with no identifiable Canadian entity (no intracompany-transfer signal)
- Requires a portfolio/public GitHub (none currently exists — do not fabricate one)

## Priority Override List — always return PASS regardless of score
Phase 1 strategy: **Ottawa- or Toronto-area roles (any of SDE/TPM/PM/EM) at big-tech-tier
employers that have both a Canadian office and a US entity, clearing CAD 200K+.**
Geospatial/mapping domain match is a bonus, not a requirement, for this override list.
- **Amazon** — CA+US entity, runs intracompany transfers at scale, Maps + Leo/Kuiper
- **Google** — Waterloo/Toronto/Montreal; Google Maps
- **Uber** / **Lyft** — Toronto engineering; mapping orgs; CA+US entity
- **Microsoft** — Toronto/Vancouver; Bing/Azure Maps
- **Apple** — Ottawa office; Apple Maps
- **MDA Space**, **Telesat**, **Kepler**, **ST Engineering iDirect** — satcom fallback tier
