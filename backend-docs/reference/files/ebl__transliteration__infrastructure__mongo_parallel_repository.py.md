# File Reference: ebl/transliteration/infrastructure/mongo_parallel_repository.py

- Lines: 66
- Characters: 2470

## Top-Level Symbols

- Classes: MongoParallelRepository
- Functions: None
- Constants: None

## Methods by Class

- MongoParallelRepository: __init__, fragment_exists, find_implicit_chapter, chapter_exists

## Imports

- ebl.errors.NotFoundError
- ebl.mongo_collection.MongoCollection
- ebl.transliteration.application.parallel_line_injector.ParallelRepository
- ebl.transliteration.application.parallel_line_schemas.ChapterNameSchema
- ebl.transliteration.domain.museum_number.MuseumNumber
- ebl.transliteration.domain.parallel_line.ChapterName
- ebl.transliteration.domain.text_id.TextId
- ebl.transliteration.infrastructure.collections.CHAPTERS_COLLECTION
- ebl.transliteration.infrastructure.collections.FRAGMENTS_COLLECTION
- ebl.transliteration.infrastructure.queries.query_number_is
- pymongo.database.Database

