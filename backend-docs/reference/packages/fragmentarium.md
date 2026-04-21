# Package Reference: ebl/fragmentarium

- Files: 98
- Total lines: 8104

## File-Level API Summary

### `ebl/fragmentarium/__init__.py`

- Lines: 0

### `ebl/fragmentarium/annotations.json`

- Lines: 3
- JSON configuration or dataset file.

### `ebl/fragmentarium/application/__init__.py`

- Lines: 0

### `ebl/fragmentarium/application/annotations_repository.py`

- Lines: 19
- Imports: abc.ABC, abc.abstractmethod, ebl.fragmentarium.domain.annotation.Annotations, ebl.transliteration.domain.museum_number.MuseumNumber, typing.List, typing.Sequence
- Classes: AnnotationsRepository
- Methods in AnnotationsRepository: find_by_sign, query_by_museum_number, retrieve_all_non_empty, create_or_update

### `ebl/fragmentarium/application/annotations_schema.py`

- Lines: 95
- Imports: ebl.fragmentarium.application.cropped_sign_image.CroppedSignSchema, ebl.fragmentarium.application.fragment_fields_schemas.ScriptSchema, ebl.fragmentarium.domain.annotation.Annotation, ebl.fragmentarium.domain.annotation.AnnotationData, ebl.fragmentarium.domain.annotation.AnnotationValueType, ebl.fragmentarium.domain.annotation.Annotations, ebl.fragmentarium.domain.annotation.Geometry, ebl.fragmentarium.domain.annotation.PcaClustering, ebl.fragmentarium.domain.fragment.Script, ebl.schemas.ValueEnumField, ebl.transliteration.domain.museum_number.MuseumNumber, marshmallow.Schema, marshmallow.fields, marshmallow.post_dump, marshmallow.post_load, pydash
- Classes: GeometrySchema, AnnotationDataSchema, PcaClusteringSchema, AnnotationSchema, AnnotationsSchema, AnnotationsWithScriptSchema
- Methods in GeometrySchema: make_geometry
- Methods in AnnotationDataSchema: make_data
- Methods in PcaClusteringSchema: make_pca_clustering, filter_none
- Methods in AnnotationSchema: make_annotation, filter_none
- Methods in AnnotationsSchema: make_annotation, filter_none

### `ebl/fragmentarium/application/annotations_service.py`

- Lines: 171
- Imports: PIL.Image, attr, ebl.changelog.Changelog, ebl.ebl_ai_client.EblAiClient, ebl.files.application.file_repository.FileRepository, ebl.fragmentarium.application.annotations_repository.AnnotationsRepository, ebl.fragmentarium.application.annotations_schema.AnnotationsSchema, ebl.fragmentarium.application.cropped_sign_image.CroppedSign, ebl.fragmentarium.application.cropped_sign_images_repository.CroppedSignImage, ebl.fragmentarium.application.cropped_sign_images_repository.CroppedSignImagesRepository, ebl.fragmentarium.application.fragment_repository.FragmentRepository, ebl.fragmentarium.domain.annotation.AnnotationValueType, ebl.fragmentarium.domain.annotation.Annotations, ebl.transliteration.domain.at_line.ColumnAtLine, ebl.transliteration.domain.at_line.ObjectAtLine, ebl.transliteration.domain.at_line.SealAtLine, ebl.transliteration.domain.at_line.SurfaceAtLine, ebl.transliteration.domain.line.Line, ebl.transliteration.domain.line_label.LineLabel, ebl.transliteration.domain.museum_number.MuseumNumber
- Classes: AnnotationsService
- Methods in AnnotationsService: generate_annotations, find, _cropped_image_from_annotations_helper, _cropped_image_from_annotations, update, get_labels

### `ebl/fragmentarium/application/archaeology_schemas.py`

- Lines: 90
- Imports: ebl.bibliography.application.reference_schema.ReferenceSchema, ebl.common.application.schemas.AbstractMuseumNumberSchema, ebl.fragmentarium.application.date_schemas.DateRangeSchema, ebl.fragmentarium.domain.archaeology.Archaeology, ebl.fragmentarium.domain.archaeology.ExcavationNumber, ebl.fragmentarium.domain.findspot.BuildingType, ebl.fragmentarium.domain.findspot.ExcavationPlan, ebl.fragmentarium.domain.findspot.ExcavationSite, ebl.fragmentarium.domain.findspot.Findspot, ebl.schemas.NameEnumField, marshmallow.Schema, marshmallow.fields, marshmallow.post_load
- Classes: ExcavationNumberSchema, ExcavationPlanSchema, FindspotSchema, ArchaeologySchema
- Methods in ExcavationNumberSchema: create_excavation_number
- Methods in ExcavationPlanSchema: create_excavation_plan
- Methods in FindspotSchema: create_findspot
- Methods in ArchaeologySchema: create_archaeology

### `ebl/fragmentarium/application/colophon_schema.py`

- Lines: 123
- Imports: ebl.fragmentarium.domain.colophon.Colophon, ebl.fragmentarium.domain.colophon.ColophonOwnership, ebl.fragmentarium.domain.colophon.ColophonStatus, ebl.fragmentarium.domain.colophon.ColophonType, ebl.fragmentarium.domain.colophon.IndividualAttestation, ebl.fragmentarium.domain.colophon.IndividualType, ebl.fragmentarium.domain.colophon.IndividualTypeAttestation, ebl.fragmentarium.domain.colophon.NameAttestation, ebl.fragmentarium.domain.colophon.ProvenanceAttestation, ebl.schemas.ValueEnumField, marshmallow.Schema, marshmallow.fields, marshmallow.post_dump, marshmallow.post_load, pydash
- Classes: NameAttestationSchema, ProvenanceAttestationSchema, IndividualTypeAttestationSchema, ColophonStatusSchema, IndividualAttestationSchema, ColophonSchema
- Methods in NameAttestationSchema: make_name_attestation, filter_none
- Methods in ProvenanceAttestationSchema: make_provenance_attestation, filter_none
- Methods in IndividualTypeAttestationSchema: make_type_attestation, filter_none
- Methods in ColophonStatusSchema: make_colophon_status, filter_none
- Methods in IndividualAttestationSchema: make_individual_attestation, filter_none
- Methods in ColophonSchema: make_colophon, filter_none

### `ebl/fragmentarium/application/cropped_annotations_service.py`

- Lines: 60
- Imports: attr, ebl.fragmentarium.application.annotations_repository.AnnotationsRepository, ebl.fragmentarium.application.cropped_sign_images_repository.CroppedSignImagesRepository, ebl.fragmentarium.application.fragment_repository.FragmentRepository, ebl.fragmentarium.domain.annotation.AnnotationValueType, ebl.fragmentarium.domain.date.DateSchema, typing.Sequence
- Classes: CroppedAnnotationService
- Methods in CroppedAnnotationService: __init__, find_annotations_by_sign

### `ebl/fragmentarium/application/cropped_sign_image.py`

- Lines: 49
- Imports: attr, ebl.transliteration.domain.museum_number.MuseumNumber, marshmallow.Schema, marshmallow.fields, marshmallow.post_load, typing.NewType, uuid
- Classes: CroppedSignImage, CroppedSignImageSchema, CroppedSign, CroppedSignSchema
- Methods in CroppedSignImage: create
- Methods in CroppedSignImageSchema: make_cropped_sign_image
- Methods in CroppedSignSchema: load

### `ebl/fragmentarium/application/cropped_sign_images_repository.py`

- Lines: 16
- Imports: abc.ABC, abc.abstractmethod, ebl.fragmentarium.application.cropped_sign_image.CroppedSignImage, ebl.transliteration.domain.museum_number.MuseumNumber, typing.Sequence
- Classes: CroppedSignImagesRepository
- Methods in CroppedSignImagesRepository: query_by_id, create_many, delete_by_fragment_number

### `ebl/fragmentarium/application/date_schemas.py`

