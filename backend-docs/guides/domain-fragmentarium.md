# Domain Guide: Fragmentarium

Fragmentarium is the largest API surface in the backend and provides fragment search, retrieval, filtering, metadata updates, annotation workflows, media access, and cross-links to corpus context.

## Route Surface

Routes are assembled in `ebl/fragmentarium/web/bootstrap.py`.

Main endpoint families:
- Fragment retrieval and search:
  - `/fragments`
  - `/fragments/{number}`
  - `/fragments/query`
  - `/fragments/retrieve-all`
  - `/fragments/latest`
  - `/fragments/all`
- Matching and text-related workflows:
  - `/fragments/{number}/match`
  - `/fragments/{number}/edition`
  - `/fragments/{number}/lemmatization`
  - `/fragments/{number}/lemma-annotation`
  - `/fragments/{number}/collect-lemmas`
  - `/fragments/{number}/corpus`
- Metadata update surfaces:
  - `/fragments/{number}/genres`
  - `/fragments/{number}/script`
  - `/fragments/{number}/date`
  - `/fragments/{number}/dates-in-text`
  - `/fragments/{number}/references`
  - `/fragments/{number}/archaeology`
  - `/fragments/{number}/colophon`
  - `/fragments/{number}/named-entities`
  - `/fragments/{number}/scopes`
- Annotations and media:
  - `/fragments/{number}/annotations`
  - `/fragments/{number}/photo`
  - `/fragments/{number}/thumbnail/{resolution}`
  - `/fragments/{number}/pager`
  - `/fragments/{number}/pager/{folio_name}/{folio_number}`
  - `/folios/{name}/{number}`
- Taxonomy/reference lookup endpoints:
  - `/genres`
  - `/periods`
  - `/statistics`
  - `/findspots`
  - `/fragments/all-signs`
  - `/fragments/all-ocred-signs`
  - `/fragments/colophon-names`
  - `/fragments/query-by-traditional-references`

## Core Services and Responsibilities

Service composition in bootstrap includes:
- `Fragmentarium`: repository-centric core operations.
- `FragmentFinder`: enriched retrieval, listing, and presentation helper paths.
- `FragmentUpdater`: controlled update operations with changelog integration.
- `FragmentMatcher`: matching/query-specific operations.
- `AnnotationsService`: annotation workflows integrating AI and image repositories.

## Dependency Flow

Primary dependencies:
- `MongoFragmentRepository` and adjunct repositories (`annotations`, `findspots`, cropped sign images).
- Bibliography and dictionary services for reference and lexical enrichment.
- `ParallelLineInjector` for transliteration/corpus joins where needed.
- Media repositories for photo/folio/thumbnail delivery.
- Cache for high-frequency list/statistics retrieval paths.

## Request/Response Contracts

Fragmentarium schema surface spans many dedicated files in `ebl/fragmentarium/application/`:
- `fragment_schema.py`
- `fragment_info_schema.py`
- `fragment_fields_schemas.py`
- `date_schemas.py`
- `genre_schema.py`
- `archaeology_schemas.py`
- `annotations_schema.py`
- and additional focused schema modules.

API DTO shaping is managed in `ebl/fragmentarium/web/dtos.py` and endpoint-specific web resources.

## Persistence and Query Behavior

Persistence adapter:
- `ebl/fragmentarium/infrastructure/mongo_fragment_repository.py`

The repository is responsible for:
- index creation for high-cardinality query dimensions
- query pipelines for search/filter flows
- projection/update-by-field operations
- compatibility handling for legacy fields where needed

## Suggested Deep Links

- `backend-docs/guides/backend-service-map.md`
- `backend-docs/guides/request-response-contracts.md`
- `backend-docs/standards/api-endpoint-catalog.md`
- `backend-docs/standards/authorization-matrix.md`
