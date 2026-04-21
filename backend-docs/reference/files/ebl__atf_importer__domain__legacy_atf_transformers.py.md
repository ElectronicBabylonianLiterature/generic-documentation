# File Reference: ebl/atf_importer/domain/legacy_atf_transformers.py

- Lines: 299
- Characters: 9503

## Top-Level Symbols

- Classes: LegacyTransformer, LegacyStateTransformer, LegacyRulingTransformer, HalfBracketsTransformer, OraccJoinerTransformer, OraccSpecialTransformer, AccentedIndexTransformer, UncertainSignTransformer, LegacyModifierPrefixTransformer, LegacyPrimeTransformer, LegacyAlephTransformer, LegacyColumnTransformer
- Functions: None
- Constants: None

## Methods by Class

- LegacyTransformer: __init__, clear, transform, _transform_children, _get_child_result, _enter_node, _exit_node, get_ancestors, is_classes_break_at, _remove_discard_nodes, to_token, to_tree
- LegacyStateTransformer: ebl_atf_dollar_line__legacy_broken_state
- LegacyRulingTransformer: ebl_atf_dollar_line__legacy_single_ruling
- HalfBracketsTransformer: __init__, clear, ebl_atf_text_line__open_legacy_damage, ebl_atf_text_line__close_legacy_damage, ebl_atf_text_line__flags
- OraccJoinerTransformer: ebl_atf_text_line__joiner
- OraccSpecialTransformer: ebl_atf_text_line__LEGACY_ORACC_DISH_DIVIDER
- AccentedIndexTransformer: __init__, clear, ebl_atf_text_line__VALUE_CHARACTER, ebl_atf_text_line__LOGOGRAM_CHARACTER, ebl_atf_text_line__sub_index, _transform_accented_vowel, _set_sub_index_from_accented, _set_sub_index
- UncertainSignTransformer: ebl_atf_text_line__legacy_uncertain_sign
- LegacyModifierPrefixTransformer: ebl_atf_text_line__LEGACY_MODIFIER_PREFIX
- LegacyPrimeTransformer: ebl_atf_text_line__ebl_atf_common__LEGACY_PRIME
- LegacyAlephTransformer: ebl_atf_text_line__VALUE_CHARACTER
- LegacyColumnTransformer: __init__, reset, ebl_atf_at_line__legacy_column

## Imports

- ebl.transliteration.domain.atf._SUB_SCRIPT
- lark.visitors.Discard
- lark.visitors.Token
- lark.visitors.Transformer
- lark.visitors.Tree
- lark.visitors.v_args
- re
- typing.List
- typing.Optional
- typing.Sequence
- typing.Type
- typing.Union

