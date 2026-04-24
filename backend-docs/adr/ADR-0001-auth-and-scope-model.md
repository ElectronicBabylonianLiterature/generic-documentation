# ADR-0001: Authentication and Scope-Based Authorization Model

- Status: Accepted
- Date: 2026-04-02

## Context

The API serves mixed public and privileged workflows with domain-specific write permissions and fine-grained read constraints for fragment and folio content.

## Decision

Use Auth0 JWT authentication with:
- RS256 token verification.
- Scope extraction from both `scope` and `permissions` claims.
- Resource-level authorization via Falcon `before` hooks.
- Dynamic guards for fragment/folio read access.

## Consequences

Positive:
- Flexible compatibility with different token claim conventions.
- Fine-grained access control for sensitive content groups.

Trade-offs:
- Authorization reasoning is distributed across resource classes and guard helpers.
- Route-level policy visibility requires maintained standards matrices.

## Implementation References

- `ebl/users/infrastructure/auth0.py`
- `ebl/users/web/require_scope.py`
- `backend-docs/standards/authorization-matrix.md`
