# eBL Frontend Documentation

This folder contains comprehensive engineering documentation for the eBL frontend codebase, organized for architecture understanding, feature ownership, API/contract traceability, and operations readiness.

## Scope
- Includes repository code and configuration except environment files (`.env*`).
- Includes implementation, test, route, and endpoint traceability references.

## Structure
- `architecture/` - dependency model, runtime flows, and sequence diagrams.
- `features/` - per-feature docs with invariants, edge cases, failure modes, and traceability links.
- `guides/` - development workflow, testing strategy, and onboarding/runbook procedures.
- `reference/` - inventories for files, symbols, endpoints, module behavior, and change-log templates.

## Recommended Reading Order
1. [docs/architecture/overview.md](docs/architecture/overview.md)
2. [docs/architecture/runtime-and-data-flow.md](docs/architecture/runtime-and-data-flow.md)
3. [docs/guides/development-workflow.md](docs/guides/development-workflow.md)
4. [docs/guides/testing-strategy.md](docs/guides/testing-strategy.md)
5. [docs/guides/onboarding-and-runbook.md](docs/guides/onboarding-and-runbook.md)
6. [docs/features/README.md](docs/features/README.md)
7. [docs/reference/code-index.md](docs/reference/code-index.md)
8. [docs/reference/module-behavior-catalog.md](docs/reference/module-behavior-catalog.md)
9. [docs/reference/symbol-catalog.md](docs/reference/symbol-catalog.md)
10. [docs/reference/api-endpoints.md](docs/reference/api-endpoints.md)

## Traceability Artifacts
- Full repository inventory: [docs/reference/code-index.md](docs/reference/code-index.md)
- Per-module behavior map: [docs/reference/module-behavior-catalog.md](docs/reference/module-behavior-catalog.md)
- Exported function/class/interface index: [docs/reference/symbol-catalog.md](docs/reference/symbol-catalog.md)
- Endpoint catalog and examples: [docs/reference/api-endpoints.md](docs/reference/api-endpoints.md), [docs/reference/api-schema-examples.md](docs/reference/api-schema-examples.md)
- Feature file maps: [docs/reference/file-maps](docs/reference/file-maps)
