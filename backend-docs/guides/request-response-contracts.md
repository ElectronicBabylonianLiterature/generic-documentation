# Request and Response Contracts

This document describes where request validation and response serialization are defined, and how contracts propagate from endpoints to domain models.

## Contract Layers

1. Web resources (`ebl/*/web/*.py`)
- Parse route/query/body parameters.
- Trigger validation helpers.
- Call application services.

2. Schema classes (`ebl/*/application/*schema*.py`, selected `ebl/*/web/*schema*.py`)
- Validate incoming payloads.
- Deserialize into domain model objects.
- Serialize domain outputs for API responses.

3. Domain entities (`ebl/*/domain/*.py`)
- Enforce invariants and typed model shape.

4. Infrastructure repositories (`ebl/*/infrastructure/*.py`)
- Persist and query data with MongoDB-specific field mapping.

## Contract Hotspots by Domain

- Corpus:
  - `ebl/corpus/application/schemas.py`
  - `ebl/corpus/web/chapter_schemas.py`
  - `ebl/corpus/web/text_schema.py`
- Fragmentarium:
  - `ebl/fragmentarium/application/fragment_schema.py`
  - `ebl/fragmentarium/web/dtos.py`
  - feature-specific schema files under `ebl/fragmentarium/application/`
- Transliteration:
  - token/line/text schemas under `ebl/transliteration/application/`
- Common query layer:
  - `ebl/common/query/query_schemas.py`
  - `ebl/common/query/query_result.py`

## Cross-Cutting Contract Rules

- Resource methods validate input before service invocation.
- DTO/schema output shape is the public API contract.
- Internal persistence field names may differ from API field names where schema data-key mapping is used.
- Scope-based authorization is enforced before write operations in protected resources.

## Practical Navigation

To understand one endpoint contract end-to-end:
1. Start in bootstrap route registration for URI to resource mapping.
2. Open resource class and identify `on_get`/`on_post`/`on_put`/`on_delete` handlers.
3. Trace schema `load`/`dump` calls.
4. Follow service invocation.
5. Inspect repository call and underlying query/update behavior.

## Related References

- `backend-docs/standards/api-endpoint-catalog.md`
- `backend-docs/standards/endpoint-contract-register.md`
- `backend-docs/standards/authorization-matrix.md`
- `backend-docs/guides/backend-service-map.md`