- Lines: 37
- Imports: datetime, dateutil.parser.isoparse, ebl.fragmentarium.domain.date_range.DateRange, ebl.fragmentarium.domain.date_range.PartialDate, marshmallow.Schema, marshmallow.fields, marshmallow.post_dump, marshmallow.post_load
- Classes: IsoDateField, PartialDateSchema, DateRangeSchema
- Methods in IsoDateField: _serialize, _deserialize
- Methods in PartialDateSchema: create_partial_date, remove_empty_fields
- Methods in DateRangeSchema: create_date_range

### `ebl/fragmentarium/application/folio_pager_schema.py`

- Lines: 11
- Imports: marshmallow.Schema, marshmallow.fields
- Classes: FragmentNumberSchema, FolioPagerInfoSchema

### `ebl/fragmentarium/application/fragment_fields_schemas.py`

- Lines: 190
- Imports: ebl.common.domain.period.Period, ebl.common.domain.period.PeriodModifier, ebl.fragmentarium.domain.folios.Folio, ebl.fragmentarium.domain.folios.Folios, ebl.fragmentarium.domain.fragment.Acquisition, ebl.fragmentarium.domain.fragment.DossierReference, ebl.fragmentarium.domain.fragment.Introduction, ebl.fragmentarium.domain.fragment.Measure, ebl.fragmentarium.domain.fragment.Notes, ebl.fragmentarium.domain.fragment.Script, ebl.fragmentarium.domain.fragment.UncuratedReference, ebl.fragmentarium.domain.fragment_external_numbers.ExternalNumbers, ebl.fragmentarium.domain.record.Record, ebl.fragmentarium.domain.record.RecordEntry, ebl.fragmentarium.domain.record.RecordType, ebl.schemas.ValueEnumField, ebl.transliteration.application.note_line_part_schemas.OneOfNoteLinePartSchema, marshmallow.EXCLUDE, marshmallow.Schema, marshmallow.fields
- Classes: AcquisitionSchema, DossierReferenceSchema, ExternalNumbersSchema, FolioSchema, FoliosSchema, MarkupTextSchema, IntroductionSchema, MeasureSchema, NotesSchema, RecordEntrySchema, RecordSchema, ScriptSchema, UncuratedReferenceSchema
- Methods in AcquisitionSchema: make_acquisition
- Methods in DossierReferenceSchema: make_dossier_reference
- Methods in ExternalNumbersSchema: make_external_numbers, omit_empty_numbers
- Methods in FolioSchema: make_record_entry
- Methods in FoliosSchema: make_folio
- Methods in IntroductionSchema: make_introduction
- Methods in MeasureSchema: make_measure, filter_none
- Methods in NotesSchema: make_notes
- Methods in RecordEntrySchema: make_record_entry

### `ebl/fragmentarium/application/fragment_finder.py`

- Lines: 103
- Imports: ebl.bibliography.application.bibliography.Bibliography, ebl.common.domain.scopes.Scope, ebl.dictionary.application.dictionary_service.Dictionary, ebl.files.application.file_repository.File, ebl.files.application.file_repository.FileRepository, ebl.fragmentarium.application.fragment_repository.FragmentRepository, ebl.fragmentarium.domain.archaeology.ExcavationNumber, ebl.fragmentarium.domain.folios.Folio, ebl.fragmentarium.domain.fragment.Fragment, ebl.fragmentarium.domain.fragment_info.FragmentInfo, ebl.fragmentarium.domain.fragment_pager_info.FragmentPagerInfo, ebl.transliteration.application.parallel_line_injector.ParallelLineInjector, ebl.transliteration.domain.museum_number.MuseumNumber, enum.Enum, typing.List, typing.Optional, typing.Sequence, typing.Tuple, typing.Union
- Classes: ThumbnailSize, FragmentFinder
- Methods in ThumbnailSize: from_string
- Methods in FragmentFinder: __init__, find, fetch_scopes, find_random, find_interesting, folio_pager, fragment_pager, find_folio, find_photo, find_thumbnail

### `ebl/fragmentarium/application/fragment_info_schema.py`

- Lines: 49
- Imports: ebl.bibliography.application.reference_schema.ApiReferenceSchema, ebl.bibliography.application.reference_schema.ReferenceSchema, ebl.common.application.schemas.AccessionSchema, ebl.fragmentarium.application.fragment_fields_schemas.AcquisitionSchema, ebl.fragmentarium.application.fragment_fields_schemas.ScriptSchema, ebl.fragmentarium.application.genre_schema.GenreSchema, ebl.fragmentarium.domain.fragment_infos_pagination.FragmentInfosPagination, ebl.transliteration.application.museum_number_schema.MuseumNumberSchema, ebl.transliteration.application.text_schema.TextSchema, marshmallow.Schema, marshmallow.fields
- Classes: FragmentInfoSchema, ApiFragmentInfoSchema, ApiFragmentInfosPaginationSchema

### `ebl/fragmentarium/application/fragment_matcher.py`

- Lines: 95
- Imports: attr, ebl.fragmentarium.application.fragment_repository.FragmentRepository, ebl.fragmentarium.application.line_to_vec.LineToVecScore, ebl.fragmentarium.application.matches.line_to_vec_score.score, ebl.fragmentarium.application.matches.line_to_vec_score.score_weighted, ebl.fragmentarium.domain.line_to_vec_encoding.LineToVecEncodings, ebl.transliteration.domain.museum_number.MuseumNumber, typing.ClassVar, typing.List, typing.Tuple
- Classes: LineToVecRanking, LineToVecRanker, FragmentMatcher
- Methods in LineToVecRanker: score, score_weighted, ranking, insert_score, _insert_score
- Methods in FragmentMatcher: __init__, _parse_candidate, rank_line_to_vec
- Functions: sort_scores_to_list

### `ebl/fragmentarium/application/fragment_pager_info_schema.py`

- Lines: 6
- Imports: marshmallow.Schema, marshmallow.fields
- Classes: FragmentPagerInfoSchema

### `ebl/fragmentarium/application/fragment_repository.py`

- Lines: 139
- Imports: abc.ABC, abc.abstractmethod, ebl.common.domain.scopes.Scope, ebl.common.query.query_result.AfORegisterToFragmentQueryResult, ebl.common.query.query_result.QueryResult, ebl.fragmentarium.application.line_to_vec.LineToVecEntry, ebl.fragmentarium.domain.archaeology.ExcavationNumber, ebl.fragmentarium.domain.date.Date, ebl.fragmentarium.domain.fragment.Fragment, ebl.fragmentarium.domain.fragment_info.FragmentInfo, ebl.fragmentarium.domain.fragment_pager_info.FragmentPagerInfo, ebl.transliteration.domain.museum_number.MuseumNumber, typing.List, typing.Optional, typing.Sequence, typing.Union
- Classes: FragmentRepository
- Methods in FragmentRepository: create_indexes, create, create_many, count_transliterated_fragments, count_lines, count_total_fragments, query_by_museum_number, query_by_traditional_references, query_random_by_transliterated, query_path_of_the_pioneers, query_by_transliterated_not_revised_by_other, query_transliterated_numbers, query_transliterated_line_to_vec, query_next_and_previous_folio, query_next_and_previous_fragment, update_field, query, query_latest, fetch_scopes, fetch_names, fetch_date, list_all_fragments, retrieve_transliterated_fragments, fetch_fragment_signs, fetch_fragment_ocred_signs

### `ebl/fragmentarium/application/fragment_schema.py`

