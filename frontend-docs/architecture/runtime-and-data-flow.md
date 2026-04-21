# Runtime and Data Flow

## App Boot Sequence
1. Browser loads bundle and calls [src/index.tsx](src/index.tsx).
2. Auth, session, routing, and service providers are initialized.
3. [src/App.tsx](src/App.tsx) mounts global shell and route graph.
4. Feature routes render UI pages and invoke services.

## Request Lifecycle Sequence

```mermaid
sequenceDiagram
  participant U as User
  participant UI as Feature UI
  participant S as Service
  participant R as Repository
  participant C as ApiClient
  participant A as Auth Provider
  participant B as Backend API

  U->>UI: Trigger action/search/edit
  UI->>S: invoke use-case
  S->>R: request domain data
  R->>C: fetchJson/postJson/putJson/fetchBlob
  C->>A: access token (if required)
  C->>B: HTTP request
  B-->>C: response payload/error
  C-->>R: typed data or ApiError
  R-->>S: mapped domain model
  S-->>UI: view model/result
  UI-->>U: render data or error state
```

## Error and Recovery Flow

```mermaid
flowchart LR
  E[Transport/Mapping Error] --> N[ApiClient Normalization]
  N --> H[Feature Error Handling]
  H --> B[ErrorBoundary Fallback]
  H --> A[Inline Error Alert]
  B --> R[Report/Observe]
```

## Failure-Mode Notes
- Token acquisition failures: authenticated routes/actions can fail even if route shell loads.
- Backend shape mismatch: repository/domain mapping can throw during transformation.
- Partial data rendering: components should tolerate optional fields without hard crash.

## Traceability
- ApiClient behavior: [src/http/ApiClient.ts](src/http/ApiClient.ts)
- ApiClient tests: [src/http/ApiClient.test.ts](src/http/ApiClient.test.ts)
- Security tests: [src/__tests__/security-api.test.tsx](src/__tests__/security-api.test.tsx)
- Router composition: [src/router/router.tsx](src/router/router.tsx)
