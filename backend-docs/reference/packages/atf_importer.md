# Package Reference: ebl/atf_importer

- Files: 21
- Total lines: 2475

## File-Level API Summary

### `ebl/atf_importer/__init__.py`

- Lines: 0

### `ebl/atf_importer/application/__init__.py`

- Lines: 0

### `ebl/atf_importer/application/atf_importer.py`

- Lines: 132
- Imports: argparse, attr, ebl.app.create_context, ebl.atf_importer.application.atf_importer_config.AtfImporterConfig, ebl.atf_importer.application.database_importer.DatabaseImporter, ebl.atf_importer.application.glossary.Glossary, ebl.atf_importer.application.glossary.GlossaryParser, ebl.atf_importer.application.lines_getter.EblLinesGetter, ebl.atf_importer.application.logger.Logger, ebl.atf_importer.application.logger.LoggerUtil, ebl.atf_importer.domain.legacy_atf_converter.LegacyAtfConverter, ebl.context.Context, ebl.transliteration.domain.text.Text, glob, os, pymongo.MongoClient, typing.Any, typing.Dict, typing.List, typing.TypedDict
- Classes: AtfImporterArgs, AtfImporter
- Methods in AtfImporter: __init__, convert_to_ebl_lines, setup_importer, run_importer, process_file, import_into_database, cli, main

### `ebl/atf_importer/application/atf_importer_config.py`

- Lines: 35
- Imports: json, typing.Dict, typing.List, typing.Literal, typing.Optional, typing.TypedDict, typing.Union
- Classes: CliArgKwargs, CliArgument, AtfImporterConfigData, AtfImporterConfig
- Methods in AtfImporterConfig: __init__, __getitem__

### `ebl/atf_importer/application/database_importer.py`

- Lines: 224
- Imports: ebl.app.create_context, ebl.atf_importer.application.logger.Logger, ebl.errors.DataError, ebl.errors.NotFoundError, ebl.fragmentarium.application.fragment_repository.FragmentRepository, ebl.fragmentarium.application.fragment_updater.FragmentUpdater, ebl.fragmentarium.application.transliteration_update_factory.TransliterationUpdateFactory, ebl.fragmentarium.web.dtos.parse_museum_number, ebl.transliteration.domain.museum_number.MuseumNumber, ebl.transliteration.domain.text.Text, ebl.users.domain.user.AtfImporterUser, typing.List, typing.Optional, typing.Sequence
- Classes: DatabaseImporter, MuseumNumberGetter
- Methods in DatabaseImporter: __init__, import_into_database, check_and_import, _edition_overwrite_consent, _import, _check_fragment_and_edition_exist, _insert_transliterations
- Methods in MuseumNumberGetter: __init__, get_museum_number, _get_valid_museum_number_or_none, _get_museum_number_by_data, _find_museum_number_by_cdli, _find_museum_number_by_traditional_reference, _get_cdli_number_and_reference, _input_museum_number, _get_lowest_join_number

### `ebl/atf_importer/application/glossary.py`

- Lines: 148
- Imports: attr, os, re, typing.List, typing.Optional, typing.TypedDict
- Classes: FormEntry, SenseEntry, LexicalEntry, GlossaryQuery, Glossary, GlossaryParser
- Methods in Glossary: find, _entry_matches, _match_lemma, _match_guideword, _match_pos
- Methods in GlossaryParser: __init__, glossary, load_glossaries, parse, _extract_entry_blocks, _parse_entry_block, _parse_entry_header, _parse_forms, _parse_senses

### `ebl/atf_importer/application/lemma_line_handler.py`

- Lines: 197
- Imports: ebl.atf_importer.application.atf_importer_config.AtfImporterConfigData, ebl.atf_importer.application.glossary.Glossary, ebl.atf_importer.application.lemmatization.LemmaLookup, ebl.atf_importer.application.lemmatization.OraccLemmatizationToken, ebl.atf_importer.application.logger.Logger, ebl.atf_importer.domain.legacy_atf_converter.LegacyAtfConverter, ebl.transliteration.domain.enclosure_tokens.Removal, ebl.transliteration.domain.sign_tokens.Divider, ebl.transliteration.domain.sign_tokens.Logogram, ebl.transliteration.domain.sign_tokens.Reading, ebl.transliteration.domain.text.TextLine, ebl.transliteration.domain.tokens.Tabulation, ebl.transliteration.domain.tokens.Token, ebl.transliteration.domain.word_tokens.Word, typing.Any, typing.Dict, typing.List, typing.Optional, typing.Sequence, typing.Tuple
- Classes: LemmaLineHandler
- Methods in LemmaLineHandler: __init__, apply_lemmatization, input_lemmatization_line, parse_lemmatization_line, get_oracc_lemmatization_token, get_transliteration_tokens, is_token_lemmatizable, is_adjust_index, _map_removals, _is_remove_token, _is_lemmatizaton_length_match, _log_lemmatization_length_error

