# File Reference: ebl/fragmentarium/application/fragment_repository.py

- Lines: 139
- Characters: 4279

## Top-Level Symbols

- Classes: FragmentRepository
- Functions: None
- Constants: None

## Methods by Class

- FragmentRepository: create_indexes, create, create_many, count_transliterated_fragments, count_lines, count_total_fragments, query_by_museum_number, query_by_traditional_references, query_random_by_transliterated, query_path_of_the_pioneers, query_by_transliterated_not_revised_by_other, query_transliterated_numbers, query_transliterated_line_to_vec, query_next_and_previous_folio, query_next_and_previous_fragment, update_field, query, query_latest, fetch_scopes, fetch_names, fetch_date, list_all_fragments, retrieve_transliterated_fragments, fetch_fragment_signs, fetch_fragment_ocred_signs, collect_lemmas

## Imports

- abc.ABC
- abc.abstractmethod
- ebl.common.domain.scopes.Scope
- ebl.common.query.query_result.AfORegisterToFragmentQueryResult
- ebl.common.query.query_result.QueryResult
- ebl.fragmentarium.application.line_to_vec.LineToVecEntry
- ebl.fragmentarium.domain.archaeology.ExcavationNumber
- ebl.fragmentarium.domain.date.Date
- ebl.fragmentarium.domain.fragment.Fragment
- ebl.fragmentarium.domain.fragment_info.FragmentInfo
- ebl.fragmentarium.domain.fragment_pager_info.FragmentPagerInfo
- ebl.transliteration.domain.museum_number.MuseumNumber
- typing.List
- typing.Optional
- typing.Sequence
- typing.Union

