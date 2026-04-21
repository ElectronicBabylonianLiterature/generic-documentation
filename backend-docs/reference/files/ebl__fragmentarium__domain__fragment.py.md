# File Reference: ebl/fragmentarium/domain/fragment.py

- Lines: 310
- Characters: 10513

## Top-Level Symbols

- Classes: NotLowestJoinError, UncuratedReference, Measure, Acquisition, Genre, MarkupText, Introduction, Notes, Script, DossierReference, Fragment
- Functions: parse_markup_with_paragraphs
- Constants: None

## Methods by Class

- NotLowestJoinError: No methods
- UncuratedReference: No methods
- Measure: No methods
- Acquisition: of
- Genre: _check_is_genres_valid
- MarkupText: No methods
- Introduction: No methods
- Notes: No methods
- Script: __str__, abbreviation
- DossierReference: No methods
- Fragment: is_lowest_join, set_references, set_text, set_introduction, set_notes, set_script, update_lowest_join_transliteration, update_transliteration, set_genres, set_scopes, set_date, set_dates_in_text, set_archaeology, set_colophon, update_lemmatization, update_lemma_annotation, get_matching_lines, set_named_entities, words, get_word_by_id, set_token_ids

## Imports

- attr
- ebl.bibliography.domain.reference.Reference
- ebl.common.domain.accession.Accession
- ebl.common.domain.period.Period
- ebl.common.domain.period.PeriodModifier
- ebl.common.domain.scopes.Scope
- ebl.fragmentarium.application.matches.create_line_to_vec.create_line_to_vec
- ebl.fragmentarium.domain.archaeology.Archaeology
- ebl.fragmentarium.domain.colophon.Colophon
- ebl.fragmentarium.domain.date.Date
- ebl.fragmentarium.domain.folios.Folios
- ebl.fragmentarium.domain.fragment_external_numbers.ExternalNumbers
- ebl.fragmentarium.domain.fragment_external_numbers.FragmentExternalNumbers
- ebl.fragmentarium.domain.genres.genres
- ebl.fragmentarium.domain.joins.Joins
- ebl.fragmentarium.domain.line_to_vec_encoding.LineToVecEncodings
- ebl.fragmentarium.domain.museum.Museum
- ebl.fragmentarium.domain.named_entity.EntityAnnotationSpan
- ebl.fragmentarium.domain.named_entity.NamedEntity
- ebl.fragmentarium.domain.record.Record
- ebl.fragmentarium.domain.token_annotation.TextLemmaAnnotation
- ebl.fragmentarium.domain.transliteration_update.TransliterationUpdate
- ebl.lemmatization.domain.lemmatization.Lemmatization
- ebl.transliteration.domain.atf_parsers.lark_parser.PARSE_ERRORS
- ebl.transliteration.domain.atf_parsers.lark_parser.parse_markup_paragraphs
- ebl.transliteration.domain.markup.MarkupPart
- ebl.transliteration.domain.museum_number.MuseumNumber
- ebl.transliteration.domain.text.Text
- ebl.transliteration.domain.transliteration_query.TransliterationQuery
- ebl.transliteration.domain.word_tokens.AbstractWord
- ebl.users.domain.user.User
- enum.Enum
- itertools.groupby
- marshmallow.ValidationError
- pydash
- re
- typing.Any
- typing.Dict
- typing.List
- typing.Optional
- typing.Sequence
- typing.Tuple

