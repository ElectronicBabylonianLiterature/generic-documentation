# File Reference: ebl/tests/fragmentarium/test_fragment_repository.py

- Lines: 1247
- Characters: 40112

## Top-Level Symbols

- Classes: None
- Functions: create_tranliteration_query_lines, test_create, test_create_many, test_create_join, test_query_by_museum_number, test_museum_number_wildcard, test_query_by_museum_number_joins, test_query_by_museum_number_references, test_query_by_parallel_line_exists, test_fragment_not_found, test_find_random, test_find_random_skips_restricted_fragments, test_folio_pager_exception, test_query_next_and_previous_fragment, test_update_transliteration_with_record, test_update_update_transliteration_not_found, test_update_genres, test_update_scopes, test_update_date, test_update_dates_in_text, test_update_lemmatization, test_update_introduction, test_update_notes, test_update_script, test_update_update_lemmatization_not_found, test_statistics, test_statistics_no_fragments, test_create_indexes_cover_fragment_search_filters, test_query_fragmentarium_number, test_query_fragmentarium_not_found, test_query_fragmentarium_reference_id, test_query_fragmentarium_id_and_pages, test_empty_result_query_reference_id_and_pages, test_query_fragmentarium_id_and_pages_legacy_without_reference_page_tokens, test_query_fragmentarium_transliteration, test_query_fragmentarium_sorting, test_query_fragmentarium_transliteration_and_number, test_query_fragmentarium_transliteration_and_number_and_references, test_query_fragmentarium_transliteration_and_number_and_references_not_found, test_find_transliterated, test_find_transliterated_line_to_vec, test_update_references, test_update_update_references, test_query_lemmas, test_fetch_scopes, test_query_by_sort_key, test_query_by_sort_key_no_index, test_query_script, test_query_genres, test_query_project, test_query_latest, test_query_latest_skips_restricted_fragments, test_fetch_fragment_signs
- Constants: COLLECTION, JOINS_COLLECTION, FRAGMENT_IDS, MUSEUM_NUMBERS, ANOTHER_LEMMATIZED_FRAGMENT, SCHEMA

## Imports

- attr
- datetime.date
- datetime.timedelta
- ebl.common.domain.period.Period
- ebl.common.domain.period.PeriodModifier
- ebl.common.domain.project.ResearchProject
- ebl.common.domain.scopes.Scope
- ebl.common.query.query_result.LemmaQueryType
- ebl.common.query.query_result.QueryItem
- ebl.common.query.query_result.QueryResult
- ebl.common.query.query_schemas.QueryResultSchema
- ebl.dictionary.domain.word.WordId
- ebl.errors.NotFoundError
- ebl.fragmentarium.application.fragment_repository.FragmentRepository
- ebl.fragmentarium.application.fragment_schema.FragmentSchema
- ebl.fragmentarium.application.joins_schema.JoinSchema
- ebl.fragmentarium.application.line_to_vec.LineToVecEntry
- ebl.fragmentarium.domain.fragment.Fragment
- ebl.fragmentarium.domain.fragment.Genre
- ebl.fragmentarium.domain.fragment.Introduction
- ebl.fragmentarium.domain.fragment.Notes
- ebl.fragmentarium.domain.fragment.Script
- ebl.fragmentarium.domain.joins.Join
- ebl.fragmentarium.domain.joins.Joins
- ebl.fragmentarium.domain.record.RecordType
- ebl.fragmentarium.domain.transliteration_update.TransliterationUpdate
- ebl.fragmentarium.infrastructure.mongo_fragment_repository.MongoFragmentRepository
- ebl.fragmentarium.infrastructure.queries.LATEST_TRANSLITERATION_LINE_LIMIT
- ebl.lemmatization.domain.lemmatization.Lemmatization
- ebl.lemmatization.domain.lemmatization.LemmatizationToken
- ebl.tests.factories.bibliography.ReferenceFactory
- ebl.tests.factories.fragment.DateFactory
- ebl.tests.factories.fragment.FragmentFactory
- ebl.tests.factories.fragment.InterestingFragmentFactory
- ebl.tests.factories.fragment.JoinFactory
- ebl.tests.factories.fragment.LemmatizedFragmentFactory
- ebl.tests.factories.fragment.TransliteratedFragmentFactory
- ebl.tests.factories.record.RecordEntryFactory
- ebl.tests.factories.record.RecordFactory
- ebl.tests.fragmentarium.test_fragments_search_route.query_item_of
- ebl.transliteration.application.sign_repository.SignRepository
- ebl.transliteration.application.signs_visitor.SignsVisitor
- ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark
- ebl.transliteration.domain.line.ControlLine
- ebl.transliteration.domain.line.EmptyLine
- ebl.transliteration.domain.line_number.LineNumber
- ebl.transliteration.domain.museum_number.MuseumNumber
- ebl.transliteration.domain.normalized_akkadian.AkkadianWord
- ebl.transliteration.domain.parallel_line.Labels
- ebl.transliteration.domain.parallel_line.ParallelFragment
- ebl.transliteration.domain.sign_tokens.Logogram
- ebl.transliteration.domain.sign_tokens.Reading
- ebl.transliteration.domain.text.Text
- ebl.transliteration.domain.text_line.TextLine
- ebl.transliteration.domain.tokens.Joiner
- ebl.transliteration.domain.tokens.ValueToken
- ebl.transliteration.domain.transliteration_query.TransliterationQuery
- ebl.transliteration.domain.word_tokens.Word
- functools.partial
- itertools.zip_longest
- pytest
- random
- typing.List
- typing.Tuple

