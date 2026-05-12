# Contributing

Created: 2026-05-06

## Purpose

How to make a change to `ebl-api` safely: local setup, test commands, PR
expectations, and the doc-update obligations that keep this documentation
in sync with the code.

## Local Setup

### Prerequisites

Cloud / dev-container path (recommended): GitHub Codespaces or VS Code with
the Dev Containers extension. The dev container installs MongoDB 4.4,
Poetry, Python packages, Task, and the Rust compiler automatically.

Manual setup:

- [PyPy 3.11](https://www.pypy.org/) and `pip`.
- [Task](https://taskfile.dev/).
- MongoDB 4.4.4.
- [`ggshield`](https://docs.gitguardian.com/ggshield-docs/getting-started)
  for secret scanning.
- [Rust compiler](https://www.rust-lang.org/tools/install) (required to
  build `libcst`).

```bash
pip install poetry
poetry install --no-root --with dev
```

### First Run

The repository is Poetry-managed and ships with a `Taskfile.dist.yml` that
defines the canonical commands. A typical first run:

1. Copy `.env.example` to `.env` and populate the required values (Auth0,
   MongoDB, Sentry, EBL AI, cache — see
   [Operations](./05-operations.md#environments-and-configuration)).
2. Install dependencies (Poetry; configuration in `pyproject.toml` /
   `poetry.toml`).
3. Bring up the stack with one of the compose targets:
   - `docker-compose.yml` — full local stack.
   - `docker-compose-api-only.yml` — API only, against an external DB.
   - `docker-compose-updater.yml` — data updater workload.
4. Use `task start` (or `poetry run waitress-serve --port=8000 --call
   ebl.app:get_app`) to run the API.

Poetry does not read `.env` files. Export the required variables in the
shell, run via `task` (which loads them), or use a helper such as
[`direnv`](https://direnv.net/) or
[`Set-PsEnv`](https://github.com/rajivharris/Set-PsEnv).

## Standard Commands

All flows go through `task` so that CI and local runs match:

| Command | Purpose |
|---|---|
| `task format` | Apply formatters. |
| `task format -- --check` | Check formatting without writing. |
| `task lint` | Lint Python sources. |
| `task type` | Run static type checks. |
| `task test` | Run the test suite. |
| `task test -- -n auto` | Run tests in parallel via `pytest-xdist`. |
| `task test -- --cov=ebl --cov-report term --cov-report xml` | Coverage run (slow on PyPy). |
| `task test-all` | Run format, lint, type checks, and tests. |
| `task test-secrets` | Synthetic secret-scanning regression checks. |
| `task start` | Start the API locally. |
| `task cp --- "commit-message"` | Run format/lint/type checks, then `git add`, commit, push. |

Run `task test-all` before opening a PR. CI
(`.github/workflows/main.yml`, `.github/workflows/codeql.yml`,
`.github/workflows/secret-scan.yml`) must be green for merge.

To avoid race conditions when running tests in parallel, first prime the
downloader cache:

```bash
poetry run python -m ebl.tests.downloader
```

Test results may differ between PyPy and CPython (CPython is used by some
automatic checks). If a test fails only under CPython, debug with the same
CPython version.

### `pymongo_inmemory` Configuration

The tests use
[`pymongo_inmemory`](https://github.com/kaizendorks/pymongo_inmemory).
Depending on the OS, the correct MongoDB build may need to be pinned, for
example on Ubuntu 20:

```dotenv
PYMONGOIM__MONGO_VERSION=4.4
PYMONGOIM__OPERATING_SYSTEM=ubuntu
PYMONGOIM__OS_VERSION=20
```

## Code Style

- [Black](https://black.readthedocs.io/) with line length 88.
- [PEP 8](https://www.python.org/dev/peps/pep-0008/#naming-conventions)
  naming.
- `bugbear` `B950` is used instead of `E501`; PEP 8 checks `E501`, `E203`,
  and `E231` are disabled in editors.
- Use type hints in new code; add them to old code when modifying it.

## Package Dependency Rules

- Avoid directed dependency cycles between packages.
- Domain packages depend only on other domain packages.
- Application packages depend only on application and domain packages.
- Web and infrastructure packages depend only on application and domain
  packages.
- All packages may depend on common modules at the top of `ebl/`.

Analyze the dependency graph with
[`pydepgraph`](https://github.com/stefano-maggiolo/pydepgraph):

```bash
pydepgraph -p . -e tests -g 2 | dot -Tpng -o graph.png
```

## Secret Scanning

The upstream repository blocks commits that introduce detected secrets.

- Local pre-commit scans run through GitGuardian `ggshield`.
- CI runs GitGuardian via `.github/workflows/secret-scan.yml`.
- Dev containers and Codespaces install `ggshield` automatically.

Set up local scanning:

```bash
poetry run pre-commit install
ggshield auth login
```

Or export `GITGUARDIAN_API_KEY` (token with at least `scan` scope from
<https://dashboard.gitguardian.com>) in the shell and CI secrets.

Manual commands:

```bash
ggshield secret scan pre-commit
ggshield secret scan path --recursive --use-gitignore .
task test-secrets
```

On a positive finding, replace the real secret immediately, do not commit
it, and prefer dynamically generated values in test payloads.

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

2026-05-12