### `ebl/atf_importer/application/lemmatization.py`

- Lines: 188
- Imports: attr, ebl.atf_importer.application.atf_importer_config.AtfImporterConfigData, ebl.atf_importer.application.glossary.Glossary, ebl.atf_importer.application.logger.Logger, ebl.dictionary.domain.word.WordId, ebl.lemmatization.domain.lemmatization.LemmatizationToken, typing.Any, typing.Callable, typing.Dict, typing.List, typing.Optional, typing.TypedDict, typing.Union
- Classes: QueryArgs, OraccLemmatizationToken, LemmaLookup
- Methods in OraccLemmatizationToken: lemmatizable, lemmatization_token
- Methods in LemmaLookup: __init__, lookup_lemma, _enter_lemma_id_or_skip, _get_unique_lemmas, _lookup_standard_lemma, _query_sources, _query_database, _has_guideword, _log_warning_if_no_lemmas, _log_lemma_entered_by_user

### `ebl/atf_importer/application/lines_getter.py`

- Lines: 91
- Imports: collections.defaultdict, ebl.atf_importer.application.atf_importer_config.AtfImporterConfigData, ebl.atf_importer.application.glossary.Glossary, ebl.atf_importer.application.lemma_line_handler.LemmaLineHandler, ebl.atf_importer.application.logger.Logger, ebl.atf_importer.domain.legacy_atf_converter.LegacyAtfConverter, ebl.atf_importer.domain.line_context.LineContext, typing.Any, typing.Dict, typing.List, typing.Tuple
- Classes: EblLinesGetter
- Methods in EblLinesGetter: __init__, convert_to_ebl_lines, _handle_line_type, _handle_control_line, _handle_text_line, _log_line

### `ebl/atf_importer/application/logger.py`

- Lines: 87
- Imports: logging, os.PathLike, pathlib.Path, typing.Dict, typing.List, typing.Literal, typing.Optional, typing.Union, typing.get_args
- Classes: Logger, LoggerUtil
- Methods in Logger: __init__, setLevel, format_text, debug, info, warning, error, exception, write_logs, _write_log, _append_to_data
- Methods in LoggerUtil: print_frame

### `ebl/atf_importer/domain/__init__.py`

- Lines: 0

### `ebl/atf_importer/domain/atf_conversions.py`

- Lines: 63
- Imports: lark.Tree, lark.Visitor, lark.lexer, typing.List, typing.Tuple
- Classes: DepthFirstSearch, GetWords, GetLemmaValuesAndGuidewords
- Methods in DepthFirstSearch: visit_topdown
- Methods in GetWords: __init__, ebl_atf_text_line__word
- Methods in GetLemmaValuesAndGuidewords: __init__, oracc_atf_lem_line__lemma, _get_oracc_atf_lem_line__value_part, _get_child_data

### `ebl/atf_importer/domain/atf_importer_config.json`

- Lines: 102
- JSON configuration or dataset file.

### `ebl/atf_importer/domain/atf_indexing_visitor.py`

- Lines: 69
- Imports: ebl.transliteration.domain.common_transformer.CommonTransformer, lark.visitors.Token, lark.visitors.Tree, lark.visitors.Visitor, roman
- Classes: IndexingVisitor
- Methods in IndexingVisitor: __init__, reset, ebl_atf_at_line__surface_with_status, _tree_to_string, ebl_atf_at_line__legacy_column, ebl_atf_at_line__column, text_line, cursor_index

### `ebl/atf_importer/domain/atf_preprocessor.py`

