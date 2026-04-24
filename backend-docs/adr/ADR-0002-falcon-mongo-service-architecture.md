# ADR-0002: Falcon + MongoDB Service Architecture

- Status: Accepted
- Date: 2026-04-02

## Context

The backend requires explicit route control, domain-oriented service modules, and direct access to MongoDB querying/indexing for complex text and fragment workflows.

## Decision

Adopt:
- Falcon for lightweight HTTP resource handling.
- Repository pattern over MongoDB collections and aggregation pipelines.
- Context-based composition root for dependency wiring.
- Marshmallow schemas for contract validation and serialization.

## Consequences

Positive:
- Clear control over routing and middleware.
- Strong fit for query-heavy domain logic with Mongo indexes.
- Modularity across domain packages.

Trade-offs:
- Contract and behavior discovery spans multiple layers.
- Requires robust standards and domain documentation for maintainability.

## Implementation References

- `ebl/app.py`
- `ebl/context.py`
- `ebl/*/infrastructure/*.py`
- `backend-docs/guides/dependency-and-data-flow.md`
