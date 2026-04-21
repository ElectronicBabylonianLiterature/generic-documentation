# File Reference: ebl/transliteration/domain/text_line_transformer.py

- Lines: 228
- Characters: 7371

## Top-Level Symbols

- Classes: WordTransformer, NormalizedAkkadianTransformer, GreekTransformer, TextLineTransformer
- Functions: None
- Constants: NOTE_LINE_PREFIXES, TEXT_LINE_PREFIXES

## Methods by Class

- WordTransformer: __init__, ebl_atf_text_line__lone_determinative, ebl_atf_text_line__word, _create_word, ebl_atf_text_line__joiner, ebl_atf_text_line__in_word_newline, ebl_atf_text_line__variant, ebl_atf_text_line__inline_erasure
- NormalizedAkkadianTransformer: __init__, ebl_atf_text_line__text, ebl_atf_text_line__certain_caesura, ebl_atf_text_line__uncertain_caesura, ebl_atf_text_line__certain_foot_separator, ebl_atf_text_line__uncertain_foot_separator, ebl_atf_text_line__akkadian_word, ebl_atf_text_line__normalized_modifiers, ebl_atf_text_line__normalized_modifier, ebl_atf_text_line__akkadian_string, ebl_atf_text_line__separator, ebl_atf_text_line__open_emendation, ebl_atf_text_line__close_emendation
- GreekTransformer: __init__, ebl_atf_text_line__greek_word, ebl_atf_text_line__greek_letter
- TextLineTransformer: __init__, text_line, ebl_atf_text_line__text, ebl_atf_text_line__language_shift, ebl_atf_text_line__normalized_akkadian_shift, ebl_atf_text_line__greek_shift, ebl_atf_text_line__word_omitted, ebl_atf_text_line__tabulation, ebl_atf_text_line__commentary_protocol, ebl_atf_text_line__divider, ebl_atf_text_line__line_break, ebl_atf_text_line__column_token, ebl_atf_text_line__divider_variant

## Imports

- ebl.transliteration.domain.atf
- ebl.transliteration.domain.atf.Flag
- ebl.transliteration.domain.atf_parsers.lark.tokens_to_value_tokens
- ebl.transliteration.domain.common_transformer.CommonTransformer
- ebl.transliteration.domain.enclosure_tokens.Emendation
- ebl.transliteration.domain.enclosure_transformer.EnclosureTransformer
- ebl.transliteration.domain.enclosure_transformer.GlossTransformer
- ebl.transliteration.domain.greek_tokens.GreekLetter
- ebl.transliteration.domain.greek_tokens.GreekWord
- ebl.transliteration.domain.normalized_akkadian.AkkadianWord
- ebl.transliteration.domain.normalized_akkadian.Caesura
- ebl.transliteration.domain.normalized_akkadian.MetricalFootSeparator
- ebl.transliteration.domain.sign_tokens.Divider
- ebl.transliteration.domain.signs_transformer.SignTransformer
- ebl.transliteration.domain.text_line.TextLine
- ebl.transliteration.domain.tokens.Column
- ebl.transliteration.domain.tokens.CommentaryProtocol
- ebl.transliteration.domain.tokens.Joiner
- ebl.transliteration.domain.tokens.LanguageShift
- ebl.transliteration.domain.tokens.LineBreak
- ebl.transliteration.domain.tokens.Tabulation
- ebl.transliteration.domain.tokens.Token
- ebl.transliteration.domain.tokens.ValueToken
- ebl.transliteration.domain.tokens.Variant
- ebl.transliteration.domain.tokens.WordOmitted
- ebl.transliteration.domain.word_tokens.InWordNewline
- ebl.transliteration.domain.word_tokens.LoneDeterminative
- ebl.transliteration.domain.word_tokens.Word
- lark.lexer.Token
- lark.tree.Tree
- lark.visitors.v_args
- pydash
- typing.Iterable
- typing.Sequence
- typing.Type

