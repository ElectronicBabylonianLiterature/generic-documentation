# File Reference: ebl/fragmentarium/infrastructure/mongo_fragment_repository_get_extended.py

- Lines: 206
- Characters: 7470

## Top-Level Symbols

- Classes: MongoFragmentRepositoryGetExtended
- Functions: has_none_values, _get_colophon_names_query
- Constants: None

## Methods by Class

- MongoFragmentRepositoryGetExtended: __init__, query_random_by_transliterated, query_path_of_the_pioneers, query_transliterated_numbers, query_transliterated_line_to_vec, query_by_transliterated_not_revised_by_other, query_next_and_previous_folio, fetch_fragment_signs, fetch_fragment_ocred_signs, fetch_date, fetch_scopes, fetch_names

## Imports

- ebl.common.domain.scopes.Scope
- ebl.common.query.query_collation.CollatedFieldQuery
- ebl.errors.NotFoundError
- ebl.fragmentarium.application.fragment_fields_schemas.ScriptSchema
- ebl.fragmentarium.application.fragment_info_schema.FragmentInfoSchema
- ebl.fragmentarium.application.line_to_vec.LineToVecEntry
- ebl.fragmentarium.domain.date.Date
- ebl.fragmentarium.domain.date.DateSchema
- ebl.fragmentarium.domain.line_to_vec_encoding.LineToVecEncoding
- ebl.fragmentarium.infrastructure.mongo_fragment_repository_base.MongoFragmentRepositoryBase
- ebl.fragmentarium.infrastructure.queries.HAS_TRANSLITERATION
- ebl.fragmentarium.infrastructure.queries.aggregate_needs_revision
- ebl.fragmentarium.infrastructure.queries.aggregate_path_of_the_pioneers
- ebl.fragmentarium.infrastructure.queries.aggregate_random
- ebl.transliteration.application.museum_number_schema.MuseumNumberSchema
- ebl.transliteration.domain.museum_number.MuseumNumber
- ebl.transliteration.infrastructure.queries.query_number_is
- marshmallow.EXCLUDE
- pymongo
- typing.List
- typing.Optional
- typing.Sequence

