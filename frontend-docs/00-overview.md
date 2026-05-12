# Overview

Created: 2026-05-06

## Purpose

Entry point for the eBL frontend documentation set. Describes what the
application is, what it talks to, and how to navigate the rest of the
docs.

## What This Is

`ebl-frontend` is the single-page application for eBL scholarly
workflows: fragment research, corpus navigation, lexical lookup, sign
analysis, bibliography management, and the editorial tooling around
them. The repository is at
[ElectronicBabylonianLiterature/ebl-frontend](https://github.com/ElectronicBabylonianLiterature/ebl-frontend).
It is a Create React App project (TypeScript ≈ 99%) built and customized
through CRACO and consumes the
[ebl-api](https://github.com/ElectronicBabylonianLiterature/ebl-api/)
backend over HTTP.

## Stack

| Concern | Tooling |
|---|---|
| Language | TypeScript (CRA + CRACO via `craco.config.js`) |
| Package manager / runtime | Yarn, Node 20 (`.nvmrc`) |
| UI | React with `react-router` v5 (history v4 patched, see [Build & Operations](./04-build-and-operations.md)) |
| Auth | [Auth0](https://auth0.com/) via `@auth0/auth0-spa-js`; gating done through `SessionContext` |
| Async data | [Bluebird](http://bluebirdjs.com/) cancellable promises for component data loading |
| State updates | [Immer](https://immerjs.github.io/immer/) for immutable updates |
| Annotation tool | `react-image-annotation` (patched in `patches/`) |
| Error reporting | Sentry |
| Lint / format | Prettier, ESLint (`eslint.config.js`), Stylelint (`.stylelintrc.json`) |
| Tests | Jest + React Testing Library; fixtures and fakes under `src/test-support` |
| Performance | Lighthouse (`yarn lighthouse <url>`), Chrome required |
| Secret scanning | Husky + GitGuardian `ggshield` (pre-commit + CI) |
| Container | `Dockerfile` (used by Swarmpit deployment) |

## Domain Map

Every domain lives under `src/<domain>/` and follows a layered structure
(`ui`, `application`, `domain`, `infrastructure`). The cross-cutting
modules (`auth`, `http`, `router`, `common`, `query`, `test-support`)
provide platform primitives.

| Domain area | Source root | Backend counterpart |
|---|---|---|
| Fragmentarium | `src/fragmentarium` | `ebl/fragmentarium/` |
| Corpus | `src/corpus` | `ebl/corpus/` |
| Dictionary | `src/dictionary` | `ebl/dictionary/` |
| Signs | `src/signs` | `ebl/signs/` |
| Bibliography | `src/bibliography` | `ebl/bibliography/` |
| AfO Register | `src/afo-register` | `ebl/afo_register/` |
| Dossiers | `src/dossiers` | `ebl/dossiers/` |
| Research Projects | `src/research-projects` | (frontend-only) |
| Transliteration | `src/transliteration` | `ebl/transliteration/` |
| Markup | `src/markup` | `ebl/transliteration/` (markup parsing) |
| Akkadian / Chronology / Editor | `src/akkadian`, `src/chronology`, `src/editor` | (frontend-only utilities) |
| About / Footer | `src/about`, `src/footer` | (static) |

Cross-cutting / platform modules: `src/auth`, `src/http`, `src/router`,
`src/common`, `src/query`, `src/test-support`.

## How to Use This Doc Set

1. [Architecture](./01-architecture.md) — entry points, layered model,
   cross-cutting modules, and request lifecycle.
2. [Data and API](./02-data-and-api.md) — how the SPA talks to
   `ebl-api`: `ApiClient`, repository pattern, scope-gated UI, error
   model, endpoint catalog by domain.
3. [Routes and Features](./03-routes-and-features.md) — the route graph,
   the per-domain router modules, deep-link risk classes.
4. [Build and Operations](./04-build-and-operations.md) — Yarn/Node 20,
   CRACO/Webpack customizations, Docker image, `.env.local` model, CI
   workflows, Husky + GitGuardian, Lighthouse, sitemap automation, CSP,
   Swarmpit deploy.
5. [Contributing](./05-contributing.md) — local setup (Codespaces
   dev container or local), scripts, lint/format/type rules, tests,
   PR/release expectations, doc-update obligations.

## Cross-Repository Discipline

- Backend contract facts (route prefixes, scopes, error envelope,
  pagination) live in
  [backend-docs/03-api-contract.md](../backend-docs/03-api-contract.md).
  The frontend's [Data and API](./02-data-and-api.md) doc points there
  rather than duplicating.
- Persistence facts (collections, GridFS, indexes, `changelog`) live in
  [backend-docs/02-data-model.md](../backend-docs/02-data-model.md).
- When the API surface changes, update the corresponding frontend
  repository module (`src/<domain>/infrastructure/`) and the relevant
  pages of this doc set in the same change.

## Last Reviewed

2026-05-06
