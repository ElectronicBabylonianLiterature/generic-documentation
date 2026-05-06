# Backend Architecture

## Purpose

Describe backend system boundaries, core modules, and request/data flow.

## Perspective

Architecture documentation should answer why modules exist and how they collaborate, not mirror source file listings.

## System Context

- Falcon-based HTTP API
- MongoDB persistence and GridFS storage
- Auth0-backed authentication and scope enforcement
- Sentry error reporting and reliability instrumentation

## Layer Model

1. Web layer: route handling, request parsing, response formatting.
2. Application layer: use-case orchestration and contract enforcement.
3. Domain layer: business logic and invariants.
4. Infrastructure layer: persistence adapters and integrations.

## Request Lifecycle

1. Request enters route.
2. Authentication and authorization resolved.
3. Input validated and normalized.
4. Use case executed via application service.
5. Persistence/integration operations performed.
6. Response serialized and returned.
7. Exceptions mapped to API status behavior.

## Related

- [API Contract](./02-api-contract.md)
- [Operations](./04-operations.md)

## Last Reviewed

2026-05-06
