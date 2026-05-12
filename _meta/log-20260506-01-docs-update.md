# Backend Docs Restructure Implementation Log

Created: 2026-05-06

ID: 20260506-01

Date: 2026-05-06

Branch: feature/new-docs

## Execution Log

### Step 1

Time: 2026-05-06 13:11

Action: Created root plan and log files.

Result: Tracking files initialized.

### Step 2

Time: 2026-05-06 13:11

Action: Generated backend markdown inventory and appended classification table to plan.

Result: Inventory complete.

### Step 3

Time: 2026-05-06 13:12

Action: Created new core backend docs (00-05) with standardized purpose/goals/perspective sections.

Result: Core structure created.

### Step 4

Time: 2026-05-06 13:12

Action: Consolidated legacy versioning/deprecation policy into the lifecycle doc as the canonical source.

Result: Lifecycle policy is canonical; legacy file preserved under archive.

### Step 5

Time: 2026-05-06 13:12

Action: Archived legacy backend docs under backend-docs/archive/legacy/.

Result: Primary docs surface reduced substantially.

### Step 6

Time: 2026-05-06 13:12

Action: Added new backend README and a transition stub at the legacy versioning doc path.

Result: Navigation and backward path compatibility preserved.

### Step 7

Time: 2026-05-06 13:12

Action: Completed initial consistency pass and finalized trackers.

Result: First-pass implementation complete.

### Step 8

Time: 2026-05-06 13:30

Action: Converted bare filename references into proper relative markdown links in all backend core docs and the legacy versioning stub.

Result: VS Code "open external website" prompt for `*.md` references eliminated.

### Step 9

Time: 2026-05-06 13:45

Action: Ran markdownlint-cli2 over backend docs and tracking files; fixed MD022 (blanks around headings), MD032 (blanks around lists), MD012 (multiple blanks), MD024 (duplicate headings), and MD025 (single H1) by reformatting all new docs and removing the embedded legacy excerpt from the lifecycle doc.

Result: All new backend docs and tracking files pass markdownlint.

### Step 10

Time: 2026-05-06 14:30

Action: Reviewed archived backend docs and the ebl-api repository, identified that the new core docs are too generic, and revised the plan to add a Phase 2 enrichment plan (T10-T23) that mines repo-specific facts into each core doc and removes the archive directory plus all references to it.

Result: Plan now defines concrete enrichment tasks per core doc and an archive-removal step; implementation of Phase 2 not yet started.

### Step 11

Time: 2026-05-06 14:07

Action: Mined repo-specific facts from archived legacy docs (architecture, backend-service-map, dependency-and-data-flow, security-model, request-response-contracts, authorization-matrix, error-status-matrix, endpoint-contract-register, api-endpoint-catalog, test-suite, contribution-and-review, deployment, slo-sli-and-alerting, incident-response, backup-and-restore, troubleshooting-matrix, data-classification-and-retention, domain-corpus, domain-fragmentarium, domain-lexical-services, domain-reference-services, domain-support-services, docs-drift-governance, documentation-quality-checklist).

Result: Sufficient material gathered to enrich every core doc with concrete module paths, route prefixes, scope names, error mappings, build artifacts, SLO/SLI baselines, and troubleshooting entries.

### Step 12

Time: 2026-05-06 14:08

Action: Rewrote backend-docs/00-overview.md with the eBL-specific project description, the real domain table (Corpus, Fragmentarium, Lexical, Reference, Support) keyed to ebl/<domain> modules, the actual stack (Falcon, MongoDB, GridFS, Auth0, Marshmallow, Sentry, EBL AI), and a direct link to the ebl-api repository.

Result: 00-overview.md now anchors the reader in the real codebase rather than a generic API.

### Step 13

Time: 2026-05-06 14:08

Action: Rewrote backend-docs/01-architecture.md to describe the actual components and wiring: the composition root in ebl/app.py and ebl/context.py, the four-layer per-domain organization, the route bootstrap map (Signs, Bibliography, Corpus, Dictionary, Files, Fragmentarium, Lemmatization, Markup, AfO Register, Dossiers, Provenance), MongoDB/GridFS persistence, Auth0/guest auth wiring with scope-claim merging, error_handler integration, cross-cutting modules (common.query, transliteration, alignment, chronology, io), and a concrete request-lifecycle example for POST /texts/.../lines.

