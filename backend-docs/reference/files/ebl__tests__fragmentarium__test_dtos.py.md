# File Reference: ebl/tests/fragmentarium/test_dtos.py

- Lines: 175
- Characters: 7391

## Top-Level Symbols

- Classes: None
- Functions: lemmatized_fragment, has_photo, expected_dto, test_create_response_dto, test_create_fragment_info_dto, test_parse_museum_number, test_parse_invalid_museum_number
- Constants: None

## Imports

- attr
- ebl.common.application.schemas.AccessionSchema
- ebl.common.domain.project.ResearchProject
- ebl.errors.DataError
- ebl.fragmentarium.application.archaeology_schemas.ArchaeologySchema
- ebl.fragmentarium.application.colophon_schema.ColophonSchema
- ebl.fragmentarium.application.fragment_fields_schemas.AcquisitionSchema
- ebl.fragmentarium.application.fragment_fields_schemas.DossierReferenceSchema
- ebl.fragmentarium.application.fragment_fields_schemas.ExternalNumbersSchema
- ebl.fragmentarium.application.fragment_fields_schemas.IntroductionSchema
- ebl.fragmentarium.application.fragment_fields_schemas.NotesSchema
- ebl.fragmentarium.application.fragment_fields_schemas.ScriptSchema
- ebl.fragmentarium.application.fragment_info_schema.ApiFragmentInfoSchema
- ebl.fragmentarium.application.genre_schema.GenreSchema
- ebl.fragmentarium.application.joins_schema.JoinsSchema
- ebl.fragmentarium.application.named_entity_schema.NamedEntitySchema
- ebl.fragmentarium.domain.date.DateSchema
- ebl.fragmentarium.domain.fragment.Fragment
- ebl.fragmentarium.domain.fragment_info.FragmentInfo
- ebl.fragmentarium.domain.joins.Joins
- ebl.fragmentarium.domain.record.RecordType
- ebl.fragmentarium.web.dtos.create_response_dto
- ebl.fragmentarium.web.dtos.parse_museum_number
- ebl.tests.factories.fragment.JoinFactory
- ebl.tests.factories.fragment.LemmatizedFragmentFactory
- ebl.transliteration.application.text_schema.TextSchema
- ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark
- ebl.transliteration.domain.museum_number.MuseumNumber
- pydash
- pytest