- Lines: 243
- Imports: ebl.atf_importer.application.logger.Logger, re
- Classes: AtfPreprocessor
- Methods in AtfPreprocessor: __init__, preprocess_line, preprocess_line_by_type, _handle_text_line, _handle_text_line_content, _handle_dollar_line, _handle_note_line, _replace_special_characters, _reorder_bracket_punctuation, _reorder_round_bracket_punctuation, _uppercase_underscore, _lowercase_braces, _replace_traces_markup, _replace_tabulation, _replace_tabs_and_excessive_whitespaces, _move_brackets_before_subscripts, _handle_closing_bracket_for_subscript, _handle_opening_bracket_for_subscript, _strip_dollar_line_excessive_parantheses, _remove_plus_in_lem_lines, _strip_matching_parentheses, _reorder_bracket_and_joiner

### `ebl/atf_importer/domain/legacy_atf_converter.py`

- Lines: 250
- Imports: codecs, ebl.atf_importer.application.atf_importer_config.AtfImporterConfigData, ebl.atf_importer.application.glossary.Glossary, ebl.atf_importer.application.lemmatization.LemmaLookup, ebl.atf_importer.application.logger.Logger, ebl.atf_importer.application.logger.LoggerUtil, ebl.atf_importer.domain.atf_conversions.GetLemmaValuesAndGuidewords, ebl.atf_importer.domain.atf_conversions.GetWords, ebl.atf_importer.domain.atf_indexing_visitor.IndexingVisitor, ebl.atf_importer.domain.atf_preprocessor.AtfPreprocessor, ebl.atf_importer.domain.legacy_atf_line_validator.LegacyAtfLineValidator, ebl.atf_importer.domain.legacy_atf_visitor.LegacyAtfVisitor, ebl.atf_importer.domain.legacy_atf_visitor.column_transformer, ebl.atf_importer.domain.legacy_atf_visitor.translation_block_transformer, ebl.transliteration.domain.atf.ATF_PARSER_VERSION, ebl.transliteration.domain.atf_parsers.lark_parser_errors.PARSE_ERRORS, ebl.transliteration.domain.line.ControlLine, ebl.transliteration.domain.line.EmptyLine, ebl.transliteration.domain.line_transformer.LineTransformer, ebl.transliteration.domain.text.Text
- Classes: LegacyAtfConverter
- Methods in LegacyAtfConverter: __init__, convert_lines_from_string, convert_lines_from_path, atf_to_text, convert_lines, _convert_line, _get_line_tree_data, _convert_lem_line, _parse_lines, _parse_line, _parse_and_validate_line, _report_and_correct_errors, _handle_legacy_translation, _insert_translation_line, serialize_words, serizalize_lemmas_and_guidewords, _log_line, _log_lem_line
- Functions: include_line

### `ebl/atf_importer/domain/legacy_atf_line_validator.py`

- Lines: 47
- Imports: ebl.app.create_context, ebl.atf_importer.domain.legacy_atf_visitor.LegacyAtfVisitor, ebl.fragmentarium.application.transliteration_update_factory.TransliterationUpdateFactory, ebl.transliteration.domain.atf.ATF_PARSER_VERSION, ebl.transliteration.domain.atf_parsers.lark_parser.validate_line, ebl.transliteration.domain.atf_parsers.lark_parser_errors.PARSE_ERRORS, ebl.transliteration.domain.line.ControlLine, ebl.transliteration.domain.line_transformer.LineTransformer, ebl.transliteration.domain.text.Text, ebl.transliteration.domain.transliteration_error.ExtentLabelError, ebl.transliteration.domain.transliteration_error.TransliterationError, lark.Tree, typing.Optional, typing.Type
- Classes: LegacyAtfLineValidator
- Methods in LegacyAtfLineValidator: __init__, validate_text_line

### `ebl/atf_importer/domain/legacy_atf_transformers.py`