- Lines: 143
- Imports: ebl.bibliography.application.reference_schema.ReferenceSchema, ebl.common.application.schemas.AccessionSchema, ebl.fragmentarium.application.archaeology_schemas.ArchaeologySchema, ebl.fragmentarium.application.colophon_schema.ColophonSchema, ebl.fragmentarium.application.fragment_fields_schemas.AcquisitionSchema, ebl.fragmentarium.application.fragment_fields_schemas.DossierReferenceSchema, ebl.fragmentarium.application.fragment_fields_schemas.ExternalNumbersSchema, ebl.fragmentarium.application.fragment_fields_schemas.FoliosSchema, ebl.fragmentarium.application.fragment_fields_schemas.IntroductionSchema, ebl.fragmentarium.application.fragment_fields_schemas.MeasureSchema, ebl.fragmentarium.application.fragment_fields_schemas.NotesSchema, ebl.fragmentarium.application.fragment_fields_schemas.RecordSchema, ebl.fragmentarium.application.fragment_fields_schemas.ScriptSchema, ebl.fragmentarium.application.fragment_fields_schemas.UncuratedReferenceSchema, ebl.fragmentarium.application.genre_schema.GenreSchema, ebl.fragmentarium.application.joins_schema.JoinsSchema, ebl.fragmentarium.application.named_entity_schema.NamedEntitySchema, ebl.fragmentarium.domain.date.DateSchema, ebl.fragmentarium.domain.fragment.Fragment, ebl.fragmentarium.domain.fragment.Introduction
- Classes: FragmentSchema
- Methods in FragmentSchema: make_fragment, filter_none

### `ebl/fragmentarium/application/fragment_updater.py`

- Lines: 205
- Imports: ebl.bibliography.application.bibliography.Bibliography, ebl.bibliography.domain.reference.Reference, ebl.changelog.Changelog, ebl.files.application.file_repository.FileRepository, ebl.fragmentarium.application.fragment_repository.FragmentRepository, ebl.fragmentarium.application.fragment_schema.FragmentSchema, ebl.fragmentarium.domain.archaeology.Archaeology, ebl.fragmentarium.domain.colophon.Colophon, ebl.fragmentarium.domain.date.Date, ebl.fragmentarium.domain.fragment.Fragment, ebl.fragmentarium.domain.fragment.Genre, ebl.fragmentarium.domain.fragment.Script, ebl.fragmentarium.domain.named_entity.EntityAnnotationSpan, ebl.fragmentarium.domain.token_annotation.TextLemmaAnnotation, ebl.fragmentarium.domain.transliteration_update.TransliterationUpdate, ebl.lemmatization.domain.lemmatization.Lemmatization, ebl.transliteration.application.parallel_line_injector.ParallelLineInjector, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.users.domain.user.User, enum.Enum
- Constants: COLLECTION
- Classes: FragmentUpdater
- Methods in FragmentUpdater: __init__, update_edition, update_script, update_date, update_dates_in_text, update_genres, update_scopes, update_lemmatization, update_lemma_annotation, update_references, update_archaeology, update_colophon, _create_result, _create_changelog, update_named_entities

### `ebl/fragmentarium/application/fragmentarium.py`

- Lines: 30
- Imports: ebl.common.domain.scopes.Scope, ebl.fragmentarium.application.fragment_repository.FragmentRepository, ebl.fragmentarium.domain.fragment.Fragment, ebl.fragmentarium.domain.fragment_info.FragmentInfo, typing.Dict, typing.List, typing.Sequence
- Classes: Fragmentarium
- Methods in Fragmentarium: __init__, statistics, find_needs_revision, create

### `ebl/fragmentarium/application/genre_schema.py`

- Lines: 12
- Imports: ebl.fragmentarium.domain.fragment.Genre, marshmallow.Schema, marshmallow.fields, marshmallow.post_load
- Classes: GenreSchema
- Methods in GenreSchema: make_genre

### `ebl/fragmentarium/application/joins_schema.py`

- Lines: 31
- Imports: ebl.fragmentarium.domain.joins.Join, ebl.fragmentarium.domain.joins.Joins, ebl.transliteration.application.museum_number_schema.MuseumNumberSchema, marshmallow.Schema, marshmallow.fields, marshmallow.post_load
- Classes: JoinSchema, JoinsSchema
- Methods in JoinSchema: make_join
- Methods in JoinsSchema: make_joins

### `ebl/fragmentarium/application/line_to_vec.py`

- Lines: 20
- Imports: attr, ebl.fragmentarium.domain.fragment.Script, ebl.fragmentarium.domain.line_to_vec_encoding.LineToVecEncodings, ebl.transliteration.domain.museum_number.MuseumNumber, typing.Tuple
- Classes: LineToVecEntry, LineToVecScore

### `ebl/fragmentarium/application/line_to_vec_ranking_schema.py`

- Lines: 25
- Imports: ebl.fragmentarium.application.fragment_fields_schemas.ScriptSchema, ebl.fragmentarium.application.line_to_vec.LineToVecScore, ebl.fragmentarium.domain.fragment.Script, marshmallow.Schema, marshmallow.fields, marshmallow.pre_dump
- Classes: LineToVecScoreSchema, LineToVecRankingSchema
- Methods in LineToVecScoreSchema: make_museum_number_to_str

### `ebl/fragmentarium/application/matches/__init__.py`

- Lines: 0

### `ebl/fragmentarium/application/matches/create_line_to_vec.py`

- Lines: 164
- Imports: attr, ebl.fragmentarium.domain.line_to_vec_encoding.LineToVecEncoding, ebl.fragmentarium.domain.line_to_vec_encoding.LineToVecEncodings, ebl.transliteration.domain.atf, ebl.transliteration.domain.dollar_line.RulingDollarLine, ebl.transliteration.domain.dollar_line.StateDollarLine, ebl.transliteration.domain.line.Line, ebl.transliteration.domain.line_number.AbstractLineNumber, ebl.transliteration.domain.line_number.LineNumber, ebl.transliteration.domain.line_number.LineNumberRange, ebl.transliteration.domain.text_line.TextLine, functools.reduce, functools.singledispatch, functools.singledispatchmethod, typing.Sequence, typing.Tuple
- Classes: LineSplits
- Methods in LineSplits: add_line, _, _open_split, _add_to_split
- Functions: get_line_number_prime, _get_line_number_prime, _get_line_number_range_prime, get_line_number_prefix_modifier, get_line_number_prefix_modifier_line_number, _get_line_number_prefix_modifier_line_number_range, parse_text_line, _parse_text_line, _parse_text_line_line_number_range, line_to_vec, _line_to_vec_text, _line_to_vec_ruling, _line_to_vec_state, get_line_number, _get_line_number, _get_line_number_range, split_lines, create_line_to_vec

### `ebl/fragmentarium/application/matches/line_to_vec_score.py`

- Lines: 72
- Imports: ebl.fragmentarium.domain.line_to_vec_encoding.LineToVecEncoding, ebl.fragmentarium.domain.line_to_vec_encoding.LineToVecEncodings, itertools, pydash, typing.List, typing.Tuple
- Functions: score, score_weighted, list_of_overalps, compute_score_for_all, compute_score, weight_subsequence

### `ebl/fragmentarium/application/named_entity_schema.py`

- Lines: 30
- Imports: ebl.fragmentarium.domain.named_entity.EntityAnnotationSpan, ebl.fragmentarium.domain.named_entity.NamedEntity, ebl.fragmentarium.domain.named_entity.NamedEntityType, marshmallow.Schema, marshmallow.fields, marshmallow.post_load
- Classes: AbstractNamedEntitySchema, NamedEntitySchema, EntityAnnotationSpanSchema
- Methods in NamedEntitySchema: make_entity
- Methods in EntityAnnotationSpanSchema: make_entity_span

### `ebl/fragmentarium/application/transliteration_update_factory.py`

- Lines: 25
- Imports: ebl.fragmentarium.domain.transliteration_update.TransliterationUpdate, ebl.transliteration.application.sign_repository.SignRepository, ebl.transliteration.application.signs_visitor.SignsVisitor, ebl.transliteration.domain.atf.Atf, ebl.transliteration.domain.atf.WORD_SEPARATOR, ebl.transliteration.domain.atf_parsers.lark_parser.parse_atf_lark, ebl.transliteration.domain.text.Text, ebl.transliteration.domain.text.TextLine
- Classes: TransliterationUpdateFactory
- Methods in TransliterationUpdateFactory: __init__, create, create_from_text, _map_line

### `ebl/fragmentarium/domain/__init__.py`

- Lines: 0

### `ebl/fragmentarium/domain/annotation.py`

