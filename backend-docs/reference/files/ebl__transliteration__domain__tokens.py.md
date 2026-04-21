# File Reference: ebl/transliteration/domain/tokens.py

- Lines: 365
- Characters: 8751

## Top-Level Symbols

- Classes: TokenVisitor, ErasureState, Token, ValueToken, LanguageShift, UnknownNumberOfSigns, WordOmitted, Tabulation, CommentaryProtocol, Column, Variant, Joiner, LineBreak
- Functions: None
- Constants: T, VT

## Methods by Class

- TokenVisitor: visit, visit_word, visit_language_shift, visit_document_oriented_gloss, visit_broken_away, visit_perhaps_broken_away, visit_accidental_omission, visit_intentional_omission, visit_removal, visit_emendation, visit_erasure, visit_divider, visit_egyptian_metrical_feet_separator, visit_line_break, visit_commentary_protocol, visit_variant, visit_gloss, visit_named_sign, visit_number, visit_grapheme, visit_compound_grapheme, visit_unknown_sign, visit_akkadian_word, visit_greek_word, visit_metrical_foot_separator, visit_caesura, result
- ErasureState: No methods
- Token: value, parts, clean_value, lemmatizable, alignable, get_key, set_unique_lemma, update_alignment, set_enclosure_type, set_erasure, merge, accept
- ValueToken: value, parts, of
- LanguageShift: language, normalized, accept, normalized_akkadian
- UnknownNumberOfSigns: value, parts, of
- WordOmitted: value, parts, of
- Tabulation: value, parts, of
- CommentaryProtocol: protocol, accept
- Column: of, _check_number, value, parts
- Variant: of, value, clean_value, parts, accept
- Joiner: value, parts, dot, hyphen, colon, semicolon, plus, comma, of
- LineBreak: value, parts, accept, of

## Imports

- abc.ABC
- abc.abstractmethod
- attr
- ebl.lemmatization.domain.lemmatization.LemmatizationError
- ebl.lemmatization.domain.lemmatization.LemmatizationToken
- ebl.transliteration.domain.atf
- ebl.transliteration.domain.enclosure_type.EnclosureType
- ebl.transliteration.domain.language.Language
- enum.Enum
- enum.auto
- typing.AbstractSet
- typing.Optional
- typing.Sequence
- typing.Type
- typing.TypeVar

