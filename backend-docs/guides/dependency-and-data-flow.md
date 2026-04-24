# Dependency and Data Flow

This guide explains how data moves through the backend and where dependencies are introduced.

## Composition Root

`ebl/app.py` is the composition root.

Flow:
1. Environment variables are read.
2. Infrastructure clients/repositories are created.
3. `Context` is instantiated with concrete implementations.
4. Falcon app is built with auth and cache middleware.
5. Domain route registration functions attach resources.

## Request Lifecycle

1. Request enters Falcon route.
2. Auth middleware resolves user identity and scopes.
3. Resource handler validates payload/query parameters.
4. Handler calls application service.
5. Service orchestrates repository operations.
6. Result is serialized to response schema/DTO.
7. Error middleware maps raised exceptions to API responses.

## Write Path Considerations

On write operations, the architecture usually includes:
- authorization scope checks
- schema validation and normalization
- changelog entry creation/update
- cache invalidation for stale read keys
- repository updates and persistence

## Read Path Considerations

Read endpoints may combine:
- direct repository fetch
- aggregation pipelines for query/filter cases
- post-fetch enrichment (for example dictionary/bibliography/media related data)
- cache lookup/store for frequently requested payloads

## Domain Interaction Patterns

- Corpus and Fragmentarium both depend on transliteration/query primitives and bibliography support.
- Fragmentarium additionally composes dictionary/media/annotations components for rich responses.
- Reference services (bibliography, AfO register, dossiers) provide lookup dimensions used by other domains.

## Data Stores and External Systems

- MongoDB for domain persistence.
- GridFS buckets for file/media storage.
- Auth0 verification for token-based auth.
- Sentry integration for error reporting.
- EBL AI service integration for annotation-related workflows.

## Testing Flow

The test suite under `ebl/tests/` mirrors domain structure and validates:
- schema contracts
- service behavior
- repository queries/index behavior
- route behavior and authorization constraints

Use `backend-docs/testing/test-suite.md` for test strategy and execution guidance.