Result: 01-architecture.md is now grounded in named modules and real flows.

### Step 14

Time: 2026-05-06 14:09

Action: Rewrote backend-docs/02-api-contract.md with the no-URI-version posture, the route-family ownership table, the Auth0 RS256 verification description, the three guard styles with example scope names, the full authorization coverage table by scope/guard, the canonical exception-to-HTTP-status mapping table from ebl/error_handler.py, schema hotspot pointers (corpus, fragmentarium, transliteration, common.query), the end-to-end endpoint trace recipe, pagination helpers in ebl/common/query/, and contract change rules.

Result: 02-api-contract.md is now actionable for a contributor adding or modifying an endpoint.

### Step 15

Time: 2026-05-06 14:09

Action: Rewrote backend-docs/03-lifecycle-and-compatibility.md to keep the policy text and add concrete additive vs breaking examples drawn from this codebase (new /fragments/{number}/<feature> endpoints, /fragments/query and /corpus/query parameters, schema dump fields), the no-URI-version-prefix note, the deprecation announce/deprecate/remove sequence, the changelog/release-notes communication path, and governance triggers cross-linking to the other core docs.

Result: 03-lifecycle-and-compatibility.md is policy plus concrete repo-specific guidance.

### Step 16

Time: 2026-05-06 14:09

Action: Rewrote backend-docs/04-operations.md with the build/runtime artifact table (Dockerfile, docker-compose.yml, docker-compose-api-only.yml, docker-compose-updater.yml, Taskfile.dist.yml, pyproject.toml, poetry.toml, pull-db.sh), environment configuration categories, CI workflows (.github/workflows/main.yml and codeql.yml), SLI/SLO baselines (availability, p95 latency, 5xx ratio with concrete thresholds), incident-response severity/detection/response/recovery flow, backup-and-restore strategy including changelog and GridFS handling, and the troubleshooting matrix.

Result: 04-operations.md replaces the previous bullet list with operational substance.

### Step 17

Time: 2026-05-06 14:09

Action: Rewrote backend-docs/05-contributing.md with Poetry+Task+Docker Compose local-setup flow, the canonical task command surface (format/lint/type/test/test-all/start), the test-suite layout under ebl/tests/ mirroring ebl/<domain>/, the change workflow, an explicit review checklist, and a "if the PR changes ... update ..." documentation-update obligation table tied to the other core docs.

Result: 05-contributing.md is a complete contributor onramp tied back to the rest of the doc set.

### Step 18

Time: 2026-05-06 14:09

Action: Cross-linked the six core docs from each "Related" section and rewrote backend-docs/README.md to enumerate the six core docs with one-line summaries and remove all archive references.

Result: Navigation between the six core docs is now consistent and the README reflects only the active surface.

### Step 19

Time: 2026-05-06 14:10

Action: Removed every link into backend-docs/archive/legacy/ from the new core docs and README; replaced where needed with inline content (mined in Steps 11-17) or with links to the ebl-api repository as the authoritative source.

Result: No core doc depends on the archive.

### Step 20

Time: 2026-05-06 14:10

Action: Deleted backend-docs/api-versioning-and-deprecation.md (the transition stub) since 03-lifecycle-and-compatibility.md is now the canonical and only versioning/deprecation document.

Result: Transition stub removed; canonical lifecycle doc stands alone.

### Step 21

Time: 2026-05-06 14:10

Action: Deleted backend-docs/archive/ (Remove-Item -Recurse -Force), including archive/legacy/ and the legacy README.

Result: Archive directory removed from the working tree; remaining grep matches are inside this plan/log (intentional historical notes) and in git's tracked-but-deleted index, which will be staged on the next commit.

### Step 22

Time: 2026-05-06 14:10

Action: Re-ran markdownlint-cli2 on the six core docs, the README, and the plan/log files.

Result: 0 errors across 9 files.

### Step 23

Time: 2026-05-06 14:10

Action: Updated plan checkboxes for T10-T23 and appended Steps 11-23 to this log.

Result: Trackers reflect Phase 2 completion. Final backend-docs surface: README.md, 00-overview.md, 01-architecture.md, 02-api-contract.md, 03-lifecycle-and-compatibility.md, 04-operations.md, 05-contributing.md.

