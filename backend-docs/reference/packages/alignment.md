# Package Reference: ebl/alignment

- Files: 9
- Total lines: 416

## File-Level API Summary

### `ebl/alignment/__init__.py`

- Lines: 0

### `ebl/alignment/align_fragmentarium.py`

- Lines: 199
- Imports: alignment.vocabulary.Vocabulary, argparse, concurrent.futures.ProcessPoolExecutor, concurrent.futures.ThreadPoolExecutor, csv, ebl.alignment.application.align.align, ebl.alignment.domain.result.AlignmentResult, ebl.alignment.domain.sequence.NamedSequence, ebl.app.create_context, ebl.context.Context, ebl.corpus.domain.chapter.Chapter, ebl.corpus.domain.chapter.ChapterId, ebl.corpus.domain.text.Text, ebl.fragmentarium.domain.fragment.Fragment, ebl.transliteration.domain.museum_number.MuseumNumber, functools.partial, re, sys, time, tqdm.tqdm
- Functions: has_clear_signs, align_fragment_and_chapter, to_dict, align_fragment, load_chapters, parse_arguments

### `ebl/alignment/alignment.csv`

- Lines: 0
- CSV data file used by application logic.

### `ebl/alignment/application/__init__.py`

- Lines: 0

### `ebl/alignment/application/align.py`

- Lines: 34
- Imports: alignment.sequencealigner.GlobalSequenceAligner, alignment.vocabulary.Vocabulary, ebl.alignment.domain.result.AlignmentResult, ebl.alignment.domain.scoring.EblScoring, ebl.alignment.domain.sequence.NamedSequence, typing.List, typing.Tuple
- Functions: align_pair, align

### `ebl/alignment/domain/__init__.py`

- Lines: 0

### `ebl/alignment/domain/result.py`

- Lines: 14
- Imports: alignment.sequencealigner.SequenceAlignment, attr, ebl.alignment.domain.sequence.NamedSequence, typing.List
- Classes: AlignmentResult

### `ebl/alignment/domain/scoring.py`

- Lines: 127
- Imports: alignment.sequencealigner.GapScoring, alignment.sequencealigner.Scoring, alignment.vocabulary.Vocabulary, ebl.alignment.domain.sequence.LINE_BREAK, ebl.alignment.domain.sequence.UNCLEAR_OR_UNKNOWN_SIGN, ebl.transliteration.domain.atf.VARIANT_SEPARATOR, typing.Callable, typing.Generator, typing.Tuple
- Classes: EblScoring
- Methods in EblScoring: __init__, __call__, gapStart, gapExtension, _get_scores, _is_break, _is_x, _get_break_score, _get_x_score, _get_variant_score
- Functions: is_curated, is_variant

### `ebl/alignment/domain/sequence.py`

- Lines: 42
- Imports: alignment.sequence.EncodedSequence, alignment.sequence.Sequence, alignment.vocabulary.Vocabulary, attr, ebl.fragmentarium.domain.fragment.Fragment, ebl.transliteration.domain.standardization.UNKNOWN, re
- Constants: LINE_BREAK, UNCLEAR_OR_UNKNOWN_SIGN
- Classes: NamedSequence
- Methods in NamedSequence: of_signs, of_fragment
- Functions: replace_line_breaks, collapse_spaces, make_sequence

