# File Reference: ebl/fragmentarium/infrastructure/mongo_fragment_repository_get.py

- Lines: 380
- Characters: 12770

## Top-Level Symbols

- Classes: MongoFragmentRepositoryGetBase, MongoFragmentRepositoryGet
- Functions: load_museum_number, load_query_result, chapter_lemma_pipeline, fragment_lemma_pipeline, aggregate_counts
- Constants: RETRIEVE_ALL_LIMIT

## Methods by Class

- MongoFragmentRepositoryGetBase: __init__, _omit_text_lines, _filter_fragment_lines, query_by_museum_number, query_museum_numbers, query_by_sort_key, query_next_and_previous_fragment, query, query_latest, query_by_traditional_references, list_all_fragments, retrieve_transliterated_fragments, collect_lemmas
- MongoFragmentRepositoryGet: __init__

## Imports

- ebl.bibliography.infrastructure.bibliography.join_reference_documents
- ebl.common.domain.scopes.Scope
- ebl.common.query.query_result.AfORegisterToFragmentQueryResult
- ebl.common.query.query_result.QueryResult
- ebl.common.query.query_schemas.AfORegisterToFragmentQueryResultSchema
- ebl.common.query.query_schemas.QueryResultSchema
- ebl.errors.NotFoundError
- ebl.fragmentarium.application.fragment_schema.FragmentSchema
- ebl.fragmentarium.domain.archaeology.ExcavationNumber
- ebl.fragmentarium.domain.fragment_pager_info.FragmentPagerInfo
- ebl.fragmentarium.infrastructure.fragment_pattern_matcher.PatternMatcher
- ebl.fragmentarium.infrastructure.mongo_fragment_repository_base.MongoFragmentRepositoryBase
- ebl.fragmentarium.infrastructure.mongo_fragment_repository_get_extended.MongoFragmentRepositoryGetExtended
- ebl.fragmentarium.infrastructure.queries.HAS_TRANSLITERATION
- ebl.fragmentarium.infrastructure.queries.aggregate_by_traditional_references
- ebl.fragmentarium.infrastructure.queries.aggregate_latest
- ebl.fragmentarium.infrastructure.queries.join_findspots
- ebl.fragmentarium.infrastructure.queries.join_joins
- ebl.fragmentarium.infrastructure.queries.match_user_scopes
- ebl.transliteration.application.museum_number_schema.MuseumNumberSchema
- ebl.transliteration.domain.museum_number.MuseumNumber
- ebl.transliteration.infrastructure.queries.query_number_is
- marshmallow.EXCLUDE
- pymongo.collation.Collation
- typing.Iterator
- typing.List
- typing.Optional
- typing.Sequence
- typing.Union