### Step 24

Time: 2026-05-06 15:00

Action: User requested investigation into what else might be missing from the backend docs, with a reminder to keep the numbering logical and a question about whether a database doc should go last. Performed a disk inventory of backend-docs/ (only README.md plus 00-overview through 05-contributing - no stale top-level files) and a gap analysis against the ebl-api repository. Concluded the only substantive gap is persistence/data model. Decided the new doc should slot at position 2 (between Architecture and API Contract) rather than last, because both API Contract and Operations reference persistence concepts (collections, indexes, GridFS, changelog), so the data model is most useful before them.

Result: Phase 3 scope agreed: add 02-data-model.md and renumber 02-05 to 03-06.

### Step 25

Time: 2026-05-06 15:05

Action: Renamed via `git mv` to preserve history: 02-api-contract.md -> 03-api-contract.md, 03-lifecycle-and-compatibility.md -> 04-lifecycle-and-compatibility.md, 04-operations.md -> 05-operations.md, 05-contributing.md -> 06-contributing.md.

Result: `git status --short` showed the four renames as RM (renamed-modified). History preserved.

### Step 26

Time: 2026-05-06 15:10

Action: Bulk-replaced internal cross-link targets across all seven backend-docs/*.md files using ReadAllText/WriteAllText with regex replacements for the four old paths (./02-api-contract.md, ./03-lifecycle-and-compatibility.md, ./04-operations.md, ./05-contributing.md -> their new counterparts).

Result: Disk verification (Select-String) confirmed all link references now point to the new filenames. Section anchors (#authorization-coverage, #error-mapping, #environments-and-configuration) preserved.

### Step 27

Time: 2026-05-06 15:20

Action: Authored backend-docs/02-data-model.md covering: storage topology (MongoDB + GridFS); per-domain collections table mapping each domain to its repository module under ebl/<domain>/infrastructure/; GridFS buckets (photos, folios, public files served by ebl/files/web/files.py); indexing rules; cross-domain relationships (fragment->bibliography, fragment->dictionary, fragment->AfO register, chapter->manuscripts->fragments, chapter->bibliography, provenance tree); query/aggregation layer (ebl/common/query/, ebl/transliteration/transliteration_query_factory.py); changelog semantics including its exclusion from pull-db.sh; ebl/cache/ caching with Mongo backing and write-path invalidation; data ingestion via ebl/io/ and the ATF importer plus docker-compose-updater.yml; data classes/retention table; change rules; Related; Last Reviewed.

Result: New 02-data-model.md is in place with concrete eBL-specific content.

### Step 28

Time: 2026-05-06 15:25

Action: Updated cross-references in surrounding docs:

- backend-docs/README.md: inserted Data Model as item 3 in the numbered list (now lists seven docs); changed "These six documents" to "These seven documents".
- backend-docs/00-overview.md: inserted Data Model as item 2 in the "How to Use This Doc Set" list.
- backend-docs/01-architecture.md, 03-api-contract.md, 04-lifecycle-and-compatibility.md, 05-operations.md, 06-contributing.md: added [Data Model](./02-data-model.md) to each "Related" section.
- backend-docs/06-contributing.md: added a new row to the doc-update obligation table - "Collections, indexes, GridFS, or changelog -> Data Model".

Result: All seven docs link consistently to the new data-model doc; the obligation table now covers persistence changes.

### Step 29

Time: 2026-05-06 15:30

Action: Ran `npx --yes markdownlint-cli2 "backend-docs/*.md" "plan-20260506-01-docs-update.md" "log-20260506-01-docs-update.md"`.

Result: Linting 10 file(s); Summary: 0 error(s). Phase 3 doc set passes.

### Step 30

Time: 2026-05-06 15:35

Action: Updated plan-20260506-01-docs-update.md - replaced the Target Structure block to list the seven core docs (and removed the archive bullet), and appended Phase 3 (T24-T32) covering inventory, gap analysis, numbering decision, renames, cross-link updates, data-model authoring, README/overview/Related updates, lint, and tracker update.

Result: Plan reflects Phase 3 completion. Final backend-docs surface: README.md, 00-overview.md, 01-architecture.md, 02-data-model.md, 03-api-contract.md, 04-lifecycle-and-compatibility.md, 05-operations.md, 06-contributing.md.
