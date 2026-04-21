# Package Reference: ebl/ebl_ai_client.py

- Files: 1
- Total lines: 68

## File-Level API Summary

### `ebl/ebl_ai_client.py`

- Lines: 68
- Imports: PIL.Image, ebl.files.application.file_repository.File, ebl.fragmentarium.domain.annotation.Annotations, ebl.fragmentarium.domain.annotation.BoundingBoxPrediction, ebl.transliteration.domain.museum_number.MuseumNumber, io.BytesIO, marshmallow.Schema, marshmallow.fields, marshmallow.post_load, requests, typing.List
- Classes: EblAiApiError, BoundingBoxPredictionSchema, EblAiClient
- Methods in BoundingBoxPredictionSchema: make_line_number
- Methods in EblAiClient: __init__, _request_generate_annotations, generate_annotations

