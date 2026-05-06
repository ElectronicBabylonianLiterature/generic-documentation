# Contributing

## Purpose

How to make a change to `ebl-api` safely: local setup, test commands, PR
expectations, and the doc-update obligations that keep this documentation
in sync with the code.

## Local Setup

The repository is Poetry-managed and ships with a `Taskfile.dist.yml` that
defines the canonical commands. A typical first run:

1. Install dependencies via Poetry (configuration in `pyproject.toml` /
   `poetry.toml`).
2. Provide environment variables for Auth0, MongoDB, Sentry, the EBL AI
   service, and the cache (see [Operations](./05-operations.md#environments-and-configuration)).
3. Bring up the stack with one of the compose targets:
   - `docker-compose.yml` — full local stack.
   - `docker-compose-api-only.yml` — API only, against an external DB.
   - `docker-compose-updater.yml` — data updater workload.
4. Use `task start` (or the equivalent compose command) to run the API.

## Standard Commands

All flows go through `task` so that CI and local runs match:

| Command | Purpose |
|---|---|
| `task format` | Apply formatters. |
| `task lint` | Lint Python sources. |
| `task type` | Run static type checks. |
| `task test` | Run the test suite. |
| `task test-all` | Run the full test suite (extended scope). |
| `task start` | Start the API locally. |

Run `task format && task lint && task type && task test` before opening a
PR. CI (`.github/workflows/main.yml`, `.github/workflows/codeql.yml`) must
be green for merge.

## Test Suite Layout

Tests live under `ebl/tests/` and mirror the domain structure of `ebl/`:

- `ebl/tests/corpus/`, `ebl/tests/fragmentarium/`,
  `ebl/tests/transliteration/` are the largest surfaces.
- Domain-specific folders: `afo_register`, `alignment`, `atf_importer`,
  `bibliography`, `cache`, `chronology`, `common`, `dictionary`, `dossiers`,
  `factories`, `files`, `io`, `lemmatization`, `markup`, `signs`, `users`.
- Top-level tests for cross-cutting modules:
  `test_app_bootstrap.py`, `test_changelog.py`, `test_dispatcher.py`,
  `test_ebl_ai_client.py`, `test_error_handler.py`, `test_merger.py`,
  `test_mongo_collection.py`, `test_schemas.py`.

When changing a domain, add or update tests in the matching subfolder. New
endpoints require route-level tests covering both the happy path and the
authorization/error behavior.

## Change Workflow

1. Create a topic branch off the integration branch.
2. Make changes layer by layer (domain → application → infrastructure →
   web), keeping each layer's responsibilities separate
   ([Architecture](./01-architecture.md#layering)).
3. Add or update tests for the modified behavior.
4. Run the standard commands locally.
5. Update documentation (see below) in the same PR.
6. Open the pull request with a description that links to any updated
   docs and explains contract impact, if any.

## Review Checklist

Reviewers should explicitly check:

- Domain behavior correctness.
- Regression risk on query/update paths (especially aggregation pipelines
  and index usage).
- Scope enforcement and access-control correctness for new or modified
  routes.
- Schema contract compatibility (additive vs. breaking, see
  [Lifecycle and Compatibility](./04-lifecycle-and-compatibility.md)).
- Test coverage for changed behavior.
- Documentation updates included where required.

## Documentation Update Obligations

Documentation lives in this directory; PRs that change behavior must update
the affected core docs in the same change. Block merge when these are
missing.

| If the PR changes... | Update... |
|---|---|
| A route, resource, or `bootstrap.py` | [API Contract](./03-api-contract.md) (route family table; authorization coverage if scopes change) |
| A scope guard or auth flow | [API Contract](./03-api-contract.md#authorization-coverage) and [Architecture](./01-architecture.md#authentication-and-authorization) |
| Exception classes or `ebl/error_handler.py` | [API Contract](./03-api-contract.md#error-mapping) |
| Composition or wiring (`ebl/app.py`, `ebl/context.py`) | [Architecture](./01-architecture.md) |
| Collections, indexes, GridFS, or `changelog` | [Data Model](./02-data-model.md) |
| Build artifacts, CI, deployment, SLOs | [Operations](./05-operations.md) |
| Versioning or deprecation policy | [Lifecycle and Compatibility](./04-lifecycle-and-compatibility.md) |
| Local setup, test, or contribution flow | this document |

A breaking contract change additionally requires a deprecation entry per
the [lifecycle policy](./04-lifecycle-and-compatibility.md).

## Quality Bar for Docs

Every core doc:

- Names the concrete modules and files involved.
- Avoids generic prose where a fact about this codebase exists.
- Links sideways to the other core docs rather than duplicating content.
- Is kept short; deeper detail belongs in code or in the linked source.

## Related

- [Overview](./00-overview.md)
- [Architecture](./01-architecture.md)
- [Data Model](./02-data-model.md)
- [API Contract](./03-api-contract.md)
- [Lifecycle and Compatibility](./04-lifecycle-and-compatibility.md)
- [Operations](./05-operations.md)

## Last Reviewed

2026-05-06
