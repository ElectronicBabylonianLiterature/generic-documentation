# File Reference: ebl/transliteration/domain/sign_tokens.py

- Lines: 278
- Characters: 7860

## Top-Level Symbols

- Classes: AbstractSign, Divider, NamedSign, Reading, Logogram, Number, Grapheme, CompoundGrapheme
- Functions: None
- Constants: None

## Methods by Class

- AbstractSign: string_flags
- Divider: value, parts, clean_value, string_flags, accept, of
- NamedSign: _check_sub_index, name, clean_value, parts, value, accept
- Reading: of, of_name
- Logogram: value, clean_value, _surrogate_value, of, of_name
- Number: accept, of, of_name
- Grapheme: __str__, value, clean_value, parts, accept, of
- CompoundGrapheme: name, value, parts, accept, of

## Imports

- attr
- ebl.transliteration.domain.atf
- ebl.transliteration.domain.atf.to_sub_index
- ebl.transliteration.domain.converters.convert_flag_sequence
- ebl.transliteration.domain.converters.convert_string_sequence
- ebl.transliteration.domain.converters.convert_token_sequence
- ebl.transliteration.domain.enclosure_tokens.BrokenAway
- ebl.transliteration.domain.sign.SignName
- ebl.transliteration.domain.tokens.ErasureState
- ebl.transliteration.domain.tokens.Token
- ebl.transliteration.domain.tokens.TokenVisitor
- ebl.transliteration.domain.tokens.ValueToken
- typing.Optional
- typing.Sequence
- typing.Union

