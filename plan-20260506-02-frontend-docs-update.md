# Frontend Docs Restructure Plan and Todo

ID: 20260506-02

Date: 2026-05-06

Branch: feature/new-docs

Scope: frontend documentation consolidation, enrichment, and gap coverage

## Goal

Apply the same structure-then-substance workflow used for the backend docs
to the frontend docs. Reduce `frontend-docs/` to a small, numbered core set
with one entry point, replace generic prose with `ebl-frontend`-specific
facts, and remove any transitional archive at the end.

## Success Criteria

- `frontend-docs/` is centered around a small core set of numbered files.
- Navigation starts from a single entrypoint (`README.md`).
- Each core doc contains concrete, repo-specific content (real modules,
  routes, scripts, build/test commands, Auth0 wiring, dependency
  conventions) — not generic React/SPA prose.
- All frontend docs and tracking files pass markdownlint.
- Any temporary `frontend-docs/archive/` directory is fully removed at the
  end of the enrichment phase, with no remaining references from any
  tracked file.
- Plan and implementation log are updated as work progresses.

## Source of Truth

- Frontend repository:
  <https://github.com/ElectronicBabylonianLiterature/ebl-frontend>
- Stack (from the upstream README): TypeScript 98%+, React (Create React
  App + CRACO), Yarn, Node 20, Auth0 (`@auth0/auth0-spa-js`), Sentry,
  Bluebird (cancellable promises), Immer, Prettier, ESLint, Stylelint,
  Husky + GitGuardian (`ggshield`), Lighthouse, react-image-annotation.
- Build/runtime artifacts: `Dockerfile`, `craco.config.js`,
  `tsconfig.json`, `package.json`, `eslint.config.js`,
  `.stylelintrc.json`, `.devcontainer/`, `.husky/`, `.github/workflows/`,
  `scripts/`, `public/`.
- Required env: `REACT_APP_AUTH0_DOMAIN`, `REACT_APP_AUTH0_CLIENT_ID`,
  `REACT_APP_AUTH0_AUDIENCE`, `REACT_APP_DICTIONARY_API_URL`,
  `REACT_APP_SENTRY_DSN`, `REACT_APP_CORRECTIONS_EMAIL`,
  `REACT_APP_INFO_EMAIL`, `REACT_APP_GA_TRACKING_ID`.
