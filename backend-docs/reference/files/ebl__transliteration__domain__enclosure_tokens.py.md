# File Reference: ebl/transliteration/domain/enclosure_tokens.py

- Lines: 212
- Characters: 4975

## Top-Level Symbols

- Classes: Enclosure, DocumentOrientedGloss, BrokenAway, PerhapsBrokenAway, AccidentalOmission, IntentionalOmission, Removal, Emendation, Erasure, Gloss, Determinative, PhoneticGloss, LinguisticGloss
- Functions: None
- Constants: E, G

## Methods by Class

- Enclosure: get_sides, value, clean_value, parts, is_open, is_close, open, close, of, of_value
- DocumentOrientedGloss: get_sides, accept
- BrokenAway: get_sides, accept
- PerhapsBrokenAway: get_sides, accept
- AccidentalOmission: get_sides, accept
- IntentionalOmission: get_sides, accept
- Removal: get_sides, accept
- Emendation: get_sides, accept
- Erasure: get_sides, center, accept
- Gloss: of, open, close, parts, value, clean_value, accept
- Determinative: open, close
- PhoneticGloss: open, close
- LinguisticGloss: open, close

## Imports

- abc.abstractmethod
- attr
- ebl.transliteration.domain.atf
- ebl.transliteration.domain.converters.convert_token_sequence
- ebl.transliteration.domain.side.Side
- ebl.transliteration.domain.tokens.ErasureState
- ebl.transliteration.domain.tokens.Token
- ebl.transliteration.domain.tokens.TokenVisitor
- typing.Mapping
- typing.Sequence
- typing.Type
- typing.TypeVar

