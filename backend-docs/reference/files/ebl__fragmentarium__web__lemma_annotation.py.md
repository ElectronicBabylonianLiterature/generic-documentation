# File Reference: ebl/fragmentarium/web/lemma_annotation.py

- Lines: 81
- Characters: 2650

## Top-Level Symbols

- Classes: LemmaAnnotationResource, AutofillLemmasResource
- Functions: cast_int_keys
- Constants: LINE_INDEX, TOKEN_INDEX, LEMMA_ID, LINE_ANNOTATION_SCHEMA

## Methods by Class

- LemmaAnnotationResource: __init__, on_post
- AutofillLemmasResource: __init__, _collect_words, on_get

## Imports

- ebl.dictionary.application.word_repository.WordRepository
- ebl.fragmentarium.application.fragment_repository.FragmentRepository
- ebl.fragmentarium.application.fragment_updater.FragmentUpdater
- ebl.fragmentarium.web.dtos.create_response_dto
- ebl.fragmentarium.web.dtos.parse_museum_number
- ebl.users.web.require_scope.require_scope
- falcon
- falcon.media.validators.jsonschema.validate

