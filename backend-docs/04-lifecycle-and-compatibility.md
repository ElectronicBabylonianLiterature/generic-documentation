# Lifecycle and Compatibility

Created: 2026-05-06

## Purpose

Define how the eBL API evolves: versioning posture, what counts as
backward compatible vs. breaking, how deprecations are announced, and which
docs must move together with the code.

## Current Versioning Posture

The API is served as a single active surface. There is **no URI version
prefix** today (no `/v1/...`). The route catalog described in
[API Contract](./03-api-contract.md) is the live contract.

If a future change cannot be made backward compatible within this surface,
introducing a versioned namespace (or a parallel resource path) becomes part
of that change's plan.

## Backward-Compatible Changes

Allowed without ceremony, provided existing client behavior is preserved:

- Adding a new endpoint or route family.
- Adding optional request fields with sensible defaults.
- Adding fields to a response payload.
- Adding a new permitted value to an enum-like field, where clients that
  do not understand it can safely ignore it.
- Loosening validation in a way that only widens accepted input.
- Performance, persistence, or internal refactors that do not change
  observable contract behavior.

Examples in this codebase:

- A new `GET /fragments/{number}/<feature>` endpoint with no scope guard
  on a public dimension.
- An additional optional filter parameter on `/fragments/query` or
  `/corpus/query`.
- A new field in the dump output of a Marshmallow schema in
  `ebl/<domain>/application/*schema*.py`.

## Breaking Changes

The following count as breaking and require the deprecation lifecycle below:

- Removing or renaming an endpoint, route parameter, or query parameter.
- Removing or renaming a response field, or changing its type or semantics.
- Tightening validation so previously accepted requests are rejected.
- Changing or adding a required scope on an existing route
  (see [authorization coverage](./03-api-contract.md#authorization-coverage)).
- Changing the HTTP status produced by an exception
  (see [error mapping](./03-api-contract.md#error-mapping)).
- Migrating data in a way that changes how existing identifiers resolve.

## Deprecation Lifecycle

1. **Announce** — document the affected endpoint or field, the rationale,
   and the replacement path. Update the relevant section of
   [API Contract](./03-api-contract.md).
2. **Deprecate** — keep the old behavior working alongside the replacement
   for a defined compatibility window. Note the sunset date in release
   notes / changelog.
3. **Remove** — execute removal only after the announced sunset date and
   only when downstream consumers have been notified.

Removals must follow the announce → deprecate → remove order; do not skip
steps.

## How Deprecations Are Communicated

- **Repository changelog and GitHub releases** for `ebl-api` are the
  primary channel for announcement and sunset dates.
- **PR description** for the breaking change must list the deprecation
  entry, the replacement, and the planned sunset.
- The matching update to this directory's docs ships in the same PR.

## Governance Triggers

Before merging a contract-impacting change, confirm:

- [API Contract](./03-api-contract.md) reflects the new route, scope, or
  error mapping.
- [Architecture](./01-architecture.md) reflects any wiring or middleware
  change.
- [Data Model](./02-data-model.md) reflects any change to collections,
  indexes, GridFS buckets, or the `changelog`.
- [Operations](./05-operations.md) reflects any deployment, SLO, or
  troubleshooting impact.
- [Contributing](./06-contributing.md) reflects any new local-development
  obligation.
- A deprecation entry exists for breaking changes.

## Related

- [Overview](./00-overview.md)
- [API Contract](./03-api-contract.md)
- [Contributing](./06-contributing.md)

## Last Reviewed

2026-05-06
