# File Reference: ebl/fragmentarium/application/annotations_service.py

- Lines: 171
- Characters: 6544

## Top-Level Symbols

- Classes: AnnotationsService
- Functions: None
- Constants: None

## Methods by Class

- AnnotationsService: generate_annotations, find, _cropped_image_from_annotations_helper, _cropped_image_from_annotations, update, get_labels

## Imports

- PIL.Image
- attr
- ebl.changelog.Changelog
- ebl.ebl_ai_client.EblAiClient
- ebl.files.application.file_repository.FileRepository
- ebl.fragmentarium.application.annotations_repository.AnnotationsRepository
- ebl.fragmentarium.application.annotations_schema.AnnotationsSchema
- ebl.fragmentarium.application.cropped_sign_image.CroppedSign
- ebl.fragmentarium.application.cropped_sign_images_repository.CroppedSignImage
- ebl.fragmentarium.application.cropped_sign_images_repository.CroppedSignImagesRepository
- ebl.fragmentarium.application.fragment_repository.FragmentRepository
- ebl.fragmentarium.domain.annotation.AnnotationValueType
- ebl.fragmentarium.domain.annotation.Annotations
- ebl.transliteration.domain.at_line.ColumnAtLine
- ebl.transliteration.domain.at_line.ObjectAtLine
- ebl.transliteration.domain.at_line.SealAtLine
- ebl.transliteration.domain.at_line.SurfaceAtLine
- ebl.transliteration.domain.line.Line
- ebl.transliteration.domain.line_label.LineLabel
- ebl.transliteration.domain.museum_number.MuseumNumber
- ebl.transliteration.domain.note_line.NoteLine
- ebl.transliteration.domain.text_line.TextLine
- ebl.users.domain.user.User
- io.BytesIO
- typing.Sequence
- typing.Tuple

