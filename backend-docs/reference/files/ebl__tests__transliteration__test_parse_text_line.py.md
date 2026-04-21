# File Reference: ebl/tests/transliteration/test_parse_text_line.py

- Lines: 1344
- Characters: 47892

## Top-Level Symbols

- Classes: None
- Functions: create_number_part, test_parser_version, test_parse_text_line, test_parse_dividers, test_parse_atf_language_shifts, test_parse_normalized_akkadain_shift, test_invalid_text_line, test_invalid_brackets
- Constants: DEFAULT_LANGUAGE

## Imports

- ebl.tests.assertions.assert_exception_has_errors
- ebl.transliteration.domain.atf
- ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark
- ebl.transliteration.domain.enclosure_tokens.AccidentalOmission
- ebl.transliteration.domain.enclosure_tokens.BrokenAway
- ebl.transliteration.domain.enclosure_tokens.Determinative
- ebl.transliteration.domain.enclosure_tokens.DocumentOrientedGloss
- ebl.transliteration.domain.enclosure_tokens.Erasure
- ebl.transliteration.domain.enclosure_tokens.IntentionalOmission
- ebl.transliteration.domain.enclosure_tokens.PerhapsBrokenAway
- ebl.transliteration.domain.enclosure_tokens.Removal
- ebl.transliteration.domain.greek_tokens.GreekLetter
- ebl.transliteration.domain.greek_tokens.GreekWord
- ebl.transliteration.domain.language.Language
- ebl.transliteration.domain.line.Line
- ebl.transliteration.domain.line_number.LineNumber
- ebl.transliteration.domain.line_number.LineNumberRange
- ebl.transliteration.domain.normalized_akkadian.AkkadianWord
- ebl.transliteration.domain.sign_tokens.CompoundGrapheme
- ebl.transliteration.domain.sign_tokens.Divider
- ebl.transliteration.domain.sign_tokens.Logogram
- ebl.transliteration.domain.sign_tokens.Number
- ebl.transliteration.domain.sign_tokens.Reading
- ebl.transliteration.domain.text.Text
- ebl.transliteration.domain.text_line.TextLine
- ebl.transliteration.domain.tokens.Column
- ebl.transliteration.domain.tokens.CommentaryProtocol
- ebl.transliteration.domain.tokens.Joiner
- ebl.transliteration.domain.tokens.LanguageShift
- ebl.transliteration.domain.tokens.LineBreak
- ebl.transliteration.domain.tokens.Tabulation
- ebl.transliteration.domain.tokens.UnknownNumberOfSigns
- ebl.transliteration.domain.tokens.ValueToken
- ebl.transliteration.domain.tokens.Variant
- ebl.transliteration.domain.transliteration_error.TransliterationError
- ebl.transliteration.domain.unknown_sign_tokens.UnclearSign
- ebl.transliteration.domain.unknown_sign_tokens.UnidentifiedSign
- ebl.transliteration.domain.word_tokens.ErasureState
- ebl.transliteration.domain.word_tokens.InWordNewline
- ebl.transliteration.domain.word_tokens.LoneDeterminative
- ebl.transliteration.domain.word_tokens.Word
- hamcrest.starts_with
- pytest
- typing.List

