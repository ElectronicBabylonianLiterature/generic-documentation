# Backend Docs Restructure Plan and Todo

ID: 20260506-01

Date: 2026-05-06

Branch: feature/new-docs

Scope: backend documentation consolidation and cleanup

## Goal

Reduce backend docs to a clear, maintainable structure with fewer files, explicit goals, and consistent perspective.

## Success Criteria

- Backend docs are centered around a small core set of files.
- Navigation starts from a single entrypoint.
- Versioning and deprecation policy has one canonical home.
- Each core doc contains concrete, repo-specific content (modules, scopes,
  endpoints, error mappings, deployment artifacts, test commands), not generic
  prose.
- All backend docs and tracking files pass markdownlint.
- The `backend-docs/archive/` directory is fully removed at the end of the
  enrichment phase, with no remaining references from any tracked file.
- Plan and implementation log are updated as work progresses.

## Target Structure

- backend-docs/README.md
- backend-docs/00-overview.md
- backend-docs/01-architecture.md
- backend-docs/02-data-model.md
- backend-docs/03-api-contract.md
- backend-docs/04-lifecycle-and-compatibility.md
- backend-docs/05-operations.md
- backend-docs/06-contributing.md

## Phase 1 — Restructure (done)

- [x] T1: Create root tracking files (plan and log).
- [x] T2: Inventory existing backend docs and classify Keep/Merge/Archive.
- [x] T3: Create new core docs with clear goals and perspective.
- [x] T4: Consolidate versioning/deprecation into lifecycle policy.
- [x] T5: Archive legacy guides/standards/operations docs.
- [x] T6: Add transition notes for moved files with high prior visibility.
- [x] T7: Final consistency pass.
- [x] T8: Convert bare filename references into proper relative markdown links.
- [x] T9: Run markdownlint and fix all violations across new docs and tracking files.

## Phase 2 — Enrichment (in progress)

