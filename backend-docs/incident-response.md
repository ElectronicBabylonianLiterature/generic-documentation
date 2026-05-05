# Runbook: Incident Response

Last updated: May 2026

This runbook defines a practical incident workflow for backend API outages, degradation, or data integrity concerns.

## Severity Levels

- SEV-1: Full outage, auth failure for all users, major data corruption risk.
- SEV-2: Critical feature unavailable or severe latency/error spikes.
- SEV-3: Partial degradation with workaround available.

## Detection Signals

- Elevated 5xx rate.
- Elevated 422/409 spikes indicating client-impacting workflow regressions.
- Auth failures (403/401 spikes).
- Database connectivity or timeout errors.

## Immediate Response Steps

1. Confirm incident scope

- Reproduce via a known endpoint (for example `/statistics`, `/fragments`, `/texts`).
- Check deploy history and config changes.

1. Stabilize service

- Roll back latest deployment if regression is confirmed.
- Disable only non-critical write paths if necessary while preserving read access.

1. Mitigate user impact

- Communicate impact and temporary mitigations.
- Prioritize auth and read path restoration.

## Technical Triage Checklist

- Verify environment variables for Auth0, MongoDB, Sentry, and EBL AI integration.
- Check MongoDB availability and authentication.
- Validate token verification path and Auth0 issuer/audience settings.
- Inspect recent changes in route bootstrap and schema validation for affected endpoints.
- Inspect error logs and Sentry events for correlated stack traces.

## Recovery Validation

- Execute targeted health checks on high-traffic endpoints.
- Run relevant test subset and smoke checks.
- Confirm 5xx rate has returned to baseline.

## Post-Incident Actions

- Publish incident report with timeline, root cause, and preventive actions.
- Add/update regression tests for the failed path.
- Update runbooks and policy docs if architecture/process changes were required.
