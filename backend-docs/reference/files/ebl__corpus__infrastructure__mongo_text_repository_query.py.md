# File Reference: ebl/corpus/infrastructure/mongo_text_repository_query.py

- Lines: 215
- Characters: 7830

## Top-Level Symbols

- Classes: MongoTextRepositoryQuery
- Functions: None
- Constants: None

## Methods by Class

- MongoTextRepositoryQuery: _transliteration_mongo_query, query_by_transliteration, _limit_by_genre, query_by_lemma, query, query_manuscripts_by_chapter, query_manuscripts_with_joins_by_chapter

## Imports

- ebl.common.query.query_result.CorpusQueryResult
- ebl.common.query.query_schemas.CorpusQueryResultSchema
- ebl.corpus.application.schemas.ChapterSchema
- ebl.corpus.application.schemas.DictionaryLineSchema
- ebl.corpus.application.schemas.ManuscriptSchema
- ebl.corpus.domain.chapter.Chapter
- ebl.corpus.domain.chapter.ChapterId
- ebl.corpus.domain.dictionary_line.DictionaryLine
- ebl.corpus.domain.manuscript.Manuscript
- ebl.corpus.infrastructure.chapter_query_filters.filter_query_by_transliteration
- ebl.corpus.infrastructure.corpus_search_aggregations.CorpusPatternMatcher
- ebl.corpus.infrastructure.manuscript_lemma_filter.filter_manuscripts_by_lemma
- ebl.corpus.infrastructure.mongo_text_repository_base.chapter_not_found
- ebl.corpus.infrastructure.mongo_text_repository_query_fragment.MongoTextRepositoryQueryFragment
- ebl.corpus.infrastructure.queries.chapter_id_query
- ebl.corpus.infrastructure.queries.join_text_title
- ebl.errors.NotFoundError
- ebl.fragmentarium.infrastructure.queries.is_in_fragmentarium
- ebl.fragmentarium.infrastructure.queries.join_joins
- ebl.transliteration.domain.genre.Genre
- ebl.transliteration.domain.transliteration_query.TransliterationQuery
- pymongo.collation.Collation
- typing.Dict
- typing.List
- typing.Optional
- typing.Sequence
- typing.Tuple

