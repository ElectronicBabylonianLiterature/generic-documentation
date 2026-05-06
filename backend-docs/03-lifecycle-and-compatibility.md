# Lifecycle and Compatibility

## Purpose

Canonical policy for API versioning, compatibility, and deprecation.

## Versioning Strategy

Current API is treated as a single active surface without URI version prefixes. Future breaking changes require explicit versioning and migration documentation.

## Backward-Compatible Changes

- Additive fields and endpoints are allowed.
- Existing response field semantics must not change silently.

## Breaking Changes

- Require explicit deprecation notice in docs and release notes.
- Require migration guidance and a published sunset date.
- Endpoint removals must follow announce -> deprecate -> remove.

## Deprecation Lifecycle

1. Announce: document affected endpoint/field, rationale, and replacement path.
2. Deprecate: mark in docs/changelog and maintain a compatibility window.
3. Remove: execute only after the agreed sunset period and communication.

## Governance Triggers

Before release with contract-impacting changes:

- Update API contract documentation.
- Update authorization references when scope guards change.
- Update error/status references when exception mapping changes.
- Update narrative domain docs when behavior changes.

## Consolidation Note

This document is the canonical source. The previous standalone policy is preserved at
[archive/legacy/api-versioning-and-deprecation.md](./archive/legacy/api-versioning-and-deprecation.md)
for historical traceability.

## Last Reviewed

2026-05-06
