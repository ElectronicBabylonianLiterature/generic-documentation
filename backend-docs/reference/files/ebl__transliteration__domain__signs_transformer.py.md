# File Reference: ebl/transliteration/domain/signs_transformer.py

- Lines: 142
- Characters: 5124

## Top-Level Symbols

- Classes: SignTransformer
- Functions: tree_to_string
- Constants: None

## Methods by Class

- SignTransformer: __init__, ebl_atf_text_line__unidentified_sign, ebl_atf_text_line__egyptian_metrical_feet_separator, ebl_atf_text_line__unclear_sign, ebl_atf_text_line__unknown_number_of_signs, ebl_atf_text_line__joiner, ebl_atf_text_line__reading, ebl_atf_text_line__value_name_part, ebl_atf_text_line__logogram, ebl_atf_text_line__surrogate, ebl_atf_text_line__logogram_name_part, ebl_atf_text_line__number, ebl_atf_text_line__number_name_head, ebl_atf_text_line__number_name_part, ebl_atf_text_line__sub_index, ebl_atf_text_line__modifier, ebl_atf_text_line__modifiers, ebl_atf_text_line__flags, ebl_atf_text_line__grapheme, ebl_atf_text_line__sub_compound, ebl_atf_text_line__compound_grapheme, _parsed_graphemes_to_parts, _flatten_grapheme_elements

## Imports

- ebl.transliteration.domain.atf
- ebl.transliteration.domain.atf.sub_index_to_int
- ebl.transliteration.domain.atf.to_sub_index
- ebl.transliteration.domain.egyptian_metrical_feet_separator_token.EgyptianMetricalFeetSeparator
- ebl.transliteration.domain.sign_tokens.CompoundGrapheme
- ebl.transliteration.domain.sign_tokens.Grapheme
- ebl.transliteration.domain.sign_tokens.Logogram
- ebl.transliteration.domain.sign_tokens.Number
- ebl.transliteration.domain.sign_tokens.Reading
- ebl.transliteration.domain.tokens.Joiner
- ebl.transliteration.domain.tokens.UnknownNumberOfSigns
- ebl.transliteration.domain.tokens.ValueToken
- ebl.transliteration.domain.unknown_sign_tokens.UnclearSign
- ebl.transliteration.domain.unknown_sign_tokens.UnidentifiedSign
- lark.Tree
- lark.visitors.Transformer
- lark.visitors.v_args
- re
- typing.Sequence

