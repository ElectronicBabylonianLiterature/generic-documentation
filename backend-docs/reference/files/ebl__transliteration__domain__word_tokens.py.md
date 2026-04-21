# File Reference: ebl/transliteration/domain/word_tokens.py

- Lines: 209
- Characters: 6229

## Top-Level Symbols

- Classes: AbstractWord, Word, LoneDeterminative, InWordNewline
- Functions: None
- Constants: A, T, W

## Methods by Class

- AbstractWord: language, normalized, parts, clean_value, has_variant, lemmatizable, set_unique_lemma, set_alignment, set_has_variant_alignment, set_has_omitted_alignment, update_alignment, merge, _merge_word, _is_compatible, set_id
- Word: of, language, normalized, value, set_language, accept
- LoneDeterminative: of_value, lemmatizable
- InWordNewline: value, parts, of

## Imports

- abc.abstractmethod
- attr
- ebl.lemmatization.domain.lemmatization.Lemma
- ebl.lemmatization.domain.lemmatization.LemmatizationError
- ebl.lemmatization.domain.lemmatization.LemmatizationToken
- ebl.transliteration.domain.atf
- ebl.transliteration.domain.converters.convert_token_sequence
- ebl.transliteration.domain.language.Language
- ebl.transliteration.domain.tokens.ErasureState
- ebl.transliteration.domain.tokens.Token
- ebl.transliteration.domain.tokens.TokenVisitor
- typing.Optional
- typing.Sequence
- typing.Type
- typing.TypeVar
- typing.cast

