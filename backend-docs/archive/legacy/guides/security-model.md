# Security Model

Last updated: May 2026

This document describes the backend security posture based on implemented authentication, authorization, and error-handling behavior.

## Authentication

Auth middleware is attached during app initialization in `ebl/app.py`.

Token verification:

- JWTs are verified using RS256 (`Auth0Backend` in `ebl/users/infrastructure/auth0.py`).
- Claims checked include signature, expiration, issued-at; required claims include `openid`.
- User profile enrichment is fetched from Auth0 `userinfo` endpoint.

Guest behavior:

- Guest access is supported through `NoneAuthBackend(Guest)` and merged with Auth0 backend.

## Authorization

Authorization guards are implemented via Falcon `before` hooks in resource handlers.

Guard types:

1. Fixed scope guard:

- `require_scope(..., "<scope>")`
- Example scopes: `write:texts`, `transliterate:fragments`, `write:bibliography`, `create:proper_nouns`.

1. Dynamic fragment read guard:

- `require_fragment_read_scope`
- Evaluates fragment-level scopes from repository/finder metadata.

1. Dynamic folio read guard:

- `require_folio_scope`
- Evaluates `read:<folio>-folios` style permissions.

Source of granted scopes:

- `scope` claim (space-delimited string)
- `permissions` claim (string array)

Both claim sources are merged in `Auth0User.get_scopes`.

## Error and Information Disclosure

Global error mapping is configured in `ebl/error_handler.py`.

Behavior summary:

- Unexpected exceptions map to 500 and are logged server-side.
- Validation and domain workflow exceptions map to 422.
- Not-found and duplicate conflicts map to 404 and 409.

Guidance:

- Avoid exposing sensitive internals in exception messages.
- Prefer stable, user-oriented error text in domain errors.

## Threat Model Baseline

Primary threat categories and current mitigations:

1. Token forgery or misuse

- Mitigation: JWT signature and claim validation.

1. Privilege escalation via missing scope checks

- Mitigation: resource-level guard decorators and route-level auth matrix.

1. Unauthorized fragment/folio access

- Mitigation: dynamic access checks tied to object-level scopes.

1. Injection into persistence queries

- Mitigation: schema validation and controlled query builders.

1. Sensitive data leakage in errors/logging

- Mitigation: centralized error handling and constrained response mapping.

## Security Gaps to Address

- Explicit rate-limiting and abuse controls are not documented in current backend docs.
- Formal secret rotation cadence is not documented in repository docs.
- Structured security review checklist per release is not yet codified.

## Related References

- `backend-docs/standards/authorization-matrix.md`
- `backend-docs/standards/error-status-matrix.md`
- `backend-docs/policies/api-versioning-and-deprecation.md`
- `README.md` Auth0 section
