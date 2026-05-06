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
- Legacy docs are archived, not mixed into primary navigation.
- All backend docs and tracking files pass markdownlint.
- Plan and implementation log are updated as work progresses.

## Target Structure

- backend-docs/README.md
- backend-docs/00-overview.md
- backend-docs/01-architecture.md
- backend-docs/02-api-contract.md
- backend-docs/03-lifecycle-and-compatibility.md
- backend-docs/04-operations.md
- backend-docs/05-contributing.md
- backend-docs/archive/legacy/

## Todo List

- [x] T1: Create root tracking files (plan and log).
- [x] T2: Inventory existing backend docs and classify Keep/Merge/Archive.
- [x] T3: Create new core docs with clear goals and perspective.
- [x] T4: Consolidate versioning/deprecation into lifecycle policy.
- [x] T5: Archive legacy guides/standards/operations docs.
- [x] T6: Add transition notes for moved files with high prior visibility.
- [x] T7: Final consistency pass.
- [x] T8: Convert bare filename references into proper relative markdown links.
- [x] T9: Run markdownlint and fix all violations across new docs and tracking files.

## Inventory and Classification

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

This update optimizes for maintainability and onboarding clarity over exhaustive per-topic sprawl.
