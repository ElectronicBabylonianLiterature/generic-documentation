# File Reference: ebl/transliteration/domain/text_line.py

- Lines: 165
- Characters: 5153

## Top-Level Symbols

- Classes: TextLine
- Functions: update_tokens, merge_tokens
- Constants: L, T

## Methods by Class

- TextLine: key, content, of_iterable, atf, lemmatization, update_lemmatization, update_lemma_annotation, update_alignment, _update_tokens, merge, update_alignments, accept, set_named_entities

## Imports

- attr
- ebl.fragmentarium.domain.token_annotation.LineLemmaAnnotation
- ebl.lemmatization.domain.lemmatization.LemmatizationError
- ebl.lemmatization.domain.lemmatization.LemmatizationToken
- ebl.merger.Merger
- ebl.transliteration.domain.alignment.AlignmentError
- ebl.transliteration.domain.alignment.AlignmentToken
- ebl.transliteration.domain.atf.Atf
- ebl.transliteration.domain.atf_visitor.convert_to_atf
- ebl.transliteration.domain.enclosure_visitor.set_enclosure_type
- ebl.transliteration.domain.language_visitor.set_language
- ebl.transliteration.domain.line.Line
- ebl.transliteration.domain.line_number.AbstractLineNumber
- ebl.transliteration.domain.tokens.Token
- ebl.transliteration.domain.tokens.TokenVisitor
- ebl.transliteration.domain.word_tokens.AbstractWord
- ebl.transliteration.domain.word_tokens.Word
- itertools.zip_longest
- pydash
- typing.Callable
- typing.Iterable
- typing.Optional
- typing.Sequence
- typing.Type
- typing.TypeVar
- typing.Union
- typing.cast

