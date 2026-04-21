# File Reference: ebl/fragmentarium/web/fragments.py

- Lines: 207
- Characters: 7240

## Top-Level Symbols

- Classes: FragmentsRetrieveAllResource, FragmentsResource, FragmentsQueryResource, FragmentAuthorizedScopesResource, FragmentsListResource
- Functions: make_latest_additions_resource, make_all_fragment_signs_resource, make_all_fragment_ocred_signs_resource
- Constants: None

## Methods by Class

- FragmentsRetrieveAllResource: __init__, _parse_skip, on_get
- FragmentsResource: __init__, on_get
- FragmentsQueryResource: __init__, on_get
- FragmentAuthorizedScopesResource: __init__, on_post
- FragmentsListResource: __init__, on_get

## Imports

- ebl.cache.application.cache.DEFAULT_TIMEOUT
- ebl.common.query.parameter_parser.parse_genre
- ebl.common.query.parameter_parser.parse_integer_field
- ebl.common.query.parameter_parser.parse_lemmas
- ebl.common.query.parameter_parser.parse_lines
- ebl.common.query.parameter_parser.parse_pages
- ebl.common.query.parameter_parser.parse_transliteration
- ebl.common.query.query_schemas.QueryResultSchema
- ebl.errors.DataError
- ebl.errors.NotFoundError
- ebl.files.application.file_repository.FileRepository
- ebl.fragmentarium.application.fragment_finder.FragmentFinder
- ebl.fragmentarium.application.fragment_repository.FragmentRepository
- ebl.fragmentarium.application.fragment_updater.FragmentUpdater
- ebl.fragmentarium.web.dtos.create_response_dto
- ebl.fragmentarium.web.dtos.parse_excavation_number
- ebl.fragmentarium.web.dtos.parse_museum_number
- ebl.schemas.ScopeField
- ebl.transliteration.application.museum_number_schema.MuseumNumberSchema
- ebl.transliteration.application.text_schema.TextSchema
- ebl.transliteration.application.transliteration_query_factory.TransliterationQueryFactory
- ebl.users.web.require_scope.require_fragment_read_scope
- falcon
- falcon.Request
- falcon.Response
- falcon_caching.Cache
- json
- pydash.flow

