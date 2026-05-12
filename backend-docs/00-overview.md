# Overview

Created: 2026-05-06

## Purpose

The eBL backend (`ebl-api`) is the HTTP API behind the
[Electronic Babylonian Literature](https://www.ebl.lmu.de/) platform. It serves
the corpus of cuneiform texts, the Fragmentarium (AKA Library; digital library of tablet
fragments), and the lexical/reference data the project curates.

This documentation is the contributor-facing entry point for the API: what it
is, how it is wired together, what its public contract looks like, how it is
operated, and how to change it safely.

## Source of Truth

- Code: <https://github.com/ElectronicBabylonianLiterature/ebl-api/>
- Public API: served by the Falcon application bootstrapped in `ebl/app.py`.
- This documentation describes that codebase. When the docs and the code
  disagree, the code wins and the docs are updated (see
  [Contributing](./06-contributing.md)).

## Stack at a Glance

- **Language / runtime:** Python (Poetry-managed; see `pyproject.toml`).
- **Web framework:** [Falcon](https://falcon.readthedocs.io/) — lightweight,
  resource-class based, explicit route registration.
- **Persistence:** MongoDB (domain collections) plus GridFS buckets for
  binary media (`photos`, `folios`, public files).
- **Authentication:** Auth0 (RS256 JWT) with a guest fallback backend.
- **Schema/validation:** Marshmallow schemas at the application/web boundary.
- **Observability:** Sentry for error reporting.
- **External services:** an EBL AI service used by annotation workflows.

## Domain Surface

The API is organized into domain modules under `ebl/<domain>/`. Each domain
owns its own `web/`, `application/`, `domain/`, and `infrastructure/` layers,
and registers its routes via a `web/bootstrap.py` module.

| Group | Domains | Representative routes |
|---|---|---|
| Corpus | `ebl/corpus` | `/texts`, `/textsearch`, `/corpus/query`, `/lemmasearch` |
| Fragmentarium (Library) | `ebl/fragmentarium`, `ebl/files` | `/fragments`, `/fragments/{number}/...`, `/folios`, `/images`, `/statistics` |
| Lexical | `ebl/dictionary`, `ebl/signs`, `ebl/lemmatization` | `/words`, `/signs`, `/lemmas` |
| Reference | `ebl/bibliography`, `ebl/afo_register`, `ebl/dossiers`, `ebl/provenance` | `/bibliography`, `/afo-register`, `/dossiers`, `/provenances` |
| Support | `ebl/markup`, `ebl/cache`, `ebl/users`, `ebl/changelog`, `ebl/error_handler` | `/markup`, `/cached-markup`, cross-cutting |

The full route inventory and its scope coverage are described in
[API Contract](./03-api-contract.md).

## How to Use This Doc Set

Read the core documents in order on first contact; they are intentionally
short and link to specific source files.

1. [Architecture](./01-architecture.md) — components, layering, composition
   root, request lifecycle.
2. [Data Model](./02-data-model.md) — collections, GridFS buckets,
   cross-domain references, changelog.
3. [API Contract](./03-api-contract.md) — route prefixes, scopes, error
   envelope, pagination conventions.
4. [Lifecycle and Compatibility](./04-lifecycle-and-compatibility.md) —
   versioning policy and how breaking changes are managed.
5. [Operations](./05-operations.md) — build artifacts, CI, SLOs, incident
   response, backup/restore, troubleshooting.
6. [Contributing](./06-contributing.md) — local setup, tests, PR
   expectations, doc-update obligations.

## Last Reviewed

2026-05-06
