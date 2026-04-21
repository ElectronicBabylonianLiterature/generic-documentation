# Dependency Patterns

## Canonical Direction
UI -> Application -> Infrastructure -> Transport -> Backend

## Pattern Rules
- UI components should not call transport directly.
- Domain models should encapsulate value semantics and validation.
- Repositories own endpoint shape handling and DTO translation.
- Shared concerns are centralized in common/http/auth rather than duplicated.

## Service/Repository Pattern Sources
- [src/fragmentarium/application](src/fragmentarium/application)
- [src/fragmentarium/infrastructure](src/fragmentarium/infrastructure)
- [src/corpus/application](src/corpus/application)
- [src/dictionary/infrastructure](src/dictionary/infrastructure)

## Invariants
- Endpoint invocation path lives in repository or service boundary, not in visual component tree.
- New feature additions should preserve folder-layer separation.
- Tests should mirror architectural seams (domain tests, repository tests, UI tests).

## Dependency Risk Hotspots
- Shared model drift between transliteration/corpus/fragmentarium.
- Auth/session assumptions in protected operations.
- Router path changes that break deep links.

## Verification References
- Module-level role map: [docs/reference/module-behavior-catalog.md](docs/reference/module-behavior-catalog.md)
- Feature maps: [docs/reference/file-maps](docs/reference/file-maps)