- Lines: 299
- Imports: ebl.transliteration.domain.atf._SUB_SCRIPT, lark.visitors.Discard, lark.visitors.Token, lark.visitors.Transformer, lark.visitors.Tree, lark.visitors.v_args, re, typing.List, typing.Optional, typing.Sequence, typing.Type, typing.Union
- Classes: LegacyTransformer, LegacyStateTransformer, LegacyRulingTransformer, HalfBracketsTransformer, OraccJoinerTransformer, OraccSpecialTransformer, AccentedIndexTransformer, UncertainSignTransformer, LegacyModifierPrefixTransformer, LegacyPrimeTransformer, LegacyAlephTransformer, LegacyColumnTransformer
- Methods in LegacyTransformer: __init__, clear, transform, _transform_children, _get_child_result, _enter_node, _exit_node, get_ancestors, is_classes_break_at, _remove_discard_nodes, to_token, to_tree
- Methods in LegacyStateTransformer: ebl_atf_dollar_line__legacy_broken_state
- Methods in LegacyRulingTransformer: ebl_atf_dollar_line__legacy_single_ruling
- Methods in HalfBracketsTransformer: __init__, clear, ebl_atf_text_line__open_legacy_damage, ebl_atf_text_line__close_legacy_damage, ebl_atf_text_line__flags
- Methods in OraccJoinerTransformer: ebl_atf_text_line__joiner
- Methods in OraccSpecialTransformer: ebl_atf_text_line__LEGACY_ORACC_DISH_DIVIDER
- Methods in AccentedIndexTransformer: __init__, clear, ebl_atf_text_line__VALUE_CHARACTER, ebl_atf_text_line__LOGOGRAM_CHARACTER, ebl_atf_text_line__sub_index, _transform_accented_vowel, _set_sub_index_from_accented, _set_sub_index
- Methods in UncertainSignTransformer: ebl_atf_text_line__legacy_uncertain_sign
- Methods in LegacyModifierPrefixTransformer: ebl_atf_text_line__LEGACY_MODIFIER_PREFIX
- Methods in LegacyPrimeTransformer: ebl_atf_text_line__ebl_atf_common__LEGACY_PRIME

### `ebl/atf_importer/domain/legacy_atf_visitor.py`

- Lines: 131
- Imports: ebl.atf_importer.domain.legacy_atf_transformers.AccentedIndexTransformer, ebl.atf_importer.domain.legacy_atf_transformers.HalfBracketsTransformer, ebl.atf_importer.domain.legacy_atf_transformers.LegacyAlephTransformer, ebl.atf_importer.domain.legacy_atf_transformers.LegacyColumnTransformer, ebl.atf_importer.domain.legacy_atf_transformers.LegacyModifierPrefixTransformer, ebl.atf_importer.domain.legacy_atf_transformers.LegacyPrimeTransformer, ebl.atf_importer.domain.legacy_atf_transformers.LegacyRulingTransformer, ebl.atf_importer.domain.legacy_atf_transformers.LegacyStateTransformer, ebl.atf_importer.domain.legacy_atf_transformers.LegacyTransformer, ebl.atf_importer.domain.legacy_atf_transformers.OraccJoinerTransformer, ebl.atf_importer.domain.legacy_atf_transformers.OraccSpecialTransformer, ebl.atf_importer.domain.legacy_atf_transformers.UncertainSignTransformer, ebl.atf_importer.domain.legacy_translation_transformer.LegacyTranslationBlockTransformer, lark.visitors.Tree, lark.visitors.Visitor, typing.Callable, typing.Sequence, typing.Tuple
- Classes: LegacyAtfVisitor
- Methods in LegacyAtfVisitor: __init__, _set_rules, _wrap_transformers, _transform, line

### `ebl/atf_importer/domain/legacy_translation_transformer.py`

- Lines: 159
- Imports: ebl.atf_importer.domain.legacy_atf_transformers.LegacyTransformer, ebl.transliteration.domain.common_transformer.CommonTransformer, lark.visitors.Token, lark.visitors.Tree, lark.visitors.v_args, re, typing.List, typing.Match, typing.Optional, typing.Sequence, typing.Union, typing.cast
- Classes: LegacyTranslationBlockTransformer
- Methods in LegacyTranslationBlockTransformer: __init__, reset, translation_c_line, ebl_atf_translation_line__legacy_translation_block_at_line, ebl_atf_translation_line__labels_start, ebl_atf_translation_line__labels_extent, ebl_atf_translation_line__legacy_translation_block_line, ebl_atf_translation_line__legacy_translation_block_label_text_line, _labels_to_string, _translation_extent, _translation_parts, _convert_literal_quotes, _build_tree_segment, _get_markup_token, _split_markup_segments, _get_matches

### `ebl/atf_importer/domain/line_context.py`

- Lines: 10
- Imports: dataclasses.dataclass, ebl.transliteration.domain.text.TextLine, typing.List, typing.Optional
- Classes: LineContext

