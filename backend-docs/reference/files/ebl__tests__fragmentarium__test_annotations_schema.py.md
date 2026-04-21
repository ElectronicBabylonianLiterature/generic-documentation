# File Reference: ebl/tests/fragmentarium/test_annotations_schema.py

- Lines: 157
- Characters: 4412

## Top-Level Symbols

- Classes: None
- Functions: test_load, test_dump, sample_annotation_with_pca, sample_annotation_without_pca, schema, test_save_load_cycle_with_pca, test_omit_pca_when_none, test_malformed_pcaClustering, test_complete_pca_required
- Constants: HEIGHT, WIDTH, Y, X, PATH, VALUE, TYPE, ID, SIGN_NAME, IMAGE_ID, PROVENANCE, SCRIPT, SCRIPT_DUMPED, LABEL, ANNOTATION, MUSEUM_NUMBER, ANNOTATIONS, SERIALIZED

## Imports

- ebl.fragmentarium.application.annotations_schema.AnnotationsSchema
- ebl.fragmentarium.application.annotations_schema.AnnotationsWithScriptSchema
- ebl.fragmentarium.application.cropped_sign_image.CroppedSign
- ebl.fragmentarium.application.fragment_schema.ScriptSchema
- ebl.fragmentarium.domain.annotation.Annotation
- ebl.fragmentarium.domain.annotation.AnnotationData
- ebl.fragmentarium.domain.annotation.AnnotationValueType
- ebl.fragmentarium.domain.annotation.Annotations
- ebl.fragmentarium.domain.annotation.Geometry
- ebl.tests.factories.fragment.ScriptFactory
- ebl.transliteration.domain.museum_number.MuseumNumber
- marshmallow.ValidationError
- pytest