Goal: replace generic prose in the six core docs with concrete, repo-specific
content sourced from the `ebl-api` codebase
(<https://github.com/ElectronicBabylonianLiterature/ebl-api/>) and from the
material currently in `backend-docs/archive/legacy/`. The archive is treated as
a transient source: every fact worth keeping is mined into a core doc, and the
archive is then removed entirely.

### Source mining

- [x] T10: Clone or fetch the `ebl-api` repo locally and confirm the modules,
  middleware, and bootstrap files referenced by the architecture doc exist
  (`ebl/app.py`, `ebl/context.py`, `ebl/<domain>/web|application|domain|infrastructure`).
- [x] T11: Extract structured facts from each archived file into a working
  notes section (kept in the log, not in published docs):
  - architecture.md, guides/backend-service-map.md,
    guides/dependency-and-data-flow.md → architecture facts
  - guides/request-response-contracts.md, standards/api-endpoint-catalog.md,
    standards/endpoint-contract-register.md, standards/error-status-matrix.md,
    standards/authorization-matrix.md, guides/security-model.md → API contract
    facts
  - api-versioning-and-deprecation.md → lifecycle facts
  - operations/deployment.md, operations/slo-sli-and-alerting.md,
    incident-response.md, backup-and-restore.md, troubleshooting-matrix.md →
    operations facts
  - guides/test-suite.md, contribution-and-review.md,
    standards/docs-drift-governance.md,
    standards/documentation-quality-checklist.md,
    standards/documentation-status.md → contributing facts
  - guides/data-classification-and-retention.md, guides/domain-*.md →
    overview/architecture cross-cutting facts

### Per-doc enrichment

- [x] T12: `00-overview.md` — add concrete project description (eBL API,
  Falcon + MongoDB), real domain list (Corpus, Fragmentarium, Lexical,
  Reference, Support), and direct links to the runnable repo
  (`ebl-api`).
- [x] T13: `01-architecture.md` — document actual components and wiring:
  - Falcon app composition in `ebl/app.py`, dependency assembly in
    `ebl/context.py`.
  - Auth middleware (Auth0 RS256 JWT, scope/permissions claim handling) and
    cache middleware.
  - Domain modules with one-line responsibility each.
  - MongoDB collections / GridFS usage at a high level.
  - EBL AI integration and Sentry reporting (where they plug in, not how).
  - A concrete request-lifecycle example for one real endpoint.
- [x] T14: `02-api-contract.md` — replace generic rules with:
  - Real route prefixes and resource grouping.
  - Authentication model and scope naming convention.
  - Error envelope shape and the canonical exception → HTTP status mapping
    table (mined from `error-status-matrix.md` + code).
  - Pagination, filtering, sorting conventions actually used.
  - Reference to the endpoint catalog as a generated artifact (not a hand-kept
    legacy file).
- [x] T15: `03-lifecycle-and-compatibility.md` — keep policy text, but add:
  - Current API surface state (no URI version prefix today).
  - Concrete examples of additive vs breaking change in this codebase.
  - How deprecations are announced (release notes / changelog location).
- [x] T16: `04-operations.md` — replace bullet list with:
  - Build/runtime artifacts: `Dockerfile`, the three `docker-compose*.yml`
    files, `Taskfile.dist.yml`, `pyproject.toml`, `poetry.toml`.
  - CI: `.github/workflows/main.yml`, `.github/workflows/codeql.yml`.
  - SLO/SLI baseline and alerting expectations from
    `operations/slo-sli-and-alerting.md`.
  - Incident response summary and link to a runbook section.
  - Backup and restore expectations from `backup-and-restore.md`.
  - Top entries from `troubleshooting-matrix.md` (symptom → likely cause →
    first action).
- [x] T17: `05-contributing.md` — replace generic checklist with:
  - Local setup: Poetry, Task, Docker Compose dev flow.
  - Test commands actually used (from `guides/test-suite.md` and
    `Taskfile.dist.yml`).
  - PR review expectations (from `contribution-and-review.md`).
  - Documentation update obligations (from `docs-drift-governance.md` and
    `documentation-quality-checklist.md`), expressed as in-repo rules.
- [x] T18: Cross-link the six core docs consistently from `00-overview.md`
  and from each doc's "Related" section.

### Archive removal

- [x] T19: Replace every link that points into `backend-docs/archive/legacy/`
  with either an inline summary in the relevant core doc or a link to the
  authoritative source in the `ebl-api` repo. No core doc may depend on the
  archive after this step.
- [x] T20: Remove the legacy versioning transition stub at
  `backend-docs/api-versioning-and-deprecation.md` once external links are
  updated, since the canonical location is `03-lifecycle-and-compatibility.md`.
- [x] T21: Delete `backend-docs/archive/` (including `archive/legacy/` and
  `README-legacy.md`) and confirm `git grep -n "archive/legacy"` returns no
  matches in tracked files.
- [x] T22: Re-run markdownlint on the final core set and tracking files; fix
  any violations introduced by enrichment.
- [x] T23: Update plan and log with completion status and final file list.

## Phase 3 — Gap Coverage and Numbering (done)

Goal: address one substantive coverage gap (persistence/data model) and
ensure document numbering reflects logical reading order. The data model
slots between Architecture and API Contract because contract and operations
both reference persistence concepts (collections, indexes, GridFS,
`changelog`).

- [x] T24: Inventory `backend-docs/` on disk and confirm no stale top-level
  files (only the seven core docs plus README).
- [x] T25: Gap analysis vs `ebl-api` repository — identify topics not covered
  by the existing five enriched docs. Decision: only the persistence/data
  model is a real gap. Per-domain deep dives, ADRs, glossary, and a
  dedicated security doc are out of scope for this pass.
- [x] T26: Numbering decision — place the new `Data Model` doc at position 2
  (right after Architecture). Renumber `02→03`, `03→04`, `04→05`, `05→06`
  using `git mv` to preserve history.
- [x] T27: Bulk-update cross-links across the seven `backend-docs/*.md`
  files to use the new filenames.
- [x] T28: Author `backend-docs/02-data-model.md` with collection/index/
  GridFS reference, cross-domain relationships, query/aggregation layer,
  changelog semantics, caching, ATF importer/ingestion, data classes and
  retention, and change rules.
- [x] T29: Insert the new doc into the numbered lists in
  `backend-docs/README.md` and `backend-docs/00-overview.md`. Update the
  count from "six" to "seven" in `README.md`.
- [x] T30: Add the data-model link to the "Related" sections of
  `01-architecture.md`, `03-api-contract.md`, `04-lifecycle-and-compatibility.md`,
  `05-operations.md`, and `06-contributing.md`. Add a new row to the
  doc-update obligation table in `06-contributing.md` for persistence
  changes.
- [x] T31: Re-run markdownlint on the seven core docs plus `plan-` and
  `log-` tracking files. Verify zero errors.
- [x] T32: Update plan and log to reflect Phase 3 completion.

| Existing File | Decision | Destination |
|---|---|---|
| backend-docs/api-versioning-and-deprecation.md | Merge + transition stub | backend-docs/03-lifecycle-and-compatibility.md |
| backend-docs/architecture.md | Archive | backend-docs/archive/legacy/ |
| backend-docs/backup-and-restore.md | Archive | backend-docs/archive/legacy/ |
| backend-docs/contribution-and-review.md | Archive | backend-docs/archive/legacy/ |
| backend-docs/incident-response.md | Archive | backend-docs/archive/legacy/ |
| backend-docs/troubleshooting-matrix.md | Archive | backend-docs/archive/legacy/ |
| backend-docs/README.md (legacy) | Archive | backend-docs/archive/legacy/README-legacy.md |
| backend-docs/guides/* | Archive | backend-docs/archive/legacy/guides/ |
| backend-docs/operations/* | Archive | backend-docs/archive/legacy/operations/ |
| backend-docs/standards/* | Archive | backend-docs/archive/legacy/standards/ |
| backend-docs/development/* | Archive | backend-docs/archive/legacy/development/ |

## Notes

Phase 1 prioritized maintainability and structure. Phase 2 prioritizes
substance: every core doc must contain repo-specific facts that a contributor
can act on. The archive is a one-way buffer — content is mined out of it and
the directory is then deleted, including all references from the rest of the
docs.
