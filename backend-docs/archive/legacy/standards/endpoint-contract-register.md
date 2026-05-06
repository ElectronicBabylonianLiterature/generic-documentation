# Endpoint Contract Register

Last updated: May 2026

This register defines how contracts are documented and reviewed for every endpoint in the API.

## Scope Coverage

The authoritative list of endpoints is maintained in:

- [API Endpoint Catalog](api-endpoint-catalog.md)

Every endpoint in that catalog is required to satisfy the contract rules in this register.

## Contract Artifacts

| Artifact | Purpose | Source of Truth |
|---|---|---|
| Endpoint inventory | Route, method, guard mapping | `api-endpoint-catalog.md` |
| Auth requirements | Scope and dynamic guard coverage | `authorization-matrix.md` |
| Error behavior | Exception-to-status mapping | `error-status-matrix.md` |
| Request/response patterns | Contract layering and schema ownership | `../guides/request-response-contracts.md` |

## Endpoint Family Ownership

| Endpoint Family | Primary Contract Owner Modules |
|---|---|
| `/texts*`, `/textsearch`, `/corpus*`, `/lemmasearch` | `ebl/corpus/web`, `ebl/corpus/application` |
| `/fragments*`, `/folios*`, `/genres`, `/periods`, `/statistics`, `/findspots` | `ebl/fragmentarium/web`, `ebl/fragmentarium/application` |
| `/words*`, `/signs*`, `/lemmas` | `ebl/dictionary/web`, `ebl/signs/web`, `ebl/lemmatization/web` |
| `/bibliography*`, `/afo-register*`, `/dossiers*`, `/provenances*` | `ebl/bibliography/web`, `ebl/afo_register/web`, `ebl/dossiers/web`, `ebl/provenance/web` |
| `/images*`, `/markup*`, `/cached-markup` | `ebl/files/web`, `ebl/markup/web` |

## Minimum Contract Requirements Per Endpoint

1. Request contract

- Route params and query params are validated.
- Body payload schema is explicit for write operations.

1. Response contract

- Success response shape is defined by schema/DTO layer.
- Status codes are explicit for each operation.

1. Error contract

- Domain and validation errors map to documented statuses.
- Unauthorized and forbidden behavior is documented for protected routes.

1. Example coverage

- At least one representative successful request/response example for write and complex query endpoints.
- At least one representative failure example for validation-protected endpoints.

## Change Management Rules

When an endpoint is added, removed, or modified:

1. Update [API Endpoint Catalog](api-endpoint-catalog.md) in the same change.
2. Update auth/error matrices if scope or error behavior changes.
3. Update request/response guidance if schema behavior changes.
4. Add migration or compatibility note when contract-breaking changes are introduced.
