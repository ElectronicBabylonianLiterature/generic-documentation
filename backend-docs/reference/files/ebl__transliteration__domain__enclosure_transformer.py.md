# File Reference: ebl/transliteration/domain/enclosure_transformer.py

- Lines: 93
- Characters: 2932

## Top-Level Symbols

- Classes: EnclosureTransformer, GlossTransformer
- Functions: None
- Constants: None

## Methods by Class

- EnclosureTransformer: __init__, ebl_atf_text_line__open_accidental_omission, ebl_atf_text_line__close_accidental_omission, ebl_atf_text_line__open_intentional_omission, ebl_atf_text_line__close_intentional_omission, ebl_atf_text_line__open_removal, ebl_atf_text_line__close_removal, ebl_atf_text_line__close_broken_away, ebl_atf_text_line__open_broken_away, ebl_atf_text_line__close_perhaps_broken_away, ebl_atf_text_line__open_perhaps_broken_away, ebl_atf_text_line__open_document_oriented_gloss, ebl_atf_text_line__close_document_oriented_gloss, ebl_atf_text_line__erasure, _transform_erasure
- GlossTransformer: __init__, ebl_atf_text_line__determinative, ebl_atf_text_line__phonetic_gloss, ebl_atf_text_line__linguistic_gloss

## Imports

- ebl.transliteration.domain.atf_parsers.lark.tokens_to_value_tokens
- ebl.transliteration.domain.enclosure_tokens.AccidentalOmission
- ebl.transliteration.domain.enclosure_tokens.BrokenAway
- ebl.transliteration.domain.enclosure_tokens.Determinative
- ebl.transliteration.domain.enclosure_tokens.DocumentOrientedGloss
- ebl.transliteration.domain.enclosure_tokens.Erasure
- ebl.transliteration.domain.enclosure_tokens.IntentionalOmission
- ebl.transliteration.domain.enclosure_tokens.LinguisticGloss
- ebl.transliteration.domain.enclosure_tokens.PerhapsBrokenAway
- ebl.transliteration.domain.enclosure_tokens.PhoneticGloss
- ebl.transliteration.domain.enclosure_tokens.Removal
- ebl.transliteration.domain.erasure_visitor.set_erasure_state
- ebl.transliteration.domain.tokens.ErasureState
- lark.visitors.Transformer
- lark.visitors.v_args

