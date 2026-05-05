# Architecture Overview

The EBL API is a Falcon-based backend organized around domain modules, repository-driven persistence, and explicit contract boundaries between web resources, application services, and domain models.

## System Context

Primary components:

- Falcon HTTP API application.
- MongoDB persistence for domain records.
- GridFS-backed media/file storage.
- Auth0-backed authentication with guest fallback.
- Sentry error reporting.
- EBL AI integration for annotation workflows.

## Layered Architecture

1. Web Layer (`ebl/*/web`)

- Route registration and request handling.
- Route/query/body parsing and response serialization.
- Scope/guard enforcement at endpoint level.

1. Application Layer (`ebl/*/application`)

- Orchestration of use cases.
- Schema-driven input/output contract handling.
- Composition of domain and repository operations.

1. Domain Layer (`ebl/*/domain`)

- Core entities, value objects, and invariants.
- Domain-specific logic isolated from transport/storage concerns.

1. Infrastructure Layer (`ebl/*/infrastructure`)

- Mongo and GridFS adapters.
- Query/pipeline construction and indexing behavior.

## Composition and Startup

Application composition starts in `ebl/app.py`:

- Build infrastructure dependencies and repositories.
- Assemble `Context` with service dependencies.
- Create Falcon app with auth and cache middleware.
- Register domain route sets through domain bootstrap modules.

## Request Lifecycle

1. Request enters Falcon route.
2. Authentication middleware resolves user/scopes.
3. Resource validates and normalizes input.
4. Application service executes use case.
5. Repository reads/writes persistence.
6. Response schema serializes output.
7. Error handlers map exceptions to API statuses.

## Domain Capability Map

- Corpus: text/chapter retrieval, search, and chapter-level mutation flows.
- Fragmentarium: fragment search, metadata updates, media and annotation workflows.
- Lexical services: dictionary, signs, lemmatization, transliteration support.
- Reference services: bibliography, AfO register, dossiers, provenance.
- Support services: files/media, cache, auth/users, markup, error handling, changelog.

## Contract and Governance Anchors

- Endpoint inventory: [API Endpoint Catalog](../standards/api-endpoint-catalog.md)
- Auth coverage: [Authorization Matrix](../standards/authorization-matrix.md)
- Error behavior: [Error and Status Mapping](../standards/error-status-matrix.md)
- Contract standards: [Endpoint Contract Register](../standards/endpoint-contract-register.md)

## Operational Baseline

- Deployment and runtime operations: [Operations](../operations/deployment.md)
- Reliability baseline: [SLO, SLI, and Alerting](../operations/slo-sli-and-alerting.md)
- Incident handling: [Runbooks](../runbooks/incident-response.md)
