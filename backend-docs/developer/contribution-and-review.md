# Developer Guide: Contribution and Review

This guide describes a high-confidence workflow for making backend changes while preserving API and data integrity.

## Local Workflow

1. Sync branch and install dependencies.
2. Implement changes in domain/application/web/infrastructure layers as needed.
3. Add/update tests for modified behavior.
4. Run verification tasks.

## Verification Commands

Use repository task commands:
- `task format`
- `task lint`
- `task type`
- `task test`
- `task test-all`

## Change Types and Required Docs Updates

1. Route/resource changes
- Update `docs/standards/api-endpoint-catalog.md`.
- Update relevant domain guide in `docs/guides/`.

2. Scope/auth changes
- Update `docs/standards/authorization-matrix.md`.
- Update `docs/security/security-model.md`.

3. Error handling changes
- Update `docs/standards/error-status-matrix.md`.

4. Architecture/process changes
- Add or update ADR in `docs/adr/`.

## Review Checklist

- Correctness of domain behavior.
- Regression risk in query/update paths.
- Scope enforcement and access control correctness.
- Schema contract compatibility.
- Test coverage for changed behavior.
- Documentation updates included.
