# File Reference: ebl/tests/fragmentarium/test_fragments_search_route.py

- Lines: 534
- Characters: 16009

## Top-Level Symbols

- Classes: None
- Functions: expected_fragment_info_dto, expected_fragment_infos_pagination_dto, query_item_of, test_query_fragmentarium_number, test_query_fragmentarium_number_not_found, test_query_fragmentarium_references, test_query_fragmentarium_transliteration, test_query_fragmentarium_lemmas, test_query_fragmentarium_lemmas_not_found, test_query_fragmentarium_combined_query, test_query_signs_invalid, test_random, test_interesting, test_needs_revision, test_search_fragment_no_query, test_search_invalid_params, test_get_options, test_search_with_scopes, test_search_script_period, test_search_project, test_search_museum, test_search_site, test_query_latest
- Constants: None

## Imports

- attr
- datetime.date
- datetime.timedelta
- ebl.common.domain.period.Period
- ebl.common.domain.period.PeriodModifier
- ebl.common.domain.project.ResearchProject
- ebl.common.domain.scopes.Scope
- ebl.fragmentarium.application.fragment_info_schema.ApiFragmentInfoSchema
- ebl.fragmentarium.application.fragment_info_schema.ApiFragmentInfosPaginationSchema
- ebl.fragmentarium.domain.findspot.ExcavationSite
- ebl.fragmentarium.domain.fragment.Fragment
- ebl.fragmentarium.domain.fragment.Script
- ebl.fragmentarium.domain.fragment_info.FragmentInfo
- ebl.fragmentarium.domain.fragment_infos_pagination.FragmentInfosPagination
- ebl.fragmentarium.domain.genres.genres
- ebl.fragmentarium.domain.museum.Museum
- ebl.fragmentarium.domain.record.RecordType
- ebl.fragmentarium.infrastructure.queries.LATEST_TRANSLITERATION_LIMIT
- ebl.fragmentarium.infrastructure.queries.LATEST_TRANSLITERATION_LINE_LIMIT
- ebl.tests.factories.bibliography.BibliographyEntryFactory
- ebl.tests.factories.bibliography.ReferenceFactory
- ebl.tests.factories.fragment.FragmentFactory
- ebl.tests.factories.fragment.InterestingFragmentFactory
- ebl.tests.factories.fragment.LemmatizedFragmentFactory
- ebl.tests.factories.fragment.TransliteratedFragmentFactory
- ebl.tests.factories.record.RecordEntryFactory
- ebl.tests.factories.record.RecordFactory
- ebl.transliteration.application.museum_number_schema.MuseumNumberSchema
- ebl.transliteration.domain.museum_number.MuseumNumber
- falcon
- pytest
- typing.Dict
- typing.List
- typing.Optional

