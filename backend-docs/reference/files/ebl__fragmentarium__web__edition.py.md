# File Reference: ebl/fragmentarium/web/edition.py

- Lines: 85
- Characters: 2839

## Top-Level Symbols

- Classes: EditionResource
- Functions: None
- Constants: EDITION_DTO_SCHEMA

## Methods by Class

- EditionResource: __init__, _create_transliteration, on_post

## Imports

- ebl.errors.DataError
- ebl.fragmentarium.application.fragment_updater.FragmentUpdater
- ebl.fragmentarium.application.transliteration_update_factory.TransliterationUpdateFactory
- ebl.fragmentarium.domain.fragment.NotLowestJoinError
- ebl.fragmentarium.domain.transliteration_update.TransliterationUpdate
- ebl.fragmentarium.web.dtos.create_response_dto
- ebl.fragmentarium.web.dtos.parse_museum_number
- ebl.transliteration.domain.atf.Atf
- ebl.transliteration.domain.transliteration_error.DuplicateLabelError
- ebl.transliteration.domain.transliteration_error.ExtentLabelError
- ebl.transliteration.domain.transliteration_error.TransliterationError
- ebl.users.web.require_scope.require_scope
- falcon
- falcon.Request
- falcon.Response
- falcon.media.validators.jsonschema.validate
- marshmallow.ValidationError
- typing.Optional

