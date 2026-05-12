# Frontend Docs Restructure — Implementation Log

ID: 20260506-02

Plan: [plan-20260506-02-frontend-docs-update.md](./plan-20260506-02-frontend-docs-update.md)

Branch: feature/new-docs

## Step 1

Time: 2026-05-06 16:00

Action: Created plan and log tracking files for the frontend docs
restructure. The plan mirrors the backend pattern (Phase 1 restructure,
Phase 2 enrichment with archive mining + removal, optional Phase 3 for
gap coverage) and is parameterized to the `ebl-frontend` stack
(TypeScript + CRA + CRACO, Auth0, Sentry, Bluebird, Immer, Yarn/Node 20,
Husky + GitGuardian, Lighthouse, sitemap automation).

Inventoried `frontend-docs/` on disk:

- `README.md`
- `architecture/overview.md`
- `features/overview.md`
- `guides/engineering-playbook.md`
- `guides/testing-strategy.md`
- `reference/api-and-data-contracts.md`
- `reference/change-log-template.md`
- `reference/repository-map.md`
- `reference/route-catalog.md`

Verified upstream stack and conventions against the `ebl-frontend`
README on GitHub
(<https://github.com/ElectronicBabylonianLiterature/ebl-frontend>):
TypeScript 98%+, CRA + CRACO, Yarn, Node 20, Auth0
(`@auth0/auth0-spa-js` with `SessionContext.isAllowedTo*`), Sentry,
Bluebird (cancellable promises), Immer, Prettier/ESLint/Stylelint, BEM
CSS, Husky + GitGuardian (`ggshield`), Lighthouse, automated sitemap
GitHub Action, Swarmpit deploy. Required env keys: `REACT_APP_*` (eight
in total).

Result: Tracking files in place. No documentation content has been moved
or rewritten yet. Phase 1 (T2 onward) will not start until the plan is
approved and the user gives the green light.

## Notes

The frontend doc set must avoid duplicating contract or data-model facts
that already live in `backend-docs/03-api-contract.md` and
`backend-docs/02-data-model.md`. Cross-link instead.

## Step 2

Time: 2026-05-06 16:30

Action: Reviewed the existing rontend-docs/ content and confirmed
that the substance was already concrete (real src/<domain>/ paths,
real router modules, real endpoint catalog, real route patterns).
Decided to collapse Phase 1 (skeletons + intermediate archive) and
Phase 2 (mining + archive removal) into a single sweep, since the
information could be re-organized into the new numbered structure
without an intermediate archive on disk. No content of value is lost in
this approach.

Result: Decision recorded; proceeded directly to creating the six new
core docs.

## Step 3

Time: 2026-05-06 16:35

Action: Authored `frontend-docs/00-overview.md` with the eBL SPA
description, the real stack (CRA + CRACO, TypeScript ~99%, Yarn / Node
20, Auth0 SPA SDK with `SessionContext`, Sentry, Bluebird cancellable
promises, Immer, Prettier / ESLint / Stylelint, Husky + GitGuardian,
Lighthouse), the per-domain map keyed to `src/<domain>/` and matched
to backend counterparts, and a How-to-Use list pointing at the other
five core docs.

Result: New entry-point overview in place.

## Step 4

Time: 2026-05-06 16:40

Action: Authored `frontend-docs/01-architecture.md` with the entry
points (`src/index.tsx`, `src/App.tsx`, `src/router/router.tsx`,
`craco.config.js`), the layered model (UI / Application / Domain /
Infrastructure / Transport / Auth) with canonical dependency direction,
the cross-cutting modules (`src/auth`, `src/http`, `src/router`,
`src/common`, `src/query`, `src/test-support`), the Bluebird
cancellable-promise async model, `SessionContext` auth flow, the
`ApiClient` -> `ApiError` error path, a concrete request lifecycle
example for `/library/:id`, and a change-safety checklist.

Result: Architecture doc grounded in real modules and flows.

## Step 5

Time: 2026-05-06 16:45

Action: Authored `frontend-docs/02-data-and-api.md` describing
`src/http/ApiClient.ts` operations (`fetchJson`, `postJson`,
`putJson`, `fetchBlob`), the two authentication modes
(`public-or-no-auth` vs `default`), scope-gated UI through
`SessionContext` with `isAllowedTo*` helpers, the four-class error
taxonomy, and a per-domain endpoint catalog (Dictionary, Bibliography,
Fragmentarium, Corpus, Signs, Dossiers, AfO Register, image / blob
endpoints). Cross-linked to `backend-docs/03-api-contract.md` for
authoritative scope and error mapping, and to
`backend-docs/02-data-model.md` for the GridFS buckets behind the
blob endpoints.

Result: Data-and-API doc captures the SPA's view without duplicating
the backend contract.

## Step 6

Time: 2026-05-06 16:50

Action: Authored `frontend-docs/03-routes-and-features.md` with the
router composition (per-area route modules under `src/router/`), the
full route family table (Root / Static, About, Fragmentarium, Corpus,
Dictionary, Bibliography, Signs, Tools, Legal / Footer) with owning
modules, the route behavior classes (static, search/list, detail,
edit/mutation, utility), and dedicated subsections for the annotation
tool (`react-image-annotation` patched in `patches/`) and the
sitemap (`public/sitemap/` + GitHub Actions workflow).

Result: Route catalog and feature map with explicit deep-link risk
classification.

## Step 7

Time: 2026-05-06 16:55

Action: Authored `frontend-docs/04-build-and-operations.md` with the
runtime requirements (Node 20, Yarn, Chrome, Git LFS, `ggshield`),
the build artifacts table (`Dockerfile`, `craco.config.js`,
`tsconfig.json`, `package.json`, `patches/`, `public/`,
`scripts/`, ESLint / Stylelint configs), the
`INLINE_RUNTIME_CHUNK=false` production requirement, the eight
`REACT_APP_*` environment variables plus `GITGUARDIAN_API_KEY`,
the canonical scripts table, the CI workflow set under
`.github/workflows/` (`main`, `codeql`, `secret-scan`,
`update-sitemaps`), the Husky + GitGuardian secret-scanning flow with
PAT (`SITEMAP_AUTOUPDATE`) maintenance instructions, the Lighthouse
usage, the production CSP requirements (Auth0 in `frame-src`, API in
`img-src`), the automated and manual sitemap update procedures, and
the Swarmpit deployment posture.

Result: Operations doc with concrete artifacts, env, CI, and
deployment commands.

## Step 8

Time: 2026-05-06 17:00

Action: Authored `frontend-docs/05-contributing.md` with the two
development environment options (Codespaces dev container vs local
install), the required services (eBL API, Auth0, Sentry), the quality
gate command table, code style rules (TypeScript-only, Prettier,
ESLint, Stylelint, BEM, filename rules, Immer, Bluebird), Git blame and
line-ending configuration, the test discipline (Jest + RTL, `FakeApi`
in `src/test-support/`, test levels, high-risk scenarios, flaky-test
policy), the GitHub Flow + Husky + `ggshield` PR workflow, and a
doc-update obligation table mirroring the backend contributing table
(routes/features, data/API, architecture, build/operations, this doc,
backend contract drift).

Result: Contributing doc covers onboarding, code style, tests, and
doc-update rules.

## Step 9

Time: 2026-05-06 17:05

Action: Replaced `frontend-docs/README.md` with a short entry point
listing the six numbered core docs and pointing at the backend doc set.
Then ran `git rm -r` over the legacy folders `frontend-docs/architecture`,
`frontend-docs/features`, `frontend-docs/guides`, and
`frontend-docs/reference` (eight files removed).

Result: Final layout is README + six numbered core docs. No legacy
content remains.

## Step 10

Time: 2026-05-06 17:10

Action: Ran `npx --yes markdownlint-cli2 "frontend-docs/*.md"
"plan-20260506-02-frontend-docs-update.md"
"log-20260506-02-frontend-docs-update.md"`. Initial run flagged
MD047 (missing trailing newline) on README.md; appended a newline and
re-ran.

Result: Linting 9 file(s); Summary: 0 error(s).

## Step 11

Time: 2026-05-06 17:15

Action: Marked Phase 1 (T1-T8) and Phase 2 (T9-T20) checkboxes complete
in the plan. Evaluated Phase 3 gap analysis: the candidate dedicated
docs (security/CSP, performance/Lighthouse, fonts/i18n, ADRs) are not
warranted because their content is already integrated into
`04-build-and-operations.md` (CSP, secret scanning, Lighthouse) or
`05-contributing.md` (BEM/Stylelint, RTL practice), and font
acknowledgements are owned by the upstream `README.md`. Marked Phase 3
as evaluated-and-not-needed; T21-T24 checked with explanatory text.

Result: Final frontend-docs surface: README.md, 00-overview.md,
01-architecture.md, 02-data-and-api.md, 03-routes-and-features.md,
04-build-and-operations.md, 05-contributing.md.
