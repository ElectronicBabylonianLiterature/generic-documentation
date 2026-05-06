# API Contract

## Purpose

Define stable API behavior conventions and client expectations.

## Perspective

The contract doc defines guarantees and patterns. Endpoint-by-endpoint detail belongs in implementation references or generated registries.

## Contract Rules

- Consistent naming, payload shape, and error envelope conventions.
- Predictable status code semantics.
- Explicit auth scope requirements.
- Backward-compatible additions by default.

## Required Updates for Contract Changes

When routes, schemas, auth scopes, or status mappings change, update this document and the [lifecycle policy](./03-lifecycle-and-compatibility.md) in the same change set.

## References

Legacy registries and matrices are preserved in [archive/legacy/standards/](./archive/legacy/standards/).

## Last Reviewed

2026-05-06
