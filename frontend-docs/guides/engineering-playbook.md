# Engineering Playbook

## Purpose
Standard workflow for local development, delivery readiness, and production-support actions.

## Prerequisites
- Node.js 20+
- Yarn
- Backend and Auth0 configuration for full integration validation

## Local Development Workflow
1. Install dependencies: `yarn install`
2. Start app: `yarn start`
3. Optional fast mode: `yarn start:fast`
4. Run tests while iterating: `yarn test`

## Branch and Change Workflow
1. Define target domain and expected contract/route impact.
2. Implement changes in small commits with clear scope.
3. Keep migration-sensitive changes isolated from broad refactors.
4. Update docs in the same change when behavior/contract/route expectations change.

## Required Quality Gates
Run these before finalizing any change:
- `yarn lint`
- `yarn tsc`
- `yarn test`
- `yarn build`

## Pull Request Standards
- Include concise summary, risk level, and validation notes.
- Call out route and endpoint changes explicitly.
- Document rollback expectations for non-trivial behavior changes.
- Resolve all review findings before requesting final approval.

## Architectural Guardrails During Development
- Keep behavior changes scoped to the owning domain under `src/<feature>` where possible.
- Preserve layer boundaries (UI, application, domain, infrastructure, transport).
- Align frontend request/response fields to backend schema.
- Avoid introducing untyped boundaries.

## Operations and Delivery

### Build and Packaging
- Production bundle: `yarn build`
- Build tooling: CRA + CRACO overrides (`craco.config.js`)
- Containerization: `Dockerfile` with runtime dependencies for image/canvas workflows

### CI/CD
- GitHub workflows cover linting, testing, build, CodeQL, and sitemap automation.
- Treat CI signal as release gate; no known failing checks should ship.

### Environment and Runtime Compatibility
- Keep dependency and runtime assumptions aligned with container and CI environments.
- Validate that local development mode and production build mode do not diverge in behavior-critical paths.

### Monitoring and Observability
- Error reporting through Sentry.
- Frontend analytics instrumentation for usage-level visibility.

### Sitemap and Static Assets
- Sitemap artifacts under `public/sitemap`
- Generation and update scripts under `scripts/updateSitemaps.js`

## Incident Response Runbook
1. Identify impacted route/domain and reproduction steps.
2. Classify failure layer: UI, application, repository, transport/auth, or route wiring.
3. Check contracts and routes docs for drift from implementation.
4. Mitigate with the smallest safe fix and regression coverage.
5. Validate by reproducing original failure and running quality gates.

## Incident Severity Model
- Severity 1: User-facing outage, major navigation or core feature blocked.
- Severity 2: Major workflow degradation with workaround.
- Severity 3: Non-critical defect or localized behavior issue.

Escalation should scale with severity, and release windows should be adjusted accordingly.

## Release Readiness Checklist
- Routes and deep links validated for changed domains.
- Endpoint contracts reviewed against backend schema.
- Lint, type check, tests, and build all passing.
- Documentation updated where behavior/contracts/routes changed.
- Release notes prepared with [../reference/change-log-template.md](../reference/change-log-template.md).

## Release Phases
1. Pre-release: finish validation, docs, and release note preparation.
2. Release: deploy with explicit monitoring window.
3. Post-release: confirm smoke checks and monitor error metrics.
4. Stabilization: triage regressions and prepare follow-up patches if required.