# File Reference: ebl/fragmentarium/application/date_schemas.py

- Lines: 37
- Characters: 1263

## Top-Level Symbols

- Classes: IsoDateField, PartialDateSchema, DateRangeSchema
- Functions: None
- Constants: None

## Methods by Class

- IsoDateField: _serialize, _deserialize
- PartialDateSchema: create_partial_date, remove_empty_fields
- DateRangeSchema: create_date_range

## Imports

- datetime
- dateutil.parser.isoparse
- ebl.fragmentarium.domain.date_range.DateRange
- ebl.fragmentarium.domain.date_range.PartialDate
- marshmallow.Schema
- marshmallow.fields
- marshmallow.post_dump
- marshmallow.post_load

