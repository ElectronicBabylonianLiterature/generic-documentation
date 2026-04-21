# File Reference: ebl/transliteration/domain/atf_visitor.py

- Lines: 153
- Characters: 5012

## Top-Level Symbols

- Classes: AtfVisitorState, AtfVisitor
- Functions: convert_to_atf
- Constants: None

## Methods by Class

- AtfVisitorState: __init__, append_with_forced_separator, append_with_separator, append_left_bracket, append_right_bracket, append_token, append_separator, set_omit, set_force
- AtfVisitor: __init__, result, visit, visit_language_shift, visit_word, visit_document_oriented_gloss, visit_broken_away, visit_perhaps_broken_away, visit_omission, visit_accidental_omission, visit_removal, visit_emendation, _side, visit_erasure, visit_divider, visit_line_break, visit_egyptian_metrical_feet_separator, visit_commentary_protocol

## Imports

- ebl.transliteration.domain.atf.Atf
- ebl.transliteration.domain.atf.WORD_SEPARATOR
- ebl.transliteration.domain.egyptian_metrical_feet_separator_token.EgyptianMetricalFeetSeparator
- ebl.transliteration.domain.enclosure_tokens.AccidentalOmission
- ebl.transliteration.domain.enclosure_tokens.BrokenAway
- ebl.transliteration.domain.enclosure_tokens.DocumentOrientedGloss
- ebl.transliteration.domain.enclosure_tokens.Emendation
- ebl.transliteration.domain.enclosure_tokens.Erasure
- ebl.transliteration.domain.enclosure_tokens.IntentionalOmission
- ebl.transliteration.domain.enclosure_tokens.PerhapsBrokenAway
- ebl.transliteration.domain.enclosure_tokens.Removal
- ebl.transliteration.domain.side.Side
- ebl.transliteration.domain.sign_tokens.Divider
- ebl.transliteration.domain.tokens.CommentaryProtocol
- ebl.transliteration.domain.tokens.LanguageShift
- ebl.transliteration.domain.tokens.LineBreak
- ebl.transliteration.domain.tokens.Token
- ebl.transliteration.domain.tokens.TokenVisitor
- ebl.transliteration.domain.word_tokens.Word
- typing.Callable
- typing.List
- typing.Optional
- typing.Sequence