- Backend counterpart: `ebl-api`
  (<https://github.com/ElectronicBabylonianLiterature/ebl-api/>) — every
  data contract is owned by the API; see `backend-docs/03-api-contract.md`.

## Target Structure

- `frontend-docs/README.md`
- `frontend-docs/00-overview.md` — what the SPA is, stack, domain map,
  links to `ebl-frontend` and the backend doc set.
- `frontend-docs/01-architecture.md` — composition (CRA + CRACO entry,
  routing, contexts, services), session/auth wiring, error/Sentry flow,
  data fetching pattern (Bluebird-cancellable), state and immutability
  (Immer), SCSS/BEM conventions.
- `frontend-docs/02-data-and-api.md` — how the SPA talks to `ebl-api`:
  service modules, schema/normalization layer, scope-gated UI, error
  handling, pagination/query parameter conventions, references to the
  backend's API contract and data model docs (no duplication).
- `frontend-docs/03-routes-and-features.md` — top-level routes and the
  features/pages they map to (Corpus, Fragmentarium, Dictionary, Signs,
  Bibliography, AfO Register, Dossiers, Tools), with module paths under
  `src/` and notable feature sub-routes (annotation tool, sitemap).
- `frontend-docs/04-build-and-operations.md` — Yarn/Node 20, CRACO build,
  Docker image, `.env.local` model, CI workflows in
  `.github/workflows/`, Husky + GitGuardian secret scanning, Lighthouse,
  CSP/security headers, sitemap workflow, deploy posture (Swarmpit).
- `frontend-docs/05-contributing.md` — local setup, scripts (`yarn lint`,
  `yarn tsc`, `yarn test`, `yarn test --coverage --watchAll`,
  `yarn lighthouse`), Prettier/ESLint/Stylelint, BEM, filename rules,
  React Testing Library practice, secret-scanning hook, doc-update
  obligations.

(Numbering follows the same logic as the backend set: overview →
architecture → data → routes/features → operations → contributing.)

## Phase 1 — Restructure

- [x] T1: Create root tracking files (this plan and the implementation
  log).
- [x] T2: Inventory existing `frontend-docs/` files and classify each as
  Keep / Merge / Archive against the target structure.
- [x] T3: Create the six new core docs with clear goals and consistent
  voice (skeleton + section headers, light placeholder content).
- [x] T4: Move every legacy file into `frontend-docs/archive/legacy/`,
  preserving the relative path under `architecture/`, `features/`,
  `guides/`, `reference/`.
- [x] T5: Add transition notes only for files with high prior visibility
  (notably `reference/route-catalog.md` and
  `reference/repository-map.md`) — short stubs that point to the new
  numbered home.
- [x] T6: First consistency pass — confirm each core doc has Purpose,
  body, Related, Last Reviewed.
- [x] T7: Convert bare filename references into proper relative markdown
  links.
- [x] T8: Run markdownlint on the new docs and tracking files; fix all
  violations.

## Phase 2 — Enrichment

Goal: replace any generic prose in the six core docs with concrete,
repo-specific content sourced from `ebl-frontend` and from the material
currently in `frontend-docs/archive/legacy/`. The archive is treated as a
transient source — every fact worth keeping is mined into a core doc, and
the archive is then removed entirely.

### Source mining

- [x] T9: Confirm `ebl-frontend` modules and conventions referenced by
  the architecture doc actually exist in the upstream repository
  (`src/` layout, `SessionContext`, `craco.config.js`, `.devcontainer/`,
  `.husky/`, `.github/workflows/`, `public/sitemap/`).
- [x] T10: Extract structured facts from each archived file:
  - `architecture/overview.md` → architecture facts (composition root,
    routing, contexts, services).
  - `features/overview.md` → routes/features mapping per top-level
    domain.
  - `guides/engineering-playbook.md` → contributing facts (conventions,
    PR review, test discipline).
  - `guides/testing-strategy.md` → contributing facts (Jest + RTL,
    coverage expectations, common pitfalls).
  - `reference/api-and-data-contracts.md` → data/API facts; cross-link
    to backend `03-api-contract.md` and `02-data-model.md` instead of
    duplicating.
  - `reference/repository-map.md` → architecture facts (top-level
    folders, `src/` subtree).
  - `reference/route-catalog.md` → routes/features facts.
  - `reference/change-log-template.md` → contributing facts (release
    notes / changelog discipline) or drop if not actually used.

### Per-doc enrichment

- [x] T11: `00-overview.md` — eBL SPA description, real stack list (CRA
  with CRACO, TypeScript, Yarn, Node 20, Auth0, Sentry, Bluebird, Immer,
  Prettier/ESLint/Stylelint, Husky + GitGuardian, Lighthouse), domain
  list keyed to `src/<domain>/`, and direct links to the `ebl-frontend`
  and `ebl-api` repositories.
- [x] T12: `01-architecture.md` — document actual components and wiring:
  CRA entry, CRACO config customizations (`craco.config.js`),
  `react-router` v5 setup, `SessionContext` (Auth0-spa-js,
  `isAllowedTo*` checks), service classes that wrap `fetch`, Bluebird
  cancellable-promise pattern for data loading, Immer for state, Sentry
  initialization, error boundary, structure of `src/` (per-domain
  folders + shared components/services). Include one concrete request
  trace (e.g., loading a fragment).
- [x] T13: `02-data-and-api.md` — list service modules per domain (under
  `src/<domain>/...` or shared `src/...`), the schema/normalization
  approach used for fragments and corpus, scope-gated UI via
  `SessionContext`, error envelope handling, query/parameter shape, and
  cross-link to backend `03-api-contract.md` and `02-data-model.md`. Do
  not restate the contract — point to it.
- [x] T14: `03-routes-and-features.md` — extract real top-level routes
  from the router setup; for each, list the feature folder under `src/`
  and the headline endpoints it consumes. Include the annotation tool
  (`react-image-annotation` based) and the sitemap (`public/sitemap/`).
- [x] T15: `04-build-and-operations.md` — replace bullet list with:
  build artifacts (`Dockerfile`, `craco.config.js`, `package.json`,
  `tsconfig.json`); `INLINE_RUNTIME_CHUNK=false` requirement for prod;
  full `.env.local` variable list (eight `REACT_APP_*` keys); CI
  workflows from `.github/workflows/` (main, codeql, secret-scan,
  update-sitemaps); Husky + GitGuardian secret-scanning flow; Lighthouse
  usage; CSP requirements (Auth0 in `frame-src`, API in `img-src`);
  sitemap automated/manual update procedures; deploy via Swarmpit.
- [x] T16: `05-contributing.md` — local setup (Codespaces dev container
  vs local with Yarn/Node 20/Chrome/Git LFS/ggshield), scripts
  (`yarn start`, `yarn lint`, `yarn tsc`, `yarn test`,
  `yarn test --coverage --watchAll`, `yarn lighthouse`), code style
  (Prettier, ESLint, Stylelint, BEM, filename rules), test discipline
  (RTL pitfalls), branch flow (GitHub Flow), doc-update obligations
  (table mirroring the backend contributing table, with rows for
  routes/features, data/API, architecture, build/operations).

### Archive removal

- [x] T17: Replace every link that points into
  `frontend-docs/archive/legacy/` with either an inline summary in the
  relevant core doc or a link to the authoritative source in
  `ebl-frontend` / the backend doc set. No core doc may depend on the
  archive after this step.
- [x] T18: Delete `frontend-docs/archive/` (and any transition stubs
  introduced in T5) once external links are updated. Confirm
  `git grep -n "archive/legacy" frontend-docs` returns no matches in
  tracked files.
- [x] T19: Re-run markdownlint on the final core set and tracking files;
  fix any violations introduced by enrichment.
- [x] T20: Update plan and log with completion status and final file
  list.

## Phase 3 — Gap Coverage and Numbering (evaluated; not needed)

After Phase 2, a gap pass was performed:

- [x] T21: Inventoried `frontend-docs/` on disk — only the seven files
  in the target structure (README + six numbered docs).
- [x] T22: Gap analysis vs `ebl-frontend`. Candidates considered:
  dedicated security/CSP doc, performance/Lighthouse budget doc, fonts /
  i18n doc, ADR log. Decision: no separate doc needed. CSP, secret
  scanning, and Lighthouse usage are already covered in
  [04-build-and-operations.md](./frontend-docs/04-build-and-operations.md);
  BEM/Stylelint and React Testing Library practice are in
  [05-contributing.md](./frontend-docs/05-contributing.md); fonts /
  acknowledgements remain owned by the upstream `README.md`.
- [x] T23: No new doc, no renumbering.
- [x] T24: Final lint pass — 0 errors over 9 files.

## Inventory and Classification

| Existing File | Decision | Destination |
|---|---|---|
| frontend-docs/README.md | Replace | frontend-docs/README.md (rewritten as entrypoint) |
| frontend-docs/architecture/overview.md | Merge + Archive | frontend-docs/01-architecture.md / archive/legacy/ |
| frontend-docs/features/overview.md | Merge + Archive | frontend-docs/03-routes-and-features.md / archive/legacy/ |
| frontend-docs/guides/engineering-playbook.md | Merge + Archive | frontend-docs/05-contributing.md / archive/legacy/ |
| frontend-docs/guides/testing-strategy.md | Merge + Archive | frontend-docs/05-contributing.md / archive/legacy/ |
| frontend-docs/reference/api-and-data-contracts.md | Merge + Archive | frontend-docs/02-data-and-api.md / archive/legacy/ |
| frontend-docs/reference/repository-map.md | Merge + Archive | frontend-docs/01-architecture.md / archive/legacy/ |
| frontend-docs/reference/route-catalog.md | Merge + Archive | frontend-docs/03-routes-and-features.md / archive/legacy/ |
| frontend-docs/reference/change-log-template.md | Evaluate | Keep as is, fold into 05-contributing, or drop |

## Notes

The backend set's lesson applies: structure first, then mine the archive
for substance, then delete the archive in a single sweep so nothing in
the published set depends on transitional content. Every core doc must
include Purpose, body, Related, and Last Reviewed.

Cross-repo references should always link to `ebl-frontend` for
implementation and to `backend-docs/` for contract/data-model facts —
never duplicate facts that live in `ebl-api` or in the backend doc set.