- Lines: 161
- Imports: PIL.Image, attr, base64, ebl.fragmentarium.application.cropped_sign_image.Base64, ebl.fragmentarium.application.cropped_sign_image.CroppedSign, ebl.fragmentarium.domain.fragment.Script, ebl.transliteration.domain.museum_number.MuseumNumber, enum.Enum, io, typing.Optional, typing.Sequence, uuid.uuid4
- Classes: Geometry, AnnotationValueType, AnnotationData, PcaClustering, Annotation, BoundingBox, BoundingBoxPrediction, Annotations
- Methods in Annotation: crop_image, from_prediction
- Methods in BoundingBox: to_list, from_relative_coordinates, from_annotations
- Methods in Annotations: from_bounding_boxes_predictions

### `ebl/fragmentarium/domain/archaeology.py`

- Lines: 26
- Imports: attr, ebl.fragmentarium.domain.date_range.DateRange, ebl.fragmentarium.domain.findspot.ExcavationSite, ebl.fragmentarium.domain.findspot.Findspot, ebl.transliteration.domain.museum_number.MuseumNumber, re, typing.Optional
- Classes: ExcavationNumber, Archaeology
- Methods in ExcavationNumber: of

### `ebl/fragmentarium/domain/colophon.py`

- Lines: 94
- Imports: attr, enum.Enum, typing.List, typing.Optional
- Classes: ColophonStatus, ColophonType, ColophonOwnership, IndividualType, NameAttestation, ProvenanceAttestation, IndividualTypeAttestation, IndividualAttestation, Colophon

### `ebl/fragmentarium/domain/date.py`

- Lines: 147
- Imports: attr, ebl.chronology.chronology.Eponym, ebl.chronology.chronology.EponymSchema, ebl.chronology.chronology.King, ebl.chronology.chronology.chronology, ebl.schemas.ValueEnumField, enum.Enum, marshmallow.EXCLUDE, marshmallow.Schema, marshmallow.fields, marshmallow.post_dump, marshmallow.post_load, pydash, typing.Optional
- Classes: Ur3Calendar, Year, Month, Day, DateKing, DateEponym, Date, LabeledSchema, YearSchema, MonthSchema, DaySchema, DateKingSchema, DateEponymSchema, DateSchema
- Methods in DateKing: king
- Methods in LabeledSchema: filter_none
- Methods in YearSchema: make_year
- Methods in MonthSchema: make_month

### `ebl/fragmentarium/domain/date_range.py`

- Lines: 17
- Imports: attr, typing.Optional
- Classes: PartialDate, DateRange

### `ebl/fragmentarium/domain/findspot.py`

- Lines: 41
- Imports: attr, ebl.bibliography.domain.reference.Reference, ebl.common.domain.provenance.Provenance, ebl.fragmentarium.domain.date_range.DateRange, enum.Enum, enum.auto, typing.Optional, typing.Sequence
- Classes: BuildingType, ExcavationPlan, Findspot

### `ebl/fragmentarium/domain/folios.py`

- Lines: 24
- Imports: attr, typing.Sequence
- Classes: Folio, Folios
- Methods in Folio: file_name
- Methods in Folios: filter

### `ebl/fragmentarium/domain/fragment.py`

- Lines: 310
- Imports: attr, ebl.bibliography.domain.reference.Reference, ebl.common.domain.accession.Accession, ebl.common.domain.period.Period, ebl.common.domain.period.PeriodModifier, ebl.common.domain.scopes.Scope, ebl.fragmentarium.application.matches.create_line_to_vec.create_line_to_vec, ebl.fragmentarium.domain.archaeology.Archaeology, ebl.fragmentarium.domain.colophon.Colophon, ebl.fragmentarium.domain.date.Date, ebl.fragmentarium.domain.folios.Folios, ebl.fragmentarium.domain.fragment_external_numbers.ExternalNumbers, ebl.fragmentarium.domain.fragment_external_numbers.FragmentExternalNumbers, ebl.fragmentarium.domain.genres.genres, ebl.fragmentarium.domain.joins.Joins, ebl.fragmentarium.domain.line_to_vec_encoding.LineToVecEncodings, ebl.fragmentarium.domain.museum.Museum, ebl.fragmentarium.domain.named_entity.EntityAnnotationSpan, ebl.fragmentarium.domain.named_entity.NamedEntity, ebl.fragmentarium.domain.record.Record
- Classes: NotLowestJoinError, UncuratedReference, Measure, Acquisition, Genre, MarkupText, Introduction, Notes, Script, DossierReference, Fragment
- Methods in Acquisition: of
- Methods in Genre: _check_is_genres_valid
- Methods in Script: __str__, abbreviation
- Functions: parse_markup_with_paragraphs

### `ebl/fragmentarium/domain/fragment_external_numbers.py`

- Lines: 154
- Imports: attr, typing.Sequence
- Classes: ExternalNumbers, FragmentExternalNumbers
- Methods in FragmentExternalNumbers: _get_external_number, cdli_number, bm_id_number, archibab_number, bdtns_number, rsti_number, chicago_isac_number, ur_online_number, hilprecht_jena_number, hilprecht_heidelberg_number, yale_peabody_number, metropolitan_number, pierpont_morgan_number, louvre_number, ontario_number, kelsey_number, harvard_ham_number, sketchfab_number, ark_number, dublin_tcd_number, cambridge_maa_number, ashmolean_number, alalah_hpm_number, australianinstituteofarchaeology_number, achemenet_number

### `ebl/fragmentarium/domain/fragment_info.py`

- Lines: 59
- Imports: attr, ebl.bibliography.domain.reference.Reference, ebl.common.domain.accession.Accession, ebl.fragmentarium.domain.fragment.Acquisition, ebl.fragmentarium.domain.fragment.Fragment, ebl.fragmentarium.domain.fragment.Genre, ebl.fragmentarium.domain.fragment.Script, ebl.fragmentarium.domain.record.RecordEntry, ebl.fragmentarium.domain.record.RecordType, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.transliteration.domain.text.Text, typing.Optional, typing.Sequence
- Classes: FragmentInfo
- Methods in FragmentInfo: set_references, of

### `ebl/fragmentarium/domain/fragment_infos_pagination.py`

- Lines: 11
- Imports: attr, ebl.fragmentarium.domain.fragment_info.FragmentInfo, typing.Sequence
- Classes: FragmentInfosPagination

### `ebl/fragmentarium/domain/fragment_pager_info.py`

- Lines: 9
- Imports: attr, ebl.transliteration.domain.museum_number.MuseumNumber
- Classes: FragmentPagerInfo

### `ebl/fragmentarium/domain/genres.py`

- Lines: 640

### `ebl/fragmentarium/domain/joins.py`

- Lines: 40
- Imports: attr, ebl.transliteration.domain.museum_number.MuseumNumber, pydash, typing.Optional, typing.Sequence
- Classes: Join, Joins
- Methods in Joins: fragments, lowest

### `ebl/fragmentarium/domain/line_to_vec_encoding.py`

- Lines: 18
- Imports: enum.Enum, typing.Sequence, typing.Tuple
- Classes: LineToVecEncoding
- Methods in LineToVecEncoding: from_list

### `ebl/fragmentarium/domain/museum.py`

- Lines: 353
- Imports: enum.Enum
- Classes: Museum
- Methods in Museum: __init__

### `ebl/fragmentarium/domain/named_entity.py`

- Lines: 32
- Imports: attr, ebl.common.domain.named_enum.NamedEnum, typing.List
- Classes: NamedEntityType, NamedEntity, EntityAnnotationSpan
- Methods in EntityAnnotationSpan: to_named_entity

### `ebl/fragmentarium/domain/record.py`

- Lines: 56
- Imports: attr, datetime, ebl.users.domain.user.User, enum.Enum, typing.Sequence
- Classes: RecordType, RecordEntry, Record
- Methods in RecordEntry: transliteration, revision
- Methods in Record: add_entry, _create_entry
- Functions: now

### `ebl/fragmentarium/domain/token_annotation.py`

