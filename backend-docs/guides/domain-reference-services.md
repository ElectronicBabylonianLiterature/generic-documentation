# Domain Guide: Bibliography, AfO Register, and Dossiers

These domains provide reference-oriented search surfaces and are frequently used as supporting dimensions for corpus/fragment workflows.

## Bibliography

Route registration: `ebl/bibliography/web/bootstrap.py`

Endpoints:
- `/bibliography`
- `/bibliography/all`
- `/bibliography/list`
- `/bibliography/{id_}`

Core service:
- `Bibliography` in `ebl/bibliography/application/bibliography.py`

Contracts:
- bibliography entry/reference schemas in bibliography application layer

## AfO Register

Route registration: `ebl/afo_register/web/bootstrap.py`

Endpoints:
- `/afo-register`
- `/afo-register/texts-numbers`
- `/afo-register/suggestions`

Additional fragment-centric integration endpoint:
- `/fragments/query-by-traditional-references` via fragmentarium bootstrap and resource.

## Dossiers

Route registration: `ebl/dossiers/web/bootstrap.py`

Endpoints:
- `/dossiers`
- `/dossiers/search`
- `/dossiers/filter`
- `/dossiers/suggestions`

## Data Access Patterns

All three domains follow repository-backed service/resource patterns:
1. Parse/filter inputs in resource layer.
2. Delegate query execution to domain-specific repository methods.
3. Serialize response through schema/DTO classes or query-result wrappers.

## Suggested Deep Links

- `docs/reference/packages/bibliography.md`
- `docs/reference/packages/afo_register.md`
- `docs/reference/packages/dossiers.md`
