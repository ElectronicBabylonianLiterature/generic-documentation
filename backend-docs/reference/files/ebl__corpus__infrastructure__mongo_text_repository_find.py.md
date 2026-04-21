# File Reference: ebl/corpus/infrastructure/mongo_text_repository_find.py

- Lines: 88
- Characters: 3151

## Top-Level Symbols

- Classes: MongoTextRepositoryFind
- Functions: None
- Constants: None

## Methods by Class

- MongoTextRepositoryFind: find, find_chapter, find_chapter_for_display, find_line

## Imports

- ebl.bibliography.infrastructure.bibliography.join_reference_documents
- ebl.corpus.application.display_schemas.ChapterDisplaySchema
- ebl.corpus.application.schemas.ChapterSchema
- ebl.corpus.application.schemas.LineSchema
- ebl.corpus.application.schemas.TextSchema
- ebl.corpus.domain.chapter.Chapter
- ebl.corpus.domain.chapter.ChapterId
- ebl.corpus.domain.chapter_display.ChapterDisplay
- ebl.corpus.domain.line.Line
- ebl.corpus.domain.text.Text
- ebl.corpus.domain.text.TextId
- ebl.corpus.infrastructure.mongo_text_repository_base.MongoTextRepositoryBase
- ebl.corpus.infrastructure.mongo_text_repository_base.chapter_not_found
- ebl.corpus.infrastructure.mongo_text_repository_base.line_not_found
- ebl.corpus.infrastructure.mongo_text_repository_base.text_not_found
- ebl.corpus.infrastructure.queries.aggregate_chapter_display
- ebl.corpus.infrastructure.queries.chapter_id_query
- ebl.corpus.infrastructure.queries.join_chapters
- ebl.errors.NotFoundError