- Lines: 12
- Imports: ebl.lemmatization.domain.lemmatization.Lemma, typing.Dict, typing.NewType

### `ebl/fragmentarium/domain/transliteration_update.py`

- Lines: 38
- Imports: attr, ebl.transliteration.domain.text.Text, ebl.transliteration.domain.transliteration_error.ErrorAnnotation, ebl.transliteration.domain.transliteration_error.TransliterationError, typing.List
- Classes: TransliterationUpdate
- Methods in TransliterationUpdate: _check_signs, _get_questionable_lines

### `ebl/fragmentarium/infrastructure/__init__.py`

- Lines: 0

### `ebl/fragmentarium/infrastructure/collections.py`

- Lines: 1
- Constants: JOINS_COLLECTION

### `ebl/fragmentarium/infrastructure/cropped_sign_images_repository.py`

- Lines: 33
- Imports: ebl.fragmentarium.application.cropped_sign_image.CroppedSignImageSchema, ebl.fragmentarium.application.cropped_sign_images_repository.CroppedSignImage, ebl.fragmentarium.application.cropped_sign_images_repository.CroppedSignImagesRepository, ebl.mongo_collection.MongoCollection, ebl.transliteration.domain.museum_number.MuseumNumber, pymongo.database.Database, typing.Sequence
- Constants: COLLECTION
- Classes: MongoCroppedSignImagesRepository
- Methods in MongoCroppedSignImagesRepository: __init__, create_many, query_by_id, delete_by_fragment_number

### `ebl/fragmentarium/infrastructure/fragment_lemma_matcher.py`

- Lines: 138
- Imports: ebl.common.query.query_result.LemmaQueryType, ebl.common.query.util.drop_duplicates, ebl.common.query.util.flatten_field, ebl.common.query.util.ngrams, typing.Dict, typing.List
- Classes: EmptyMatcher, LemmaMatcher
- Methods in EmptyMatcher: build_pipeline, __bool__
- Methods in LemmaMatcher: __init__, build_pipeline, _flatten_lemmas, _explode_lines, _rejoin_lines, _create_match_pipeline, _and, _or, _line, _phrase

### `ebl/fragmentarium/infrastructure/fragment_pattern_matcher.py`

- Lines: 226
- Imports: ebl.common.domain.provenance.Provenance, ebl.common.domain.scopes.Scope, ebl.common.query.query_result.LemmaQueryType, ebl.fragmentarium.infrastructure.fragment_lemma_matcher.EmptyMatcher, ebl.fragmentarium.infrastructure.fragment_lemma_matcher.LemmaMatcher, ebl.fragmentarium.infrastructure.fragment_sign_matcher.SignMatcher, ebl.fragmentarium.infrastructure.queries.match_user_scopes, ebl.fragmentarium.infrastructure.queries.number_is, pydash.arrays.compact, typing.Dict, typing.List, typing.Optional, typing.Sequence
- Classes: PatternMatcher
- Methods in PatternMatcher: __init__, _limit_result, _sort_by, _wrap_query_items_with_total, _filter_by_script, _filter_by_genre, _filter_by_museum, _filter_by_project, _filter_by_site, _filter_by_reference, _filter_by_dossier, _prefilter, _default_pipeline, _merge_pipelines, _get_pipeline_components, build_pipeline

### `ebl/fragmentarium/infrastructure/fragment_sign_matcher.py`

- Lines: 127
- Imports: ebl.common.query.util.flatten_field, ebl.common.query.util.ngrams, typing.Dict, typing.List, typing.Sequence
- Classes: SignMatcher
- Methods in SignMatcher: __init__, _prefilter_by_tokens, _match_multiline, _match_single_line, _expand_line_ranges, _map_signs_to_textlines, build_pipeline

### `ebl/fragmentarium/infrastructure/mongo_annotations_repository.py`

- Lines: 80
- Imports: ebl.errors.NotFoundError, ebl.fragmentarium.application.annotations_repository.AnnotationsRepository, ebl.fragmentarium.application.annotations_schema.AnnotationsSchema, ebl.fragmentarium.application.annotations_schema.AnnotationsWithScriptSchema, ebl.fragmentarium.domain.annotation.Annotations, ebl.mongo_collection.MongoCollection, ebl.transliteration.domain.museum_number.MuseumNumber, marshmallow.EXCLUDE, pymongo.database.Database, re, typing.List, typing.Sequence
- Constants: COLLECTION
- Classes: MongoAnnotationsRepository
- Methods in MongoAnnotationsRepository: __init__, create_or_update, query_by_museum_number, retrieve_all_non_empty, find_by_sign

### `ebl/fragmentarium/infrastructure/mongo_findspot_repository.py`

- Lines: 16
- Imports: ebl.fragmentarium.application.archaeology_schemas.FindspotSchema, ebl.fragmentarium.domain.findspot.Findspot, ebl.mongo_collection.MongoCollection, ebl.transliteration.infrastructure.collections.FINDSPOTS_COLLECTION, typing.Sequence
- Classes: MongoFindspotRepository
- Methods in MongoFindspotRepository: __init__, create, find_all

### `ebl/fragmentarium/infrastructure/mongo_fragment_repository.py`

- Lines: 128
- Imports: ebl.fragmentarium.application.fragment_schema.FragmentSchema, ebl.fragmentarium.infrastructure.mongo_fragment_repository_create.MongoFragmentRepositoryCreate, ebl.fragmentarium.infrastructure.mongo_fragment_repository_get.MongoFragmentRepositoryGet, ebl.fragmentarium.infrastructure.queries.HAS_TRANSLITERATION, ebl.fragmentarium.infrastructure.queries.fragment_is, ebl.transliteration.infrastructure.queries.query_number_is, pymongo
- Classes: MongoFragmentRepository
- Methods in MongoFragmentRepository: __init__, create_indexes, count_total_fragments, count_transliterated_fragments, count_lines, update_field

### `ebl/fragmentarium/infrastructure/mongo_fragment_repository_base.py`

- Lines: 17
- Imports: ebl.fragmentarium.application.fragment_repository.FragmentRepository, ebl.fragmentarium.application.fragment_schema.FragmentSchema, ebl.fragmentarium.domain.fragment.Fragment, ebl.fragmentarium.infrastructure.collections.JOINS_COLLECTION, ebl.mongo_collection.MongoCollection, ebl.transliteration.infrastructure.collections.FRAGMENTS_COLLECTION, marshmallow.EXCLUDE, typing.Sequence
- Classes: MongoFragmentRepositoryBase
- Methods in MongoFragmentRepositoryBase: __init__, _map_fragments

### `ebl/fragmentarium/infrastructure/mongo_fragment_repository_create.py`

- Lines: 46
- Imports: ebl.fragmentarium.application.fragment_schema.FragmentSchema, ebl.fragmentarium.application.joins_schema.JoinSchema, ebl.fragmentarium.domain.fragment.Fragment, ebl.fragmentarium.domain.joins.Join, ebl.fragmentarium.infrastructure.mongo_fragment_repository_base.MongoFragmentRepositoryBase, typing.Sequence
- Classes: MongoFragmentRepositoryCreate
- Methods in MongoFragmentRepositoryCreate: __init__, create, create_many, create_join

### `ebl/fragmentarium/infrastructure/mongo_fragment_repository_get.py`

