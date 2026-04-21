# File Reference: ebl/tests/corpus/test_chapter_manuscripts_route.py

- Lines: 266
- Characters: 8386

## Top-Level Symbols

- Classes: None
- Functions: test_get, test_updating_invalidates_chapter_display_cache, test_updating_text_not_found, test_updating_invalid_reference, test_updating_text_category, test_updating_invalid_id, test_updating_invalid_stage, test_update_invalid_entity
- Constants: AMBIGUOUS_MANUSCRIPTS, INVALID_MUSEUM_NUMBER, INVALID_PROVENANCE

## Imports

- attr
- ebl.bibliography.application.reference_schema.ReferenceSchema
- ebl.common.domain.manuscript_type.ManuscriptType
- ebl.common.domain.period.Period
- ebl.common.domain.period.PeriodModifier
- ebl.common.domain.provenance.Provenance
- ebl.common.domain.stage.Stage
- ebl.tests.corpus.support.allow_references
- ebl.tests.corpus.support.allow_signs
- ebl.tests.corpus.support.create_chapter_dto
- ebl.tests.corpus.support.create_chapter_url
- ebl.tests.factories.bibliography.ReferenceFactory
- ebl.tests.factories.corpus.ChapterFactory
- ebl.tests.factories.corpus.TextFactory
- ebl.transliteration.domain.museum_number.MuseumNumber
- falcon
- json
- pytest

