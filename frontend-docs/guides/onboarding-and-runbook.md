# Onboarding and Runbook

## New Engineer Onboarding
1. Read [docs/architecture/overview.md](docs/architecture/overview.md).
2. Read [docs/features/README.md](docs/features/README.md) and the feature you will modify.
3. Review module and symbol indexes:
  - [docs/reference/module-behavior-catalog.md](docs/reference/module-behavior-catalog.md)
  - [docs/reference/symbol-catalog.md](docs/reference/symbol-catalog.md)
4. Install dependencies and run local checks.

## First-Day Verification Checklist
- Start app and verify landing page, route navigation, and one feature page.
- Run tests relevant to your target feature.
- Validate auth-dependent behavior if touching protected actions.

## Incident Response Runbook
1. Confirm scope: identify impacted route/feature and reproducibility.
2. Triage layer: UI rendering, service/repository mapping, transport/auth, or route-level regression.
3. Inspect corresponding docs and traces:
  - Feature doc under docs/features
  - File map under docs/reference/file-maps
  - Endpoint/source callsites in [docs/reference/api-endpoints.md](docs/reference/api-endpoints.md)
4. Mitigate:
  - Roll back risky UI branch behavior.
  - Add guard for undefined/null payload fields.
  - Add error boundary-safe fallback state.
5. Validate:
  - Add or update regression tests.
  - Confirm failure no longer reproduces.

## Release Checklist
- Verify routes and deep links for changed areas.
- Confirm endpoint shape and auth behavior against backend schema.
- Run lint/test/build.
- Review feature docs and contract docs updated for changed behavior.
- Verify sitemap/static outputs where route/content changes apply.

## Change Log Practice
- For each release, add:
  - impacted features
  - endpoints/contracts changed
  - migration notes
  - rollback notes
