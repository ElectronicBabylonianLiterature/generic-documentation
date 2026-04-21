# File Reference: ebl/fragmentarium/application/fragment_fields_schemas.py

- Lines: 190
- Characters: 6832

## Top-Level Symbols

- Classes: AcquisitionSchema, DossierReferenceSchema, ExternalNumbersSchema, FolioSchema, FoliosSchema, MarkupTextSchema, IntroductionSchema, MeasureSchema, NotesSchema, RecordEntrySchema, RecordSchema, ScriptSchema, UncuratedReferenceSchema
- Functions: None
- Constants: None

## Methods by Class

- AcquisitionSchema: make_acquisition
- DossierReferenceSchema: make_dossier_reference
- ExternalNumbersSchema: make_external_numbers, omit_empty_numbers
- FolioSchema: make_record_entry
- FoliosSchema: make_folio
- MarkupTextSchema: No methods
- IntroductionSchema: make_introduction
- MeasureSchema: make_measure, filter_none
- NotesSchema: make_notes
- RecordEntrySchema: make_record_entry
- RecordSchema: make_record
- ScriptSchema: make_script
- UncuratedReferenceSchema: make_uncurated_reference

## Imports

- ebl.common.domain.period.Period
- ebl.common.domain.period.PeriodModifier
- ebl.fragmentarium.domain.folios.Folio
- ebl.fragmentarium.domain.folios.Folios
- ebl.fragmentarium.domain.fragment.Acquisition
- ebl.fragmentarium.domain.fragment.DossierReference
- ebl.fragmentarium.domain.fragment.Introduction
- ebl.fragmentarium.domain.fragment.Measure
- ebl.fragmentarium.domain.fragment.Notes
- ebl.fragmentarium.domain.fragment.Script
- ebl.fragmentarium.domain.fragment.UncuratedReference
- ebl.fragmentarium.domain.fragment_external_numbers.ExternalNumbers
- ebl.fragmentarium.domain.record.Record
- ebl.fragmentarium.domain.record.RecordEntry
- ebl.fragmentarium.domain.record.RecordType
- ebl.schemas.ValueEnumField
- ebl.transliteration.application.note_line_part_schemas.OneOfNoteLinePartSchema
- marshmallow.EXCLUDE
- marshmallow.Schema
- marshmallow.fields
- marshmallow.post_dump
- marshmallow.post_load
- pydash

