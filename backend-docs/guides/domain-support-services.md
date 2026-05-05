# Domain Guide: Support Services

This guide covers utility and infrastructural services that are cross-cutting for all API domains.

## Files and Media

Route registration: `ebl/files/web/bootstrap.py`

Endpoint:

- `/images/{file_name}`

Storage implementation relies on GridFS repositories configured in app context.

## Markup

Route registration: `ebl/markup/web/bootstrap.py`

Endpoints:

- `/markup`
- `/cached-markup`

Behavior:

- Converts markup text to JSON shape.
- Optional cache-backed response path for repeated payloads.

## Cache Layer

Key modules:

- `ebl/cache/application/cache.py`
- `ebl/cache/application/custom_cache.py`
- `ebl/cache/infrastructure/mongo_cache_repository.py`

Responsibilities:

- shared HTTP cache middleware support
- domain-targeted cache helpers (for example chapter-level cache keys)

## Authentication and Users

Key modules:

- `ebl/users/infrastructure/auth0.py`
- `ebl/users/domain/user.py`
- `ebl/users/web/require_scope.py`

Behavior:

- request authentication through Falcon auth middleware
- user scope checks in resource handlers for write/restricted operations

## Error and Change Tracking

Key modules:

- `ebl/error_handler.py`
- `ebl/errors.py`
- `ebl/changelog.py`

Behavior:

- normalize internal exceptions to API responses
- persist change metadata for mutating operations

## Other Supporting Domains

- `ebl/common`: shared schemas/enums/query helpers.
- `ebl/alignment`: sequence/alignment logic and related update flows.
- `ebl/chronology`: chronology data and logic.
- `ebl/io`: import and integration helpers.

## Suggested Deep Links

- `backend-docs/guides/backend-service-map.md`
- `backend-docs/guides/request-response-contracts.md`
- `backend-docs/standards/api-endpoint-catalog.md`
- `backend-docs/standards/error-status-matrix.md`
