# File Reference: ebl/tests/corpus/test_chapter.py

- Lines: 530
- Characters: 16502

## Top-Level Symbols

- Classes: None
- Functions: test_constructor_sets_correct_fields, test_sign_tokens_collects_unique_signs_across_manuscripts, test_duplicate_ids_are_invalid, test_duplicate_sigla_are_invalid, test_missing_manuscripts_are_invalid, test_duplicate_manuscript_line_labels_are_invalid, test_duplicate_line_numbers_invalid, test_stage, test_text_lines, test_invalid_extent, test_extent_before_translation, test_overlapping, test_overlapping_languages, test_extant_lines, test_extant_lines_mixed_sides
- Constants: GENRE, CATEGORY, INDEX, NAME, VERSES, APPROXIMATE, CLASSIFICATION, STAGE, VERSION, CHAPTER_NAME, ORDER, MANUSCRIPT_ID, SIGLUM_DISAMBIGUATOR, OLD_SIGLA, MUSEUM_NUMBER, ACCESSION, PERIOD_MODIFIER, PERIOD, PROVENANCE, TYPE, NOTES, COLOPHON, UNPLACED_LINES, REFERENCES, LINE_NUMBER, OLD_LINE_NUMBERS, LINE_RECONSTRUCTION, IS_SECOND_LINE_OF_PARALLELISM, IS_BEGINNING_OF_SECTION, LABELS, PARATEXT, OMITTED_WORDS, NOTE, PARALLEL_LINES, TRANSLATION, SIGNS, MANUSCRIPT_TEXT_1, LINE_VARIANT_1, LINE_1, LINE_VARIANT_2, LINE_2, MANUSCRIPT_TEXT_3, LINE_VARIANT_3, LINE_3, RECORD, TEXT_ID, CHAPTER

## Imports

- attr
- ebl.common.domain.manuscript_type.ManuscriptType
- ebl.common.domain.period.Period
- ebl.common.domain.period.PeriodModifier
- ebl.common.domain.provenance.Provenance
- ebl.common.domain.stage.Stage
- ebl.corpus.domain.chapter.Chapter
- ebl.corpus.domain.chapter.Classification
- ebl.corpus.domain.chapter.ExtantLine
- ebl.corpus.domain.chapter.TextLineEntry
- ebl.corpus.domain.line.Line
- ebl.corpus.domain.line_variant.LineVariant
- ebl.corpus.domain.manuscript.Manuscript
- ebl.corpus.domain.manuscript.Siglum
- ebl.corpus.domain.manuscript_line.ManuscriptLine
- ebl.corpus.domain.record.Author
- ebl.corpus.domain.record.AuthorRole
- ebl.corpus.domain.record.Record
- ebl.corpus.domain.record.Translator
- ebl.tests.factories.bibliography.ReferenceFactory
- ebl.tests.factories.corpus.OldSiglumFactory
- ebl.transliteration.domain.atf.Ruling
- ebl.transliteration.domain.atf.Surface
- ebl.transliteration.domain.dollar_line.RulingDollarLine
- ebl.transliteration.domain.genre.Genre
- ebl.transliteration.domain.labels.SurfaceLabel
- ebl.transliteration.domain.line.EmptyLine
- ebl.transliteration.domain.line_number.LineNumber
- ebl.transliteration.domain.line_number.LineNumberRange
- ebl.transliteration.domain.markup.StringPart
- ebl.transliteration.domain.museum_number.MuseumNumber
- ebl.transliteration.domain.normalized_akkadian.AkkadianWord
- ebl.transliteration.domain.note_line.NoteLine
- ebl.transliteration.domain.parallel_line.ParallelComposition
- ebl.transliteration.domain.sign_tokens.Reading
- ebl.transliteration.domain.text.Text
- ebl.transliteration.domain.text_id.TextId
- ebl.transliteration.domain.text_line.TextLine
- ebl.transliteration.domain.tokens.UnknownNumberOfSigns
- ebl.transliteration.domain.tokens.ValueToken
- ebl.transliteration.domain.translation_line.Extent
- ebl.transliteration.domain.translation_line.TranslationLine
- ebl.transliteration.domain.word_tokens.Word
- pytest

