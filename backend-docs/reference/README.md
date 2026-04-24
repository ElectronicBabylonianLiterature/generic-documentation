# Reference Policy

This folder intentionally avoids generated one-page-per-file documentation.

## Why

Per-file generated docs create high maintenance cost and fast drift with limited architectural value.

## What to use instead

- System context and boundaries: `backend-docs/architecture/overview.md`
- Domain capabilities and ownership: `backend-docs/guides/backend-service-map.md`
- Endpoint inventory and methods: `backend-docs/standards/api-endpoint-catalog.md`
- Contract governance: `backend-docs/standards/endpoint-contract-register.md`
- Security and auth behavior: `backend-docs/security/security-model.md` and `backend-docs/standards/authorization-matrix.md`

## Implementation-level details

For implementation specifics, navigate source code directly under `ebl/` and tests under `ebl/tests/`.
