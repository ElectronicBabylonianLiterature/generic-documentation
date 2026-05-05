# Runbook: Backup and Restore

Last updated: May 2026

This runbook standardizes data backup and restoration for MongoDB-backed API environments.

## Scope

Includes:

- Domain collections used by corpus, fragmentarium, dictionary, bibliography, dossiers, and related modules.
- GridFS buckets where applicable (`photos`, `folios`, public files).

Excludes by default in local migration script context:

- `changelog` collection (based on existing `pull-db.sh` behavior).

## Backup Strategy

1. Logical backups

- Use `mongodump` with authenticated connection.
- Capture all required collections and GridFS buckets.

1. Frequency

- Production: daily full backup + periodic snapshots before major migrations.
- Staging: at least weekly, and before schema/index migrations.

1. Retention

- Keep short-term rolling backups and periodic long-term snapshots.

## Restore Strategy

1. Restore target selection

- Always restore to isolated environment first for validation.

1. Validation sequence

- Confirm document counts for key collections.
- Validate index presence on high-query collections.
- Run smoke API checks (`/fragments`, `/texts`, `/signs`, `/bibliography`).

1. Cutover

- Perform restore in maintenance window for production.
- Communicate expected read/write impact.

## Integrity Checks

- Verify references linking (for example fragment references, chapter text links).
- Validate media retrieval endpoints if GridFS data is included.
- Verify scope-gated endpoints for representative users.

## Related Repository Assets

- `pull-db.sh`
- `README.md` database section
- repository tests for repository-level behavior under `ebl/tests/`
