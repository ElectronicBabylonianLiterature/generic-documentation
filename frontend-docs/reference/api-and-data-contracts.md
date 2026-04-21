# Reference: API and Data Contracts

## Purpose
This document captures the frontend contract perspective: how repositories/services shape requests and responses into domain models.

## Contract Layers
- Transport: `src/http/*`
- Repositories: `src/*/infrastructure/*Repository*.ts`
- Domain DTO mapping: `src/*/domain/*Dto*.ts`, mapper/helper files

## Common Patterns
- Repositories call `ApiClient` methods (`get`, `post`, etc.) with typed paths.
- DTO parsing is explicit and domain-centric.
- Application services aggregate multiple repository calls where required.

## Auth Requirements
- Auth-sensitive requests depend on session token flow from `src/auth/*`.
- Scope metadata is declared in `src/auth/applicationScopes.json` and consumed in guarded workflows.

## Error Contract
- HTTP failures become typed API errors.
- UI components map errors to alerts/error boundary handling.

## Notes
- Backend schema remains source of truth.
- Frontend naming and shape should align with backend payload contracts.

## Contract Sources
- Curated contracts: [docs/reference/api-contracts-curated.md](docs/reference/api-contracts-curated.md)
- Endpoint callsite catalog: [docs/reference/api-endpoints.md](docs/reference/api-endpoints.md)
- Request/response examples: [docs/reference/api-schema-examples.md](docs/reference/api-schema-examples.md)
- Route inventory: [docs/reference/route-catalog.md](docs/reference/route-catalog.md)

## Validation Guidance
- Validate every frontend contract change against backend schema before release.
- Update both curated and generated contract docs when adding/modifying endpoints.
- Add or update tests covering contract transformation and error semantics.
