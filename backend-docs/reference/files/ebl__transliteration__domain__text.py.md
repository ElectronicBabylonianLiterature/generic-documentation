# File Reference: ebl/transliteration/domain/text.py

- Lines: 266
- Characters: 9116

## Top-Level Symbols

- Classes: LabelsValidator, Text
- Functions: set_id
- Constants: None

## Methods by Class

- LabelsValidator: __init__, get_errors, _get_overlaps, _get_index, _validate_line, _, _, _validate_extent
- Text: _validate_extents, number_of_lines, text_lines, lemmatization, atf, labels, is_empty, update_lemmatization, update_lemma_annotation, merge, set_parser_version, _get_max_token_id, set_token_ids, of_iterable, set_named_entities

## Imports

- attr
- collections.defaultdict
- ebl.fragmentarium.domain.named_entity.EntityAnnotationSpan
- ebl.fragmentarium.domain.token_annotation.TextLemmaAnnotation
- ebl.lemmatization.domain.lemmatization.Lemmatization
- ebl.lemmatization.domain.lemmatization.LemmatizationError
- ebl.merger.Merger
- ebl.transliteration.domain.at_line.ColumnAtLine
- ebl.transliteration.domain.at_line.ObjectAtLine
- ebl.transliteration.domain.at_line.SealAtLine
- ebl.transliteration.domain.at_line.SurfaceAtLine
- ebl.transliteration.domain.atf.ATF_PARSER_VERSION
- ebl.transliteration.domain.atf.Atf
- ebl.transliteration.domain.line.Line
- ebl.transliteration.domain.line_label.LineLabel
- ebl.transliteration.domain.text_line.TextLine
- ebl.transliteration.domain.tokens.Token
- ebl.transliteration.domain.translation_line.Extent
- ebl.transliteration.domain.translation_line.TranslationLine
- ebl.transliteration.domain.transliteration_error.ErrorAnnotation
- ebl.transliteration.domain.transliteration_error.ExtentLabelError
- ebl.transliteration.domain.word_tokens.AbstractWord
- functools.singledispatchmethod
- itertools.count
- itertools.zip_longest
- pydash
- typing.Callable
- typing.Iterable
- typing.Iterator
- typing.List
- typing.Mapping
- typing.Sequence
- typing.Tuple
- typing.Type

