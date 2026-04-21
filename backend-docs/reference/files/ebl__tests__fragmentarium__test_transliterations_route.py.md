# File Reference: ebl/tests/fragmentarium/test_transliterations_route.py

- Lines: 347
- Characters: 11139

## Top-Level Symbols

- Classes: None
- Functions: test_update_transliteration, test_update_transliteration_merge_lemmatization, test_update_transliteration_invalid_atf, test_update_transliteration_not_lowest_join, test_update_transliteration_not_found, test_update_transliteration_invalid, test_update_transliteration_invalid_entity, test_update_notes, test_update_invalid_notes, test_update_introduction, test_update_invalid_introduction, test_update_multiple_fields
- Constants: NOTES_FIXTURE, INTRO_FIXTURE

## Imports

- attr
- ebl.fragmentarium.domain.fragment.Fragment
- ebl.fragmentarium.domain.fragment.Introduction
- ebl.fragmentarium.domain.fragment.Notes
- ebl.fragmentarium.domain.joins.Join
- ebl.fragmentarium.domain.transliteration_update.TransliterationUpdate
- ebl.fragmentarium.web.dtos.create_response_dto
- ebl.tests.factories.fragment.FragmentFactory
- ebl.tests.factories.fragment.LemmatizedFragmentFactory
- ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark
- ebl.transliteration.domain.markup.EmphasisPart
- ebl.transliteration.domain.markup.StringPart
- ebl.transliteration.domain.museum_number.MuseumNumber
- falcon
- freezegun.freeze_time
- json
- pytest

