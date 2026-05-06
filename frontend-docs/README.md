# Frontend Documentation

This directory is the entire frontend documentation set for
`ebl-frontend`. It is structured as one entry point plus six numbered
core docs, mirroring the backend doc set under
[../backend-docs/](../backend-docs/README.md).

## Reading Order

1. [Overview](./00-overview.md) — what the SPA is, stack, domain map.
2. [Architecture](./01-architecture.md) — entry points, layered model,
   cross-cutting modules, request lifecycle.
3. [Data and API](./02-data-and-api.md) — `ApiClient`, repositories,
   scope-gated UI, error model, endpoint catalog.
4. [Routes and Features](./03-routes-and-features.md) — route graph,
   per-domain router modules, deep-link risk classes, annotation tool,
   sitemap.
5. [Build and Operations](./04-build-and-operations.md) — build
   artifacts, env, CI workflows, secret scanning, Lighthouse, CSP,
   sitemap automation, Swarmpit deploy.
6. [Contributing](./05-contributing.md) — local setup, scripts, code
   style, tests, PR/doc-update obligations.

These six documents are the entire frontend documentation set. When the
docs and the code disagree, the code wins and the docs are updated.

## Source of Truth

- Frontend implementation:
  [ebl-frontend](https://github.com/ElectronicBabylonianLiterature/ebl-frontend).
- Backend implementation and API contract:
  [ebl-api](https://github.com/ElectronicBabylonianLiterature/ebl-api/)
  and the [backend doc set](../backend-docs/README.md).

## Last Reviewed

2026-05-06
