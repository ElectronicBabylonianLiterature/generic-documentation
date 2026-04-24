# Data Classification and Retention

This document defines data classes and retention guidance for API domains.

## Data Classes

1. Public reference data
- Examples: signs metadata, bibliography entries, public lexical metadata.
- Sensitivity: low.

2. Restricted scholarly data
- Examples: fragment group scoped content, folio-scoped content.
- Sensitivity: medium/high based on scope policy.

3. Operational metadata
- Examples: changelog entries, audit-like update records, cache entries.
- Sensitivity: medium.

4. Authentication metadata
- Examples: token claims and profile fields fetched from Auth0.
- Sensitivity: high.

## Retention Baseline

1. Domain primary records (corpus, fragmentarium, bibliography, dictionary)
- Retention: long-term while academically relevant and policy-approved.

2. Changelog and operational history
- Retention: at least 12 months, extend where audit needs apply.

3. Cache data
- Retention: short-lived by cache timeout policy.

4. Authentication/session-derived data
- Retention: avoid persistent storage unless strictly needed; follow least-retention principle.

## Handling Requirements

1. Access control
- Enforce scope-based access for restricted content.

2. Logging
- Do not log sensitive token material or secrets.

3. Backups
- Include required domain collections and media buckets; validate restore integrity.

4. Deletion and correction
- Support data correction via domain update paths and track changes in changelog.

## Security Review Cadence

- Quarterly review of classification mappings.
- Review after any major schema or access-control change.

## Related Docs

- backend-docs/security/security-model.md
- backend-docs/runbooks/backup-and-restore.md
- backend-docs/standards/authorization-matrix.md
