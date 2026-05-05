# Reference: Repository Map

Last updated: May 2026

## Purpose

High-level map from top-level source directories to their architectural role.

## Boundary Conventions

- Feature modules should keep domain logic, application orchestration, and infrastructure adapters aligned.
- Shared modules should expose stable contracts to reduce cross-feature coupling.
- Routing and transport modules are platform boundaries, not feature logic containers.

## Map

- `src/about`: informational and editorial content UI
- `src/afo-register`: register search domain
- `src/akkadian`: linguistic/transcription domain helpers
- `src/auth`: authentication, session, and scopes
- `src/bibliography`: bibliography models/services/UI
- `src/chronology`: chronology/date domain and tools
- `src/common`: shared components/hooks/utilities
- `src/corpus`: text/chapter/line alignment and lemmatization flows
- `src/dictionary`: lexical entry search and display
- `src/dossiers`: dossier listing and suggestions
- `src/editor`: shared editing components/utilities
- `src/footer`: footer composition
- `src/fragmentarium`: fragment-centric core feature set
- `src/http`: transport and API error primitives
- `src/markup`: markup parsing/rendering integration
- `src/query`: shared query model/utilities
- `src/research-projects`: project metadata and views
- `src/router`: route graph and app navigation
- `src/signs`: cuneiform sign domain
- `src/test-support`: fixtures, drivers, fake APIs
- `src/transliteration`: transliteration domain and transformations

## Directory-Level Risk Notes

- `src/router`: route contract drift can break deep links and navigation.
- `src/http`: transport changes can affect all backend integrations.
- `src/auth`: token/scope regressions can break protected operations globally.
- `src/transliteration`, `src/corpus`, `src/fragmentarium`: shared model drift risk.

## Typical Change Mapping

| Change Type | Usually Touched Areas |
| --- | --- |
| New endpoint integration | `src/<feature>/infrastructure`, `src/<feature>/domain`, `src/http` |
| New route/page | `src/router`, `src/<feature>/ui`, possibly `src/<feature>/application` |
| Shared component behavior | `src/common`, consuming feature UI modules |
| Auth behavior change | `src/auth`, affected mutation/read workflows |
