# File Reference: ebl/tests/corpus/test_chapter_lines_route.py

- Lines: 307
- Characters: 9338

## Top-Level Symbols

- Classes: None
- Functions: test_updating_invalidates_chapter_display_cache, test_updating_strophic_information, test_updating_chapter_not_found, test_updating_invalid_category, test_updating_invalid_id, test_update_invalid_entity, test_importing_invalidates_chapter_display_cache, test_import_invalid_entity
- Constants: EMPTY_EDIT_DTO, LINE_DTO, INVALID_LINE, TOO_MANY_NOTES, INVALID_RECONSTRUCTION, INVALID_TRANSLATION, INVALID_INTERTEXT

## Imports

- attr
- ebl.common.domain.stage.Stage
- ebl.corpus.domain.parser.parse_chapter
- ebl.corpus.web.chapter_schemas.ApiLineSchema
- ebl.tests.corpus.support.allow_references
- ebl.tests.corpus.support.allow_signs
- ebl.tests.corpus.support.create_chapter_dto
- ebl.tests.corpus.support.create_chapter_url
- ebl.tests.factories.corpus.ChapterFactory
- ebl.tests.factories.corpus.TextFactory
- ebl.transliteration.domain.atf.ATF_PARSER_VERSION
- ebl.transliteration.domain.line_number.LineNumber
- ebl.transliteration.domain.text_line.TextLine
- falcon
- json
- pytest
- typing.cast

