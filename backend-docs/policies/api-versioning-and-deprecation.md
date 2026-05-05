# Policy: API Versioning and Deprecation

This policy defines how API changes should be introduced and communicated.

## Versioning Strategy

Current codebase behavior indicates a single active API surface without URI version prefixes.

Policy going forward:

1. Backward-compatible changes

- Additive fields and endpoints are allowed.
- Existing response fields must not change semantics without deprecation.

1. Breaking changes

- Require explicit deprecation notice in docs and release notes.
- Provide migration guidance and a sunset date.

1. Endpoint removals

- Must follow announce -> deprecate -> remove lifecycle.

## Deprecation Lifecycle

1. Announce

- Document affected endpoint/field and rationale.
- Provide replacement path.

1. Deprecate

- Mark in docs and changelog.
- Maintain compatibility window.

1. Remove

- Remove only after agreed sunset period and communication.

## Contract Governance

Before release with API contract changes:

- Update endpoint catalog if routes changed.
- Update auth matrix if scope guards changed.
- Update error/status matrix if exception mapping changed.
- Update narrative domain docs if behavior changed.

## References

- `backend-docs/standards/api-endpoint-catalog.md`
- `backend-docs/standards/authorization-matrix.md`
- `backend-docs/standards/error-status-matrix.md`
