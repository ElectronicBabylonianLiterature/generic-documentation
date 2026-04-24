# EBL API Backend Documentation

This folder contains architecture, API contract, security, operations, and engineering guidance for the EBL backend API.

## Documentation Principles

- Overview first: prioritize domain, architecture, and behavior over source-file inventory.
- Endpoint complete: all API routes are documented in standards artifacts.
- Maintainable: avoid one-doc-per-file patterns that become stale quickly.
- Code is authoritative for implementation details; docs explain intent, contracts, and operations.

## Start Here

- [Architecture Overview](architecture/overview.md)
- [Backend Service Map](guides/backend-service-map.md)
- [Dependency and Data Flow](guides/dependency-and-data-flow.md)

## API and Contracts

- [Standards Index](standards/README.md)
- [API Endpoint Catalog](standards/api-endpoint-catalog.md)
- [Endpoint Contract Register](standards/endpoint-contract-register.md)
- [Authorization Matrix](standards/authorization-matrix.md)
- [Error and Status Mapping](standards/error-status-matrix.md)
- [Request and Response Contracts](guides/request-response-contracts.md)

## Domain Guides

- [Corpus Domain Guide](guides/domain-corpus.md)
- [Fragmentarium Domain Guide](guides/domain-fragmentarium.md)
- [Lexical and Transliteration Guide](guides/domain-lexical-services.md)
- [Reference Services Guide](guides/domain-reference-services.md)
- [Support Services Guide](guides/domain-support-services.md)

## Security, Operations, and Reliability

- [Security Model](security/security-model.md)
- [Data Classification and Retention](security/data-classification-and-retention.md)
- [Deployment](operations/deployment.md)
- [SLO, SLI, and Alerting](operations/slo-sli-and-alerting.md)
- [Incident Response](runbooks/incident-response.md)
- [Backup and Restore](runbooks/backup-and-restore.md)

## Engineering Workflow and Governance

- [Contribution and Review Guide](developer/contribution-and-review.md)
- [Troubleshooting Matrix](developer/troubleshooting-matrix.md)
- [Testing Guide](testing/test-suite.md)
- [API Versioning and Deprecation Policy](policies/api-versioning-and-deprecation.md)
- [Docs Drift Governance](standards/docs-drift-governance.md)
- [Documentation Quality Checklist](standards/documentation-quality-checklist.md)
- [Documentation Status](standards/documentation-status.md)

## Architecture Decisions

- [ADR-0001 Auth and Scope Model](adr/ADR-0001-auth-and-scope-model.md)
- [ADR-0002 Falcon and Mongo Architecture](adr/ADR-0002-falcon-mongo-service-architecture.md)

## Reference Position

Per-file generated pages are intentionally excluded from this documentation set.
When implementation-level detail is required, navigate directly in source under `ebl/` and `ebl/tests/`.