- Lines: 380
- Imports: ebl.bibliography.infrastructure.bibliography.join_reference_documents, ebl.common.domain.scopes.Scope, ebl.common.query.query_result.AfORegisterToFragmentQueryResult, ebl.common.query.query_result.QueryResult, ebl.common.query.query_schemas.AfORegisterToFragmentQueryResultSchema, ebl.common.query.query_schemas.QueryResultSchema, ebl.errors.NotFoundError, ebl.fragmentarium.application.fragment_schema.FragmentSchema, ebl.fragmentarium.domain.archaeology.ExcavationNumber, ebl.fragmentarium.domain.fragment_pager_info.FragmentPagerInfo, ebl.fragmentarium.infrastructure.fragment_pattern_matcher.PatternMatcher, ebl.fragmentarium.infrastructure.mongo_fragment_repository_base.MongoFragmentRepositoryBase, ebl.fragmentarium.infrastructure.mongo_fragment_repository_get_extended.MongoFragmentRepositoryGetExtended, ebl.fragmentarium.infrastructure.queries.HAS_TRANSLITERATION, ebl.fragmentarium.infrastructure.queries.aggregate_by_traditional_references, ebl.fragmentarium.infrastructure.queries.aggregate_latest, ebl.fragmentarium.infrastructure.queries.join_findspots, ebl.fragmentarium.infrastructure.queries.join_joins, ebl.fragmentarium.infrastructure.queries.match_user_scopes, ebl.transliteration.application.museum_number_schema.MuseumNumberSchema
- Constants: RETRIEVE_ALL_LIMIT
- Classes: MongoFragmentRepositoryGetBase, MongoFragmentRepositoryGet
- Methods in MongoFragmentRepositoryGetBase: __init__, _omit_text_lines, _filter_fragment_lines, query_by_museum_number, query_museum_numbers, query_by_sort_key, query_next_and_previous_fragment, query, query_latest, query_by_traditional_references, list_all_fragments, retrieve_transliterated_fragments, collect_lemmas
- Methods in MongoFragmentRepositoryGet: __init__
- Functions: load_museum_number, load_query_result, chapter_lemma_pipeline, fragment_lemma_pipeline, aggregate_counts

### `ebl/fragmentarium/infrastructure/mongo_fragment_repository_get_extended.py`

- Lines: 206
- Imports: ebl.common.domain.scopes.Scope, ebl.common.query.query_collation.CollatedFieldQuery, ebl.errors.NotFoundError, ebl.fragmentarium.application.fragment_fields_schemas.ScriptSchema, ebl.fragmentarium.application.fragment_info_schema.FragmentInfoSchema, ebl.fragmentarium.application.line_to_vec.LineToVecEntry, ebl.fragmentarium.domain.date.Date, ebl.fragmentarium.domain.date.DateSchema, ebl.fragmentarium.domain.line_to_vec_encoding.LineToVecEncoding, ebl.fragmentarium.infrastructure.mongo_fragment_repository_base.MongoFragmentRepositoryBase, ebl.fragmentarium.infrastructure.queries.HAS_TRANSLITERATION, ebl.fragmentarium.infrastructure.queries.aggregate_needs_revision, ebl.fragmentarium.infrastructure.queries.aggregate_path_of_the_pioneers, ebl.fragmentarium.infrastructure.queries.aggregate_random, ebl.transliteration.application.museum_number_schema.MuseumNumberSchema, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.transliteration.infrastructure.queries.query_number_is, marshmallow.EXCLUDE, pymongo, typing.List
- Classes: MongoFragmentRepositoryGetExtended
- Methods in MongoFragmentRepositoryGetExtended: __init__, query_random_by_transliterated, query_path_of_the_pioneers, query_transliterated_numbers, query_transliterated_line_to_vec, query_by_transliterated_not_revised_by_other, query_next_and_previous_folio, fetch_fragment_signs, fetch_fragment_ocred_signs, fetch_date, fetch_scopes, fetch_names
- Functions: has_none_values, _get_colophon_names_query

### `ebl/fragmentarium/infrastructure/queries.py`

- Lines: 414
- Imports: ebl.common.domain.accession.Accession, ebl.common.domain.scopes.Scope, ebl.fragmentarium.domain.archaeology.ExcavationNumber, ebl.fragmentarium.domain.fragment.Fragment, ebl.fragmentarium.domain.record.RecordType, ebl.fragmentarium.infrastructure.collections.JOINS_COLLECTION, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.transliteration.infrastructure.collections.FINDSPOTS_COLLECTION, ebl.transliteration.infrastructure.collections.FRAGMENTS_COLLECTION, ebl.transliteration.infrastructure.queries.query_number_is, typing.Dict, typing.List, typing.Sequence
- Functions: fragment_is, number_is, sample_size_one, match_user_scopes, aggregate_random, exclude_restricted_fragments, aggregate_latest, aggregate_needs_revision, aggregate_path_of_the_pioneers, is_in_fragmentarium, join_joins, join_findspots, aggregate_by_traditional_references

### `ebl/fragmentarium/migrate_cropped_images.py`

- Lines: 156
- Imports: ebl.app.create_context, ebl.context.Context, ebl.fragmentarium.application.annotations_service.AnnotationsService, ebl.transliteration.domain.museum_number.MuseumNumber, logging, os, pymongo.MongoClient
- Functions: get_database, create_annotations_service, show_statistics, cleanup_existing_images, regenerate_images, migrate_cropped_images, main

### `ebl/fragmentarium/retrieve_annotations.py`

- Lines: 323
- Imports: PIL.Image, argparse, datetime.date, ebl.app.create_context, ebl.files.application.file_repository.FileRepository, ebl.fragmentarium.domain.annotation.Annotation, ebl.fragmentarium.domain.annotation.AnnotationData, ebl.fragmentarium.domain.annotation.AnnotationValueType, ebl.fragmentarium.domain.annotation.Annotations, ebl.fragmentarium.domain.annotation.BoundingBox, io.BytesIO, itertools.zip_longest, json, os, os.path.join, pathlib.Path, shutil, typing.Sequence, typing.Tuple, typing.Union
- Constants: MINIMUM_BOUNDING_BOX_SIZE
- Functions: filter_empty_annotation, filter_annotation, match, parse_annotations, sign_to_sign_ground_truth, prepare_annotations, create_annotations, write_annotations, create_directory, write_fragment_numbers, main

### `ebl/fragmentarium/retrieve_msZl_and_sign.py`

- Lines: 14
- Imports: ebl.app.create_context

### `ebl/fragmentarium/update_fragments.py`

- Lines: 159
- Imports: argparse, attr, ebl.app.create_context, ebl.context.Context, ebl.fragmentarium.application.fragment_repository.FragmentRepository, ebl.fragmentarium.application.fragment_updater.FragmentUpdater, ebl.fragmentarium.application.transliteration_update_factory.TransliterationUpdateFactory, ebl.fragmentarium.domain.fragment.Fragment, ebl.lemmatization.domain.lemmatization.LemmatizationError, ebl.signs.infrastructure.memoizing_sign_repository.MemoizingSignRepository, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.transliteration.domain.transliteration_error.TransliterationError, ebl.users.domain.user.ApiUser, functools.reduce, multiprocessing.Pool, tqdm.tqdm, typing.List
- Classes: State
- Methods in State: add_updated, add_error, add_querying_error, _add_lemmatization_error, _add_transliteration_error, _add_error, to_tsv, merge
- Functions: update_fragment, find_transliterated, update, create_context_

### `ebl/fragmentarium/update_ocred_signs.py`

- Lines: 168
- Imports: argparse, ebl.transliteration.domain.museum_number.MuseumNumber, json, os, pymongo.MongoClient, tqdm.tqdm
- Functions: get_database, update_ocred_signs, parse_museum_number, extract_museum_number_from_filename, update_from_json_file, update_single_fragment, main

### `ebl/fragmentarium/web/__init__.py`

- Lines: 0

### `ebl/fragmentarium/web/annotations.py`

- Lines: 36
- Imports: ebl.fragmentarium.application.annotations_schema.AnnotationsSchema, ebl.fragmentarium.application.annotations_service.AnnotationsService, ebl.fragmentarium.web.dtos.parse_museum_number, ebl.marshmallowschema.validate, ebl.users.web.require_scope.require_scope, falcon
- Classes: AnnotationResource
- Methods in AnnotationResource: __init__, on_post, on_get

### `ebl/fragmentarium/web/archaeology.py`

- Lines: 40
- Imports: ebl.fragmentarium.application.archaeology_schemas.ArchaeologySchema, ebl.fragmentarium.application.archaeology_schemas.ExcavationNumberSchema, ebl.fragmentarium.application.fragment_updater.FragmentUpdater, ebl.fragmentarium.web.dtos.create_response_dto, ebl.fragmentarium.web.dtos.parse_museum_number, ebl.users.web.require_scope.require_scope, falcon, falcon.Request, falcon.Response, typing.Union
- Classes: ArchaeologyResource
- Methods in ArchaeologyResource: __init__, _parse_excavation_number, on_post

