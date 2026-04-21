# File Reference: ebl/corpus/application/schemas.py

- Lines: 406
- Characters: 14506

## Top-Level Symbols

- Classes: OldSiglumSchema, ManuscriptSchema, ManuscriptLineSchema, LineVariantSchema, LineSchema, DictionaryLineSchema, DictionaryLinePaginationSchema, ChapterSchema, UncertainFragmentSchema, ChapterListingSchema, TextSchema, ManuscriptAttestationSchema, UncertainFragmentAttestationSchema
- Functions: manuscript_id
- Constants: None

## Methods by Class

- OldSiglumSchema: make_old_siglum
- ManuscriptSchema: validate_provenance, make_manuscript
- ManuscriptLineSchema: make_manuscript_line
- LineVariantSchema: make_line_variant
- LineSchema: make_line
- DictionaryLineSchema: make_dictionary_line
- DictionaryLinePaginationSchema: No methods
- ChapterSchema: make_chapter
- UncertainFragmentSchema: make_uncertain_fragment
- ChapterListingSchema: make_chapter_listing
- TextSchema: make_text
- ManuscriptAttestationSchema: make_manuscript_attestation
- UncertainFragmentAttestationSchema: make_uncertain_fragment_attestation

## Imports

- ebl.bibliography.application.reference_schema.ReferenceSchema
- ebl.common.domain.manuscript_type.ManuscriptType
- ebl.common.domain.period.Period
- ebl.common.domain.period.PeriodModifier
- ebl.common.domain.provenance.Provenance
- ebl.corpus.application.id_schemas.ChapterIdSchema
- ebl.corpus.application.id_schemas.TextIdSchema
- ebl.corpus.application.record_schemas.RecordSchema
- ebl.corpus.domain.chapter.Chapter
- ebl.corpus.domain.chapter.Classification
- ebl.corpus.domain.chapter_query.ChapterQueryColophonLinesSchema
- ebl.corpus.domain.dictionary_line.DictionaryLine
- ebl.corpus.domain.line.Line
- ebl.corpus.domain.line_variant.LineVariant
- ebl.corpus.domain.manuscript.Manuscript
- ebl.corpus.domain.manuscript.OldSiglum
- ebl.corpus.domain.manuscript.is_invalid_non_standard_text
- ebl.corpus.domain.manuscript.is_invalid_standard_text
- ebl.corpus.domain.manuscript_attestation.ManuscriptAttestation
- ebl.corpus.domain.manuscript_line.ManuscriptLine
- ebl.corpus.domain.record.Record
- ebl.corpus.domain.text.ChapterListing
- ebl.corpus.domain.text.Text
- ebl.corpus.domain.text.UncertainFragment
- ebl.corpus.domain.uncertain_fragment_attestation.UncertainFragmentAttestation
- ebl.fragmentarium.application.joins_schema.JoinsSchema
- ebl.fragmentarium.domain.joins.Joins
- ebl.schemas.ResearchProjectField
- ebl.schemas.StageField
- ebl.schemas.ValueEnumField
- ebl.transliteration.application.label_schemas.labels
- ebl.transliteration.application.line_number_schemas.OldLineNumberSchema
- ebl.transliteration.application.line_number_schemas.OneOfLineNumberSchema
- ebl.transliteration.application.line_schemas.NoteLineSchema
- ebl.transliteration.application.line_schemas.TranslationLineSchema
- ebl.transliteration.application.museum_number_schema.MuseumNumberSchema
- ebl.transliteration.application.note_line_part_schemas.OneOfNoteLinePartSchema
- ebl.transliteration.application.one_of_line_schema.OneOfLineSchema
- ebl.transliteration.application.one_of_line_schema.ParallelLineSchema
- ebl.transliteration.application.text_schema.TextSchema
- ebl.transliteration.application.token_schemas.OneOfTokenSchema
- ebl.transliteration.domain.genre.Genre
- ebl.transliteration.domain.text.Text
- marshmallow.Schema
- marshmallow.ValidationError
- marshmallow.fields
- marshmallow.post_load
- marshmallow.validate
- marshmallow.validates_schema

