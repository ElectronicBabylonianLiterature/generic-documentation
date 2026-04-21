# File Reference: ebl/tests/transliteration/test_tokens.py

- Lines: 274
- Characters: 8399

## Top-Level Symbols

- Classes: None
- Functions: test_value_token, test_language_shift, test_set_unique_lemma_incompatible, test_set_unique_lemma_with_lemma, test_set_unique_lemma_no_lemma, test_set_alignment_incompatible, test_set_non_empty_alignment, test_set_alignment_no_alignment, test_merge, test_unknown_number_of_signs, test_egyptian_metrical_feet_separator, test_tabulation, test_commentary_protocol, test_column, test_column_with_number, test_invalid_column, test_variant, test_joiner
- Constants: TOKENS

## Imports

- ebl.lemmatization.domain.lemmatization.LemmatizationError
- ebl.lemmatization.domain.lemmatization.LemmatizationToken
- ebl.tests.asserts.assert_token_serialization
- ebl.transliteration.application.token_schemas.OneOfTokenSchema
- ebl.transliteration.domain.alignment.AlignmentError
- ebl.transliteration.domain.alignment.AlignmentToken
- ebl.transliteration.domain.atf
- ebl.transliteration.domain.egyptian_metrical_feet_separator_token.EgyptianMetricalFeetSeparator
- ebl.transliteration.domain.enclosure_tokens.BrokenAway
- ebl.transliteration.domain.enclosure_tokens.DocumentOrientedGloss
- ebl.transliteration.domain.enclosure_type.EnclosureType
- ebl.transliteration.domain.language.Language
- ebl.transliteration.domain.sign_tokens.Divider
- ebl.transliteration.domain.sign_tokens.Reading
- ebl.transliteration.domain.tokens.Column
- ebl.transliteration.domain.tokens.CommentaryProtocol
- ebl.transliteration.domain.tokens.ErasureState
- ebl.transliteration.domain.tokens.Joiner
- ebl.transliteration.domain.tokens.LanguageShift
- ebl.transliteration.domain.tokens.Tabulation
- ebl.transliteration.domain.tokens.UnknownNumberOfSigns
- ebl.transliteration.domain.tokens.ValueToken
- ebl.transliteration.domain.tokens.Variant
- pytest

