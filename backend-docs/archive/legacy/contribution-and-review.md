# Developer Guide: Contribution and Review

Last updated: May 2026

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

- Update `backend-docs/standards/api-endpoint-catalog.md`.
- Update relevant domain guide in `backend-docs/guides/`.

1. Scope/auth changes

- Update `backend-docs/standards/authorization-matrix.md`.
- Update `backend-docs/security/security-model.md`.

1. Error handling changes

- Update `backend-docs/standards/error-status-matrix.md`.

1. Architecture/process changes

- Update [Architecture Overview](architecture.md) and relevant domain guides.

## Review Checklist

- Correctness of domain behavior.
- Regression risk in query/update paths.
- Scope enforcement and access control correctness.
- Schema contract compatibility.
- Test coverage for changed behavior.
- Documentation updates included.
