# API Endpoint Catalog

Authoritative route inventory derived from route bootstraps and resource handlers.

| URI | Resource Class | Methods | Scope Decorators | Dynamic Scope Guards | Resource Source | Bootstrap Source |
|---|---|---|---|---|---|---|
| `/afo-register` | `AfoRegisterResource` | `on_get` | `-` | `-` | `ebl/afo_register/web/afo_register_records.py` | `ebl/afo_register/web/bootstrap.py` |
| `/afo-register/suggestions` | `AfoRegisterSuggestionsResource` | `on_get` | `-` | `-` | `ebl/afo_register/web/afo_register_records.py` | `ebl/afo_register/web/bootstrap.py` |
| `/afo-register/texts-numbers` | `AfoRegisterTextsAndNumbersResource` | `on_post` | `-` | `-` | `ebl/afo_register/web/afo_register_records.py` | `ebl/afo_register/web/bootstrap.py` |
| `/bibliography` | `BibliographyResource` | `on_get, on_post` | `write:bibliography` | `-` | `ebl/bibliography/web/bibliography_entries.py` | `ebl/bibliography/web/bootstrap.py` |
| `/bibliography/all` | `BibliographyAll` | `on_get` | `-` | `-` | `ebl/bibliography/web/bibliography_entries.py` | `ebl/bibliography/web/bootstrap.py` |
| `/bibliography/list` | `BibliographyList` | `on_get` | `-` | `-` | `ebl/bibliography/web/bibliography_entries.py` | `ebl/bibliography/web/bootstrap.py` |
| `/bibliography/{id_}` | `BibliographyEntriesResource` | `on_get, on_post` | `write:bibliography` | `-` | `ebl/bibliography/web/bibliography_entries.py` | `ebl/bibliography/web/bootstrap.py` |
| `/cached-markup` | `CachedMarkup` | `on_get` | `-` | `-` | `ebl/markup/web/bootstrap.py` | `ebl/markup/web/bootstrap.py` |
| `/corpus/all-signs` | `make_all_chapter_signs_resource` | `on_get` | `-` | `-` | `ebl/corpus/web/chapters.py` | `ebl/corpus/web/bootstrap.py` |
| `/corpus/chapters/all` | `ChaptersAllResource` | `on_get` | `-` | `-` | `ebl/corpus/web/chapters.py` | `ebl/corpus/web/bootstrap.py` |
| `/corpus/query` | `CorpusQueryResource` | `on_get` | `-` | `-` | `ebl/corpus/web/chapters.py` | `ebl/corpus/web/bootstrap.py` |
| `/corpus/texts/all` | `TextsAllResource` | `on_get` | `-` | `-` | `ebl/corpus/web/texts.py` | `ebl/corpus/web/bootstrap.py` |
| `/dossiers` | `DossiersResource` | `on_get` | `-` | `-` | `ebl/dossiers/web/dossier_records.py` | `ebl/dossiers/web/bootstrap.py` |
| `/dossiers/filter` | `DossiersFilterResource` | `on_get` | `-` | `-` | `ebl/dossiers/web/dossier_records.py` | `ebl/dossiers/web/bootstrap.py` |
| `/dossiers/search` | `DossiersSearchResource` | `on_get` | `-` | `-` | `ebl/dossiers/web/dossier_records.py` | `ebl/dossiers/web/bootstrap.py` |
| `/dossiers/suggestions` | `DossiersSuggestionsResource` | `on_get` | `-` | `-` | `ebl/dossiers/web/dossier_records.py` | `ebl/dossiers/web/bootstrap.py` |
| `/findspots` | `FindspotResource` | `on_get` | `-` | `-` | `ebl/fragmentarium/web/findspots.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/folios/{name}/{number}` | `FoliosResource` | `on_get` | `-` | `folio-read` | `ebl/fragmentarium/web/folios.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments` | `FragmentSearch` | `on_get` | `-` | `-` | `ebl/fragmentarium/web/fragment_search.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/all` | `FragmentsListResource` | `on_get` | `-` | `-` | `ebl/fragmentarium/web/fragments.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/all-ocred-signs` | `make_all_fragment_ocred_signs_resource` | `on_get` | `-` | `-` | `ebl/fragmentarium/web/fragments.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/all-signs` | `make_all_fragment_signs_resource` | `on_get` | `-` | `-` | `ebl/fragmentarium/web/fragments.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/colophon-names` | `ColophonNamesResource` | `on_get` | `-` | `-` | `ebl/fragmentarium/web/colophons.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/latest` | `make_latest_additions_resource` | `on_get` | `-` | `-` | `ebl/fragmentarium/web/fragments.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/query` | `FragmentsQueryResource` | `on_get` | `-` | `-` | `ebl/fragmentarium/web/fragments.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/query-by-traditional-references` | `AfoRegisterFragmentsQueryResource` | `on_post` | `-` | `-` | `ebl/fragmentarium/web/fragments_afo_register.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/retrieve-all` | `FragmentsRetrieveAllResource` | `on_get` | `-` | `-` | `ebl/fragmentarium/web/fragments.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/{number}` | `FragmentsResource` | `on_get` | `-` | `fragment-read` | `ebl/fragmentarium/web/fragments.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/{number}/annotations` | `AnnotationResource` | `on_get, on_post` | `annotate:fragments` | `-` | `ebl/fragmentarium/web/annotations.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/{number}/archaeology` | `ArchaeologyResource` | `on_post` | `transliterate:fragments` | `-` | `ebl/fragmentarium/web/archaeology.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/{number}/collect-lemmas` | `AutofillLemmasResource` | `on_get` | `lemmatize:fragments` | `-` | `ebl/fragmentarium/web/lemma_annotation.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/{number}/colophon` | `ColophonResource` | `on_post` | `transliterate:fragments` | `-` | `ebl/fragmentarium/web/colophons.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/{number}/corpus` | `ChaptersByFragmentResource` | `on_get` | `-` | `-` | `ebl/corpus/web/chapters.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/{number}/date` | `FragmentDateResource` | `on_post` | `transliterate:fragments` | `-` | `ebl/fragmentarium/web/fragment_date.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/{number}/dates-in-text` | `FragmentDatesInTextResource` | `on_post` | `transliterate:fragments` | `-` | `ebl/fragmentarium/web/fragment_date.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/{number}/edition` | `EditionResource` | `on_post` | `transliterate:fragments` | `-` | `ebl/fragmentarium/web/edition.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/{number}/genres` | `FragmentGenreResource` | `on_post` | `transliterate:fragments` | `-` | `ebl/fragmentarium/web/fragment_genre.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/{number}/lemma-annotation` | `LemmaAnnotationResource` | `on_post` | `lemmatize:fragments` | `-` | `ebl/fragmentarium/web/lemma_annotation.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/{number}/lemmatization` | `LemmatizationResource` | `on_post` | `lemmatize:fragments` | `-` | `ebl/fragmentarium/web/lemmatizations.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/{number}/match` | `FragmentMatcherResource` | `on_get` | `transliterate:fragments` | `-` | `ebl/fragmentarium/web/fragment_matcher.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/{number}/named-entities` | `NamedEntityResource` | `on_get, on_post` | `transliterate:fragments` | `-` | `ebl/fragmentarium/web/named_entities.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/{number}/pager` | `make_fragment_pager_resource` | `on_get` | `-` | `-` | `ebl/fragmentarium/web/fragment_pager.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/{number}/pager/{folio_name}/{folio_number}` | `FolioPagerResource` | `on_get` | `-` | `folio-read` | `ebl/fragmentarium/web/folio_pager.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/{number}/photo` | `PhotoResource` | `on_get` | `-` | `fragment-read` | `ebl/fragmentarium/web/photo.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/{number}/references` | `ReferencesResource` | `on_post` | `transliterate:fragments` | `-` | `ebl/fragmentarium/web/references.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/{number}/scopes` | `FragmentAuthorizedScopesResource` | `on_post` | `-` | `fragment-read` | `ebl/fragmentarium/web/fragments.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/{number}/script` | `FragmentScriptResource` | `on_post` | `transliterate:fragments` | `-` | `ebl/fragmentarium/web/fragment_script.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/fragments/{number}/thumbnail/{resolution}` | `PhotoResource` | `on_get` | `-` | `fragment-read` | `ebl/fragmentarium/web/photo.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/genres` | `GenresResource` | `on_get` | `-` | `-` | `ebl/fragmentarium/web/genres.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/images/{file_name}` | `PublicFilesResource` | `on_get` | `-` | `-` | `ebl/files/web/files.py` | `ebl/files/web/bootstrap.py` |
| `/lemmas` | `LemmaSearch` | `on_get` | `-` | `-` | `ebl/lemmatization/web/lemma_search.py` | `ebl/lemmatization/web/bootstrap.py` |
| `/lemmasearch` | `ChaptersByLemmaResource` | `on_get` | `-` | `-` | `ebl/corpus/web/chapters.py` | `ebl/corpus/web/bootstrap.py` |
| `/markup` | `Markup` | `on_get` | `-` | `-` | `ebl/markup/web/bootstrap.py` | `ebl/markup/web/bootstrap.py` |
| `/periods` | `PeriodsResource` | `on_get` | `-` | `-` | `ebl/fragmentarium/web/periods.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/provenances` | `ProvenancesResource` | `on_get` | `-` | `-` | `ebl/provenance/web/provenances.py` | `ebl/provenance/web/bootstrap.py` |
| `/provenances/{id_}` | `ProvenanceResource` | `on_get` | `-` | `-` | `ebl/provenance/web/provenances.py` | `ebl/provenance/web/bootstrap.py` |
| `/provenances/{id_}/children` | `ProvenanceChildrenResource` | `on_get` | `-` | `-` | `ebl/provenance/web/provenances.py` | `ebl/provenance/web/bootstrap.py` |
| `/signs` | `SignsSearch` | `on_get` | `-` | `-` | `ebl/signs/web/sign_search.py` | `ebl/signs/web/bootstrap.py` |
| `/signs/all` | `SignsListResource` | `on_get` | `-` | `-` | `ebl/signs/web/signs.py` | `ebl/signs/web/bootstrap.py` |
| `/signs/transliteration/{line}` | `TransliterationResource` | `on_get` | `-` | `-` | `ebl/signs/web/signs.py` | `ebl/signs/web/bootstrap.py` |
| `/signs/{sign_name}` | `SignsResource` | `on_get` | `-` | `-` | `ebl/signs/web/signs.py` | `ebl/signs/web/bootstrap.py` |
| `/signs/{sign_name}/images` | `CroppedAnnotationsResource` | `on_get` | `-` | `-` | `ebl/signs/web/cropped_annotations.py` | `ebl/signs/web/bootstrap.py` |
| `/signs/{sign_name}/images/cluster/{cluster_id}` | `ClusterCroppedAnnotationsResource` | `on_get` | `-` | `-` | `ebl/signs/web/cropped_annotations.py` | `ebl/signs/web/bootstrap.py` |
| `/signs/{sign_name}/{sort_era}` | `SignsOrderResource` | `on_get` | `-` | `-` | `ebl/signs/web/signs.py` | `ebl/signs/web/bootstrap.py` |
| `/statistics` | `make_statistics_resource` | `on_get` | `-` | `-` | `ebl/fragmentarium/web/statistics.py` | `ebl/fragmentarium/web/bootstrap.py` |
| `/texts` | `TextsResource` | `on_get` | `-` | `-` | `ebl/corpus/web/texts.py` | `ebl/corpus/web/bootstrap.py` |
| `/texts/{genre}/{category}/{index}` | `TextResource` | `on_get` | `-` | `-` | `ebl/corpus/web/texts.py` | `ebl/corpus/web/bootstrap.py` |
| `/texts/{genre}/{category}/{index}/chapters/{stage}/{name}` | `ChaptersResource` | `on_get` | `-` | `-` | `ebl/corpus/web/chapters.py` | `ebl/corpus/web/bootstrap.py` |
| `/texts/{genre}/{category}/{index}/chapters/{stage}/{name}/alignment` | `AlignmentResource` | `on_post` | `write:texts` | `-` | `ebl/corpus/web/alignments.py` | `ebl/corpus/web/bootstrap.py` |
| `/texts/{genre}/{category}/{index}/chapters/{stage}/{name}/colophons` | `CorpusColophonsResource` | `on_get` | `-` | `-` | `ebl/corpus/web/colophons.py` | `ebl/corpus/web/bootstrap.py` |
| `/texts/{genre}/{category}/{index}/chapters/{stage}/{name}/display` | `ChaptersDisplayResource` | `on_get` | `-` | `-` | `ebl/corpus/web/chapters.py` | `ebl/corpus/web/bootstrap.py` |
| `/texts/{genre}/{category}/{index}/chapters/{stage}/{name}/extant_lines` | `ExtantLinesResource` | `on_get` | `-` | `-` | `ebl/corpus/web/extant_lines.py` | `ebl/corpus/web/bootstrap.py` |
| `/texts/{genre}/{category}/{index}/chapters/{stage}/{name}/import` | `LinesImportResource` | `on_post` | `write:texts` | `-` | `ebl/corpus/web/lines.py` | `ebl/corpus/web/bootstrap.py` |
| `/texts/{genre}/{category}/{index}/chapters/{stage}/{name}/lemmatization` | `LemmatizationResource` | `on_post` | `lemmatize:fragments` | `-` | `ebl/fragmentarium/web/lemmatizations.py` | `ebl/corpus/web/bootstrap.py` |
| `/texts/{genre}/{category}/{index}/chapters/{stage}/{name}/lines` | `LinesResource` | `on_post` | `write:texts` | `-` | `ebl/corpus/web/lines.py` | `ebl/corpus/web/bootstrap.py` |
| `/texts/{genre}/{category}/{index}/chapters/{stage}/{name}/lines/{number}` | `LineResource` | `on_get` | `-` | `-` | `ebl/corpus/web/lines.py` | `ebl/corpus/web/bootstrap.py` |
| `/texts/{genre}/{category}/{index}/chapters/{stage}/{name}/manuscripts` | `ManuscriptsResource` | `on_get, on_post` | `write:texts` | `-` | `ebl/corpus/web/manuscripts.py` | `ebl/corpus/web/bootstrap.py` |
| `/texts/{genre}/{category}/{index}/chapters/{stage}/{name}/signs` | `ChapterSignsResource` | `on_get` | `-` | `-` | `ebl/corpus/web/chapters.py` | `ebl/corpus/web/bootstrap.py` |
| `/texts/{genre}/{category}/{index}/chapters/{stage}/{name}/unplaced_lines` | `UnplacedLinesResource` | `on_get` | `-` | `-` | `ebl/corpus/web/unplaced_lines.py` | `ebl/corpus/web/bootstrap.py` |
| `/textsearch` | `TextSearchResource` | `on_get` | `-` | `-` | `ebl/corpus/web/texts.py` | `ebl/corpus/web/bootstrap.py` |
| `/words` | `WordSearch` | `on_get` | `-` | `-` | `ebl/dictionary/web/word_search.py` | `ebl/dictionary/web/bootstrap.py` |
| `/words/all` | `WordsListResource` | `on_get` | `-` | `-` | `ebl/dictionary/web/words.py` | `ebl/dictionary/web/bootstrap.py` |
| `/words/create-proper-noun` | `ProperNounCreationResource` | `on_post` | `create:proper_nouns` | `-` | `ebl/dictionary/web/words.py` | `ebl/dictionary/web/bootstrap.py` |
| `/words/{object_id}` | `WordsResource` | `on_get, on_post` | `write:words` | `-` | `ebl/dictionary/web/words.py` | `ebl/dictionary/web/bootstrap.py` |
