# Backend Documentation

This directory documents the eBL backend (`ebl-api`) for contributors.
Source: <https://github.com/ElectronicBabylonianLiterature/ebl-api/>.

## Start Here

1. [Overview](./00-overview.md) — what the service is, stack, domains.
2. [Architecture](./01-architecture.md) — components, layering,
   composition root, request lifecycle.
3. [Data Model](./02-data-model.md) — collections, GridFS buckets,
   cross-domain references, changelog.
4. [API Contract](./03-api-contract.md) — routes, scopes, errors,
   pagination.
5. [Lifecycle and Compatibility](./04-lifecycle-and-compatibility.md) —
   versioning posture and deprecation policy.
6. [Operations](./05-operations.md) — build artifacts, CI, SLOs, incident
   response, backup/restore, troubleshooting.
7. [Contributing](./06-contributing.md) — local setup, tests, PR
   expectations, doc-update obligations.

These seven documents are the entire backend documentation set. When the
docs and the code disagree, the code wins and the docs are updated.
