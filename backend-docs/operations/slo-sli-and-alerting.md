# SLO, SLI, and Alerting Baseline

This document defines an initial reliability baseline for the API and can be refined with production telemetry over time.

## Service Level Indicators (SLIs)

1. Availability SLI
- Definition: successful request ratio for public API endpoints.
- Formula: successful requests / total requests.

2. Latency SLI
- Definition: p95 request latency for read endpoints and write endpoints.
- Formula: p95 duration by endpoint family.

3. Error SLI
- Definition: server-side error ratio.
- Formula: 5xx responses / total requests.

## Service Level Objectives (SLOs)

1. Monthly availability
- Target: >= 99.9% successful request ratio.

2. Read latency
- Target: p95 < 500ms for core read endpoints (`/fragments`, `/texts`, `/words`, `/signs`).

3. Write latency
- Target: p95 < 1200ms for guarded write paths.

4. Error budget
- Target: 5xx ratio < 0.1% monthly.

## Alert Thresholds

1. Availability alerts
- Critical: < 99.5% over rolling 15 minutes.
- Warning: < 99.8% over rolling 30 minutes.

2. Latency alerts
- Critical: p95 > 1000ms on read endpoints for 15 minutes.
- Warning: p95 > 700ms on read endpoints for 30 minutes.

3. Error alerts
- Critical: 5xx ratio > 1% for 10 minutes.
- Warning: 5xx ratio > 0.5% for 20 minutes.

## Ownership and Review Cadence

- Service owner reviews SLOs monthly.
- Update thresholds after major architecture or index/query changes.
- Link post-incident findings back to this baseline.

## Related Docs

- backend-docs/runbooks/incident-response.md
- backend-docs/operations/deployment.md
- backend-docs/standards/error-status-matrix.md
