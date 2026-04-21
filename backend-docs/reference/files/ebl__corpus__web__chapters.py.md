# File Reference: ebl/corpus/web/chapters.py

- Lines: 241
- Characters: 7731

## Top-Level Symbols

- Classes: ChaptersResource, ChaptersDisplayResource, ChaptersByFragmentResource, ChaptersByLemmaResource, CorpusQueryResource, ChaptersAllResource, ChapterSignsResource
- Functions: make_all_chapter_signs_resource
- Constants: None

## Methods by Class

- ChaptersResource: __init__, on_get
- ChaptersDisplayResource: __init__, _create_line_variant_map, _select_lines_and_variants, on_get
- ChaptersByFragmentResource: __init__, on_get
- ChaptersByLemmaResource: __init__, on_get
- CorpusQueryResource: __init__, on_get
- ChaptersAllResource: __init__, on_get
- ChapterSignsResource: __init__, on_get

## Imports

- collections.defaultdict
- ebl.cache.application.cache.DEFAULT_TIMEOUT
- ebl.cache.application.custom_cache.ChapterCache
- ebl.common.domain.stage.Stage
- ebl.common.query.parameter_parser.parse_lemmas
- ebl.common.query.parameter_parser.parse_lines
- ebl.common.query.parameter_parser.parse_transliteration
- ebl.common.query.query_schemas.CorpusQueryResultSchema
- ebl.corpus.application.corpus.Corpus
- ebl.corpus.application.display_schemas.ChapterDisplaySchema
- ebl.corpus.application.schemas.ManuscriptAttestationSchema
- ebl.corpus.application.schemas.UncertainFragmentAttestationSchema
- ebl.corpus.domain.dictionary_display.DictionaryLineDisplay
- ebl.corpus.web.chapter_schemas.ApiChapterSchema
- ebl.corpus.web.display_schemas.DictionaryLineDisplaySchema
- ebl.corpus.web.text_utils.create_chapter_id
- ebl.errors.DataError
- ebl.fragmentarium.application.fragment_finder.FragmentFinder
- ebl.transliteration.application.transliteration_query_factory.TransliterationQueryFactory
- ebl.transliteration.domain.genre.Genre
- ebl.transliteration.domain.museum_number.MuseumNumber
- falcon
- falcon_caching.Cache
- itertools.zip_longest
- json
- pydash.arrays.flatten_deep
- pydash.flow
- typing.Optional
- typing.Sequence

