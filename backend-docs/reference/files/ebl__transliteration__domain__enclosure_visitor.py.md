# File Reference: ebl/transliteration/domain/enclosure_visitor.py

- Lines: 266
- Characters: 10123

## Top-Level Symbols

- Classes: EnclosureVisitorState, EnclosureValidator, EnclosureUpdater
- Functions: set_enclosure_type
- Constants: None

## Methods by Class

- EnclosureVisitorState: has_enclosures, is_open, open, close, _is_allowed_to_open, _is_allowed_to_close, _is_required
- EnclosureValidator: enclosures, done, visit_variant, visit_word, visit_gloss, visit_named_sign, visit_akkadian_word, visit_greek_word, visit_accidental_omission, visit_intentional_omission, visit_removal, visit_broken_away, visit_perhaps_broken_away, visit_emendation, visit_document_oriented_gloss, _update_state
- EnclosureUpdater: tokens, _set_enclosure_type, _append_token, visit, visit_variant, visit_word, visit_named_sign, visit_akkadian_word, visit_greek_word, visit_gloss, visit_accidental_omission, visit_intentional_omission, visit_removal, visit_broken_away, visit_perhaps_broken_away, visit_document_oriented_gloss, visit_emendation, _visit_parts, _update_enclosures

## Imports

- attr
- ebl.transliteration.domain.enclosure_error.EnclosureError
- ebl.transliteration.domain.enclosure_tokens.AccidentalOmission
- ebl.transliteration.domain.enclosure_tokens.BrokenAway
- ebl.transliteration.domain.enclosure_tokens.DocumentOrientedGloss
- ebl.transliteration.domain.enclosure_tokens.Emendation
- ebl.transliteration.domain.enclosure_tokens.Enclosure
- ebl.transliteration.domain.enclosure_tokens.Gloss
- ebl.transliteration.domain.enclosure_tokens.IntentionalOmission
- ebl.transliteration.domain.enclosure_tokens.PerhapsBrokenAway
- ebl.transliteration.domain.enclosure_tokens.Removal
- ebl.transliteration.domain.enclosure_type.EnclosureType
- ebl.transliteration.domain.greek_tokens.GreekWord
- ebl.transliteration.domain.normalized_akkadian.AkkadianWord
- ebl.transliteration.domain.sign_tokens.NamedSign
- ebl.transliteration.domain.tokens.Token
- ebl.transliteration.domain.tokens.TokenVisitor
- ebl.transliteration.domain.tokens.Variant
- ebl.transliteration.domain.word_tokens.Word
- typing.FrozenSet
- typing.Iterable
- typing.List
- typing.Sequence
- typing.Union

