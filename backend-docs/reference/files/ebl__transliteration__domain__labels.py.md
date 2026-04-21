# File Reference: ebl/transliteration/domain/labels.py

- Lines: 160
- Characters: 4588

## Top-Level Symbols

- Classes: DuplicateStatusError, LabelVisitor, Label, ColumnLabel, SurfaceLabel, ObjectLabel
- Functions: no_duplicate_status, convert_status_sequence
- Constants: None

## Methods by Class

- DuplicateStatusError: No methods
- LabelVisitor: visit_surface_label, visit_column_label, visit_object_label
- Label: abbreviation, _atf, status_string, accept, to_value, to_atf
- ColumnLabel: from_label, from_int, abbreviation, _atf, accept
- SurfaceLabel: _check_text, from_label, abbreviation, _atf, accept, to_atf
- ObjectLabel: _check_text, from_object, abbreviation, _atf, accept, to_atf

## Imports

- abc.ABC
- abc.abstractmethod
- attr
- ebl.transliteration.domain.atf.Object
- ebl.transliteration.domain.atf.Status
- ebl.transliteration.domain.atf.Surface
- pydash
- roman
- typing.Iterable
- typing.Sequence
- typing.Tuple
- typing.Union

