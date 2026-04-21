# Domain Guide: Corpus

This domain powers the text/chapter APIs and chapter-level operations such as line imports, line updates, alignment access, manuscripts, and chapter-level query surfaces.

## Route Surface

Routes are registered in `ebl/corpus/web/bootstrap.py`.

Primary endpoints:
- `/texts`
- `/textsearch`
- `/texts/{genre}/{category}/{index}`
- `/texts/{genre}/{category}/{index}/chapters/{stage}/{name}`
- `/texts/{genre}/{category}/{index}/chapters/{stage}/{name}/display`
- `/texts/{genre}/{category}/{index}/chapters/{stage}/{name}/alignment`
- `/texts/{genre}/{category}/{index}/chapters/{stage}/{name}/lemmatization`
- `/texts/{genre}/{category}/{index}/chapters/{stage}/{name}/manuscripts`
- `/texts/{genre}/{category}/{index}/chapters/{stage}/{name}/lines`
- `/texts/{genre}/{category}/{index}/chapters/{stage}/{name}/lines/{number}`
- `/texts/{genre}/{category}/{index}/chapters/{stage}/{name}/import`
- `/texts/{genre}/{category}/{index}/chapters/{stage}/{name}/colophons`
- `/texts/{genre}/{category}/{index}/chapters/{stage}/{name}/unplaced_lines`
- `/texts/{genre}/{category}/{index}/chapters/{stage}/{name}/extant_lines`
- `/texts/{genre}/{category}/{index}/chapters/{stage}/{name}/signs`
- `/corpus/all-signs`
- `/lemmasearch`
- `/corpus/query`
- `/corpus/texts/all`
- `/corpus/chapters/all`

HTTP methods are implemented through Falcon resource handlers (`on_get`, `on_post`) in `ebl/corpus/web/` resources.

## Core Service and Dependencies

Primary service object:
- `Corpus` in `ebl/corpus/application/corpus.py`

Key dependencies:
- `MongoTextRepository` for read/write persistence
- Bibliography facade from context
- `Changelog` for update tracking
- `SignRepository` for transliteration/sign parsing support
- `ParallelLineInjector` for parallel line enrichment

## Request and Response Shape

Primary schema layers:
- Application schemas: `ebl/corpus/application/schemas.py`, `display_schemas.py`, `id_schemas.py`, `record_schemas.py`, `lemmatization_schema.py`
- Web/API schemas: `ebl/corpus/web/chapter_schemas.py`, `text_schema.py`, `display_schemas.py`, `alignment_schema.py`, `chapter_info_schema.py`

Typical response flow:
1. Resource loads and validates incoming media.
2. Resource constructs IDs from route params (`create_chapter_id` and text IDs).
3. Service executes repository operation.
4. Result is serialized through API schema classes.

## Write Paths and Cache Invalidation

Line and chapter mutations invalidate chapter-specific cache entries via `ChapterCache` before persisting updates.

Mutating operations include:
- line edits/imports
- chapter-level update routes

## Query Model

Corpus query behavior combines:
- lemma filters
- transliteration filters
- chapter/text scoping

Transliteration query parsing is delegated to transliteration query factories and common query parsers (`ebl/common/query/parameter_parser.py`, transliteration query factory modules).

## Persistence and Indexing

Mongo text persistence and index creation are managed in:
- `ebl/corpus/infrastructure/mongo_text_repository.py`
- related modify/query helpers under `ebl/corpus/infrastructure/`

The repository encapsulates chapter/text collection access and query aggregation behavior.

## Suggested Deep Links

- `docs/reference/packages/corpus.md`
- `docs/reference/files/ebl__corpus__web__bootstrap.py.md`
- `docs/reference/files/ebl__corpus__application__corpus.py.md`
- `docs/reference/files/ebl__corpus__infrastructure__mongo_text_repository.py.md`