### `ebl/fragmentarium/web/bootstrap.py`

- Lines: 185
- Imports: ebl.context.Context, ebl.corpus.application.corpus.Corpus, ebl.corpus.web.chapters.ChaptersByFragmentResource, ebl.dictionary.application.dictionary_service.Dictionary, ebl.fragmentarium.application.annotations_service.AnnotationsService, ebl.fragmentarium.application.fragment_finder.FragmentFinder, ebl.fragmentarium.application.fragment_matcher.FragmentMatcher, ebl.fragmentarium.application.fragmentarium.Fragmentarium, ebl.fragmentarium.web.annotations.AnnotationResource, ebl.fragmentarium.web.archaeology.ArchaeologyResource, ebl.fragmentarium.web.colophons.ColophonNamesResource, ebl.fragmentarium.web.colophons.ColophonResource, ebl.fragmentarium.web.edition.EditionResource, ebl.fragmentarium.web.findspots.FindspotResource, ebl.fragmentarium.web.folio_pager.FolioPagerResource, ebl.fragmentarium.web.folios.FoliosResource, ebl.fragmentarium.web.fragment_date.FragmentDateResource, ebl.fragmentarium.web.fragment_date.FragmentDatesInTextResource, ebl.fragmentarium.web.fragment_genre.FragmentGenreResource, ebl.fragmentarium.web.fragment_matcher.FragmentMatcherResource
- Functions: create_fragmentarium_routes

### `ebl/fragmentarium/web/colophons.py`

- Lines: 38
- Imports: ebl.fragmentarium.application.colophon_schema.ColophonSchema, ebl.fragmentarium.application.fragment_repository.FragmentRepository, ebl.fragmentarium.application.fragment_updater.FragmentUpdater, ebl.fragmentarium.web.dtos.create_response_dto, ebl.fragmentarium.web.dtos.parse_museum_number, ebl.users.web.require_scope.require_scope, falcon, falcon.Request, falcon.Response
- Classes: ColophonResource, ColophonNamesResource
- Methods in ColophonResource: __init__, on_post
- Methods in ColophonNamesResource: __init__, on_get

### `ebl/fragmentarium/web/dtos.py`

- Lines: 45
- Imports: contextvars, ebl.bibliography.application.reference_schema.ApiReferenceSchema, ebl.errors.DataError, ebl.fragmentarium.application.fragment_schema.FragmentSchema, ebl.fragmentarium.domain.archaeology.ExcavationNumber, ebl.fragmentarium.domain.fragment.Fragment, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.users.domain.user.User, marshmallow.fields
- Classes: FragmentDtoSchema
- Functions: create_response_dto, parse_museum_number, parse_excavation_number

### `ebl/fragmentarium/web/edition.py`

- Lines: 85
- Imports: ebl.errors.DataError, ebl.fragmentarium.application.fragment_updater.FragmentUpdater, ebl.fragmentarium.application.transliteration_update_factory.TransliterationUpdateFactory, ebl.fragmentarium.domain.fragment.NotLowestJoinError, ebl.fragmentarium.domain.transliteration_update.TransliterationUpdate, ebl.fragmentarium.web.dtos.create_response_dto, ebl.fragmentarium.web.dtos.parse_museum_number, ebl.transliteration.domain.atf.Atf, ebl.transliteration.domain.transliteration_error.DuplicateLabelError, ebl.transliteration.domain.transliteration_error.ExtentLabelError, ebl.transliteration.domain.transliteration_error.TransliterationError, ebl.users.web.require_scope.require_scope, falcon, falcon.Request, falcon.Response, falcon.media.validators.jsonschema.validate, marshmallow.ValidationError, typing.Optional
- Constants: EDITION_DTO_SCHEMA
- Classes: EditionResource
- Methods in EditionResource: __init__, _create_transliteration, on_post

### `ebl/fragmentarium/web/findspots.py`

- Lines: 13
- Imports: ebl.fragmentarium.application.archaeology_schemas.FindspotSchema, ebl.fragmentarium.infrastructure.mongo_findspot_repository.MongoFindspotRepository, falcon.Request, falcon.Response
- Classes: FindspotResource
- Methods in FindspotResource: __init__, on_get

### `ebl/fragmentarium/web/folio_pager.py`

- Lines: 18
- Imports: ebl.fragmentarium.application.folio_pager_schema.FolioPagerInfoSchema, ebl.fragmentarium.application.fragment_finder.FragmentFinder, ebl.fragmentarium.web.dtos.parse_museum_number, ebl.users.web.require_scope.require_folio_scope, falcon
- Classes: FolioPagerResource
- Methods in FolioPagerResource: __init__, on_get

### `ebl/fragmentarium/web/folios.py`

- Lines: 19
- Imports: ebl.fragmentarium.application.fragment_finder.FragmentFinder, ebl.fragmentarium.domain.folios.Folio, ebl.users.web.require_scope.require_folio_scope, falcon, falcon.Request, falcon.Response
- Classes: FoliosResource
- Methods in FoliosResource: __init__, on_get

### `ebl/fragmentarium/web/fragment_date.py`

- Lines: 47
- Imports: ebl.errors.DataError, ebl.fragmentarium.application.fragment_updater.FragmentUpdater, ebl.fragmentarium.domain.date.DateSchema, ebl.fragmentarium.web.dtos.create_response_dto, ebl.fragmentarium.web.dtos.parse_museum_number, ebl.users.web.require_scope.require_scope, falcon, falcon.Request, falcon.Response, marshmallow.ValidationError
- Classes: FragmentDateResource, FragmentDatesInTextResource
- Methods in FragmentDateResource: __init__, on_post
- Methods in FragmentDatesInTextResource: __init__, on_post

### `ebl/fragmentarium/web/fragment_genre.py`

- Lines: 26
- Imports: ebl.errors.DataError, ebl.fragmentarium.application.fragment_updater.FragmentUpdater, ebl.fragmentarium.application.genre_schema.GenreSchema, ebl.fragmentarium.web.dtos.create_response_dto, ebl.fragmentarium.web.dtos.parse_museum_number, ebl.users.web.require_scope.require_scope, falcon, falcon.Request, falcon.Response
- Classes: FragmentGenreResource
- Methods in FragmentGenreResource: __init__, on_post

### `ebl/fragmentarium/web/fragment_matcher.py`

- Lines: 24
- Imports: ebl.errors.DataError, ebl.errors.NotFoundError, ebl.fragmentarium.application.fragment_matcher.FragmentMatcher, ebl.fragmentarium.application.line_to_vec_ranking_schema.LineToVecRankingSchema, ebl.users.web.require_scope.require_scope, falcon, falcon.Request, falcon.Response
- Classes: FragmentMatcherResource
- Methods in FragmentMatcherResource: __init__, on_get

### `ebl/fragmentarium/web/fragment_pager.py`

- Lines: 21
- Imports: ebl.fragmentarium.application.fragment_finder.FragmentFinder, ebl.fragmentarium.application.fragment_pager_info_schema.FragmentPagerInfoSchema, ebl.fragmentarium.web.dtos.parse_museum_number, ebl.users.web.require_scope.require_fragment_read_scope, falcon, falcon_caching.Cache
- Functions: make_fragment_pager_resource

### `ebl/fragmentarium/web/fragment_script.py`

- Lines: 27
- Imports: ebl.errors.DataError, ebl.fragmentarium.application.fragment_fields_schemas.ScriptSchema, ebl.fragmentarium.application.fragment_updater.FragmentUpdater, ebl.fragmentarium.web.dtos.create_response_dto, ebl.fragmentarium.web.dtos.parse_museum_number, ebl.users.web.require_scope.require_scope, falcon, falcon.Request, falcon.Response, marshmallow.ValidationError
- Classes: FragmentScriptResource
- Methods in FragmentScriptResource: __init__, on_post

