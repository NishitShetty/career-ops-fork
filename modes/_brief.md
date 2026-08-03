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
Ottawa, ON (ET). Canadian citizen: **no constraint for Canadian roles**. US roles need a
work-authorization route — see Hard DQ below.

## Target Archetypes

| # | Archetype | What they buy (proof) |
|---|-----------|----------------------------|
| 1 | **Product Delivery Lead / Single-Threaded Owner** | Owned NMS Map Visualization end-to-end across 6 Epics, aligning PM/architects/UX |
| 2 | **Senior Systems / Solutions Architect** | Vector Tiles vs GeoJSON POC; broke a month-long Keycloak stalemate; ERD/Maestro standard adopted org-wide |
| 3 | **Engineering Manager (technical, hands-on)** | Matrix leadership across Belgium/USA/Canada; Scrum Master; PI planning |
| 4 | **Technical Program Manager** | Overnight "Connector-3" re-plan with successful stakeholder readout |
| 5 | **Principal / Staff Engineer** | U-Boot bootloader memory audit; HackRF spectrum-analyzer workaround |

Analog titles that count as hits: Delivery Manager, Technical Product Manager (infra),
Ground Segment Lead, Platform Architect, Geospatial Engineering Lead.

## Proof Points (use exact metrics in matching)
- NMS Map Visualization capability — single-threaded owner across **6 Epics**
- Helm-based deployment standardization — container build/deploy **1 hr → 5 min (92%)**
- U-Boot bootloader memory audit — prevented a redundant **3-month** kernel migration
- Inmarsat field deployments (Michigan, Perth); resolved an aviation traffic-drop issue in flight

## Comp Strategy
| Target | Requirement |
|--------|-------------|
| — | **Not yet set.** `config/profile.yml → compensation.target_range` is `TBD`. |

**No hard comp floor is defined. Do not FAIL a role on comp, and do not invent a
number — flag comp as unscored and ask the user.** Current comp is CAD 175,000.

## Location Scoring
- Fully remote / async-first → **5.0**
- Canada — remote, hybrid, or on-site (incl. relocation within Canada) → **5.0**, no penalty
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
- Pure people-management with no technical depth (loses the cross-cutting advantage)
- Domain with no SatCom/geospatial/infra adjacency — needs a full framing rewrite
- US role with no identifiable Canadian entity (no intracompany-transfer signal)
- Requires a portfolio/public GitHub (none currently exists — do not fabricate one)

## Priority Override List — always return PASS regardless of score
- **Amazon** — Canadian + US entity, runs intracompany transfers at scale, owns Leo/Kuiper
- **MDA Space** — Canadian, US operations, exact domain match
- **ST Engineering iDirect** — current employer; internal moves are the cheapest path
- **Telesat** — Ottawa, exact domain match
- **Kepler Communications** — Toronto HQ with a US entity
