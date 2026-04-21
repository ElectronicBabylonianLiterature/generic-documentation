# File Reference: ebl/tests/transliteration/test_atf_parser.py

- Lines: 141
- Characters: 4497

## Top-Level Symbols

- Classes: None
- Functions: test_parser_version, test_parse_atf, test_invalid_atf, test_duplicate_labels, siglum_parser, test_stages_periods_equality, test_provenances_coverage
- Constants: DEFAULT_LANGUAGE, MANUSCRIPT_LINE_PARSER_PATH, PARALLEL_LINE_PARSER_PATH

## Imports

- ebl.common.domain.period.Period
- ebl.common.domain.provenance.Provenance
- ebl.common.domain.stage.Stage
- ebl.tests.assertions.assert_exception_has_errors
- ebl.transliteration.domain.at_line.SurfaceAtLine
- ebl.transliteration.domain.atf
- ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark
- ebl.transliteration.domain.dollar_line.ScopeContainer
- ebl.transliteration.domain.dollar_line.StateDollarLine
- ebl.transliteration.domain.labels.SurfaceLabel
- ebl.transliteration.domain.language.Language
- ebl.transliteration.domain.line.ControlLine
- ebl.transliteration.domain.line.Line
- ebl.transliteration.domain.text.Text
- ebl.transliteration.domain.transliteration_error.DuplicateLabelError
- ebl.transliteration.domain.transliteration_error.TransliterationError
- hamcrest.library.starts_with
- lark.Lark
- lark.UnexpectedCharacters
- pytest
- re
- typing.List