### `ebl/fragmentarium/web/fragment_search.py`

- Lines: 74
- Imports: ebl.cache.application.cache.DEFAULT_TIMEOUT, ebl.cache.application.cache.cache_control, ebl.common.domain.scopes.Scope, ebl.dispatcher.create_dispatcher, ebl.errors.DataError, ebl.fragmentarium.application.fragment_finder.FragmentFinder, ebl.fragmentarium.application.fragment_info_schema.ApiFragmentInfoSchema, ebl.fragmentarium.application.fragmentarium.Fragmentarium, ebl.transliteration.application.transliteration_query_factory.TransliterationQueryFactory, falcon, falcon_caching.Cache, typing.Sequence, typing.Tuple
- Constants: CACHED_COMMANDS
- Classes: FragmentSearch
- Methods in FragmentSearch: __init__, _validate_pagination_index, _validate_pages, on_get

### `ebl/fragmentarium/web/fragments.py`

- Lines: 207
- Imports: ebl.cache.application.cache.DEFAULT_TIMEOUT, ebl.common.query.parameter_parser.parse_genre, ebl.common.query.parameter_parser.parse_integer_field, ebl.common.query.parameter_parser.parse_lemmas, ebl.common.query.parameter_parser.parse_lines, ebl.common.query.parameter_parser.parse_pages, ebl.common.query.parameter_parser.parse_transliteration, ebl.common.query.query_schemas.QueryResultSchema, ebl.errors.DataError, ebl.errors.NotFoundError, ebl.files.application.file_repository.FileRepository, ebl.fragmentarium.application.fragment_finder.FragmentFinder, ebl.fragmentarium.application.fragment_repository.FragmentRepository, ebl.fragmentarium.application.fragment_updater.FragmentUpdater, ebl.fragmentarium.web.dtos.create_response_dto, ebl.fragmentarium.web.dtos.parse_excavation_number, ebl.fragmentarium.web.dtos.parse_museum_number, ebl.schemas.ScopeField, ebl.transliteration.application.museum_number_schema.MuseumNumberSchema, ebl.transliteration.application.text_schema.TextSchema
- Classes: FragmentsRetrieveAllResource, FragmentsResource, FragmentsQueryResource, FragmentAuthorizedScopesResource, FragmentsListResource
- Methods in FragmentsRetrieveAllResource: __init__, _parse_skip, on_get
- Methods in FragmentsResource: __init__, on_get
- Methods in FragmentsQueryResource: __init__, on_get
- Methods in FragmentAuthorizedScopesResource: __init__, on_post
- Methods in FragmentsListResource: __init__, on_get
- Functions: make_latest_additions_resource, make_all_fragment_signs_resource, make_all_fragment_ocred_signs_resource

### `ebl/fragmentarium/web/fragments_afo_register.py`

- Lines: 26
- Imports: ebl.common.query.query_schemas.AfORegisterToFragmentQueryResultSchema, ebl.errors.DataError, ebl.fragmentarium.application.fragment_finder.FragmentFinder, ebl.fragmentarium.application.fragment_repository.FragmentRepository, falcon.Request, falcon.Response, marshmallow.ValidationError
- Classes: AfoRegisterFragmentsQueryResource
- Methods in AfoRegisterFragmentsQueryResource: __init__, on_post

### `ebl/fragmentarium/web/genres.py`

- Lines: 7
- Imports: ebl.fragmentarium.domain.genres.genres, falcon.Request, falcon.Response
- Classes: GenresResource
- Methods in GenresResource: on_get

### `ebl/fragmentarium/web/lemma_annotation.py`

- Lines: 81
- Imports: ebl.dictionary.application.word_repository.WordRepository, ebl.fragmentarium.application.fragment_repository.FragmentRepository, ebl.fragmentarium.application.fragment_updater.FragmentUpdater, ebl.fragmentarium.web.dtos.create_response_dto, ebl.fragmentarium.web.dtos.parse_museum_number, ebl.users.web.require_scope.require_scope, falcon, falcon.media.validators.jsonschema.validate
- Constants: LEMMA_ID, LINE_ANNOTATION_SCHEMA, LINE_INDEX, TOKEN_INDEX
- Classes: LemmaAnnotationResource, AutofillLemmasResource
- Methods in LemmaAnnotationResource: __init__, on_post
- Methods in AutofillLemmasResource: __init__, _collect_words, on_get
- Functions: cast_int_keys

### `ebl/fragmentarium/web/lemmatizations.py`

- Lines: 38
- Imports: ebl.fragmentarium.application.fragment_updater.FragmentUpdater, ebl.fragmentarium.web.dtos.create_response_dto, ebl.fragmentarium.web.dtos.parse_museum_number, ebl.lemmatization.domain.lemmatization.Lemmatization, ebl.marshmallowschema.validate, ebl.transliteration.application.lemmatization_schema.LemmatizationTokenSchema, ebl.users.web.require_scope.require_scope, falcon, marshmallow.Schema, marshmallow.fields, marshmallow.post_load
- Classes: LemmatizationSchema, LemmatizationResource
- Methods in LemmatizationSchema: make_lemmatization
- Methods in LemmatizationResource: __init__, on_post

### `ebl/fragmentarium/web/named_entities.py`

- Lines: 51
- Imports: ebl.fragmentarium.application.fragment_finder.FragmentFinder, ebl.fragmentarium.application.fragment_updater.FragmentUpdater, ebl.fragmentarium.application.named_entity_schema.EntityAnnotationSpanSchema, ebl.fragmentarium.application.named_entity_schema.NamedEntitySchema, ebl.fragmentarium.domain.fragment.Fragment, ebl.fragmentarium.web.dtos.create_response_dto, ebl.fragmentarium.web.dtos.parse_museum_number, ebl.marshmallowschema.validate, ebl.users.web.require_scope.require_scope, falcon.Request, falcon.Response, falcon.before, typing.List
- Classes: NamedEntityResource
- Methods in NamedEntityResource: __init__, _create_annotation_spans, on_get, on_post

### `ebl/fragmentarium/web/periods.py`

- Lines: 9
- Imports: ebl.common.domain.period.Period, falcon.Request, falcon.Response
- Classes: PeriodsResource
- Methods in PeriodsResource: on_get

### `ebl/fragmentarium/web/photo.py`

- Lines: 25
- Imports: ebl.fragmentarium.application.fragment_finder.FragmentFinder, ebl.fragmentarium.application.fragment_finder.ThumbnailSize, ebl.users.web.require_scope.require_fragment_read_scope, falcon, falcon.Response, typing.Optional
- Classes: PhotoResource
- Methods in PhotoResource: __init__, on_get

### `ebl/fragmentarium/web/provenances.py`

- Lines: 16
- Imports: ebl.common.domain.provenance.Provenance, falcon.Request, falcon.Response
- Classes: ProvenancesResource
- Methods in ProvenancesResource: on_get

### `ebl/fragmentarium/web/references.py`

- Lines: 33
- Imports: ebl.bibliography.application.reference_schema.ReferenceSchema, ebl.bibliography.domain.reference.Reference, ebl.fragmentarium.application.fragment_updater.FragmentUpdater, ebl.fragmentarium.web.dtos.create_response_dto, ebl.fragmentarium.web.dtos.parse_museum_number, ebl.marshmallowschema.validate, ebl.users.web.require_scope.require_scope, falcon, marshmallow.Schema, marshmallow.fields, marshmallow.post_load, typing.Sequence
- Classes: ReferencesDtoSchema, ReferencesResource
- Methods in ReferencesDtoSchema: get_references
- Methods in ReferencesResource: __init__, on_post

### `ebl/fragmentarium/web/statistics.py`

- Lines: 26
- Imports: ebl.cache.application.cache.DEFAULT_TIMEOUT, ebl.cache.application.cache.cache_control, ebl.fragmentarium.application.fragmentarium.Fragmentarium, falcon, falcon_caching.Cache, falcon_caching.utils.register, json
- Functions: make_statistics_resource

