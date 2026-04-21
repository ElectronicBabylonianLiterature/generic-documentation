# File Reference: ebl/transliteration/domain/markup.py

- Lines: 192
- Characters: 5194

## Top-Level Symbols

- Classes: MarkupPart, TextPart, StringPart, MarkupTokenPart, EmphasisPart, SuperscriptPart, SubscriptPart, BoldPart, LanguagePart, BibliographyPart, ParagraphPart, UrlPart
- Functions: escape, titlecase, convert_part_sequence, rstrip, title_case, to_title
- Constants: MP, TP

## Methods by Class

- MarkupPart: value, key, rstrip, title_case
- TextPart: rstrip, title_case
- StringPart: value
- MarkupTokenPart: value
- EmphasisPart: No methods
- SuperscriptPart: No methods
- SubscriptPart: No methods
- BoldPart: No methods
- LanguagePart: code, value, key, of_transliteration
- BibliographyPart: validate_reference, value, of
- ParagraphPart: value
- UrlPart: value

## Imports

- abc.ABC
- abc.abstractmethod
- attr
- ebl.bibliography.domain.reference.BibliographyId
- ebl.bibliography.domain.reference.Reference
- ebl.bibliography.domain.reference.ReferenceType
- ebl.transliteration.domain.atf_visitor.convert_to_atf
- ebl.transliteration.domain.enclosure_visitor.set_enclosure_type
- ebl.transliteration.domain.language.Language
- ebl.transliteration.domain.language_visitor.set_language
- ebl.transliteration.domain.tokens.Token
- re
- typing.Iterable
- typing.Pattern
- typing.Sequence
- typing.Tuple
- typing.TypeVar

