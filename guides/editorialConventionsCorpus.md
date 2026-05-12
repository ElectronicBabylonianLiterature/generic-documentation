# Conventions for eBL-Corpus Editions

Created: 2025-03-28
Last Reviewed: 2026-05-12

## How to use this document?

The first part of this document explains and defines key concepts and elements of the eBL Corpus Editor. Part 2 explains how these elements should be used when editing with eBL. Elements defined in Part 1 are capitalised throughout the entire document. A basic knowledge of [eBL-ATF](atfFlavors.md) is required.

## Table of Contents

[1 Basic Concepts, Definitions, and Terminology](#1-basic-concepts-definitions-and-terminology)  
&nbsp;&nbsp;&nbsp;&nbsp;[1.0 Overview](#10-overview)  
&nbsp;&nbsp;&nbsp;&nbsp;[1.1 Corpus](#11-corpus)  
&nbsp;&nbsp;&nbsp;&nbsp;[1.2 Category](#12-category)  
&nbsp;&nbsp;&nbsp;&nbsp;[1.3 Composition](#13-composition)  
&nbsp;&nbsp;&nbsp;&nbsp;[1.4 Stage](#14-stage)  
&nbsp;&nbsp;&nbsp;&nbsp;[1.5 Version](#15-version)  
&nbsp;&nbsp;&nbsp;&nbsp;[1.6 Chapter](#16-chapter)  
&nbsp;&nbsp;&nbsp;&nbsp;[1.7 Lines of Text](#17-lines-of-text)  
&nbsp;&nbsp;&nbsp;&nbsp;[1.8 Manuscript](#18-manuscript)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.8.1 Provenance](#181-provenance)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.8.2 Period](#182-period)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.8.3 Type](#183-type)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.8.4 Script](#184-script)  
&nbsp;&nbsp;&nbsp;&nbsp;[1.9 Manuscript Lines](#19-manuscript-lines)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.9.1 Material and Structural Features ($-lines)](#191-material-and-structural-features--lines)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.9.2 Paratextual and Discoursive Features (@-lines)](#192-paratextual-and-discoursive-features--lines)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.9.3 Notes (#note:)](#193-notes-note)  
&nbsp;&nbsp;&nbsp;&nbsp;[1.10 Fragment](#110-fragment)  
&nbsp;&nbsp;&nbsp;&nbsp;[1.11 Bibliographical References](#111-bibliographical-references)  
[2 Editing with eBL](#2-editing-with-ebl)  
&nbsp;&nbsp;&nbsp;&nbsp;[2.1 Structure a Corpus](#21-structure-a-corpus)  
&nbsp;&nbsp;&nbsp;&nbsp;[2.2 Prepare the Edition of a Composition](#22-prepare-the-edition-of-a-composition)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.2.1 Create a List of Manuscripts](#221-create-a-list-of-manuscripts)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.2.2 Format Museum and Accession Numbers](#222-format-museum-and-accession-numbers)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.2.3 Set Sigla in the List of Manuscripts](#223-set-sigla-in-the-list-of-manuscripts)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.2.4 Edit Colophons](#224-edit-colophons)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.2.5 Deal with Tablet Series and Catchlines](#225-deal-with-tablet-series-and-catchlines)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.2.6 Add Bibliography and Notes](#226-add-bibliography-and-notes)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.2.7 Write an Introduction](#227-write-an-introduction)  
&nbsp;&nbsp;&nbsp;&nbsp;[2.3 Reference Manuscript Lines](#23-reference-manuscript-lines)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.3.1 Sides and Columns](#231-sides-and-columns)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.3.2 Line Numbers](#232-line-numbers)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.3.3 One Line of Text in Multiple Manuscript Lines](#233-one-line-of-text-in-multiple-manuscript-lines)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.3.4 Multiple Lines of Text in One Manuscript Line](#234-multiple-lines-of-text-in-one-manuscript-line)  
&nbsp;&nbsp;&nbsp;&nbsp;[2.4 Transliterate Manuscript Lines](#24-transliterate-manuscript-lines)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.4.1 Broken Parts and Supplied Text](#241-broken-parts-and-supplied-text)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.4.2 Rulings](#242-rulings)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.4.3 Erasures](#243-erasures)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.4.4 Ink Dots in the Armana Manuscripts](#244-ink-dots-in-the-armana-manuscripts)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.4.5 Preserved Edges](#245-preserved-edges)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.4.6 Beginning and End of Excerpts](#246-beginning-and-end-of-excerpts)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.4.7 Ligatures](#247-ligatures)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.4.8 Logogramms](#248-logogramms)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.4.9 Variants of KAM](#249-variants-of-kam)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.4.10 KIMIN](#2410-kimin)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.4.11 Editorial Annotations and Interventions](#2411-editorial-annotations-and-interventions)  
&nbsp;&nbsp;&nbsp;&nbsp;[2.5 Reconstruct the Lines of Text](#25-reconstruct-the-lines-of-text)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.5.1 Principles of Textual Criticism](#251-principles-of-textual-criticism)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.5.2 Normalisation](#252-normalisation)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.5.3 Grammar and Lexicon](#253-grammar-and-lexicon)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.5.4 Some Special Cases and Recurring Questions](#254-some-special-cases-and-recurring-questions)  
&nbsp;&nbsp;&nbsp;&nbsp;[2.6 Reconstruct a Standard Spelling](#26-reconstruct-a-standard-spelling)  
&nbsp;&nbsp;&nbsp;&nbsp;[2.7 Analyse and Annotate](#27-analyse-and-annotate)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.7.1 Alignment and Apparatus](#271-alignment-and-apparatus)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.7.2 Lemmatization](#272-lemmatization)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.7.3 POS-Tagging](#273-pos-tagging)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.7.4 Parallel Lines](#274-parallel-lines)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.7.5 Scansion](#275-scansion)
&nbsp;&nbsp;&nbsp;&nbsp;[2.8 Add Bibliographical References and Notes](#28-add-bibliographical-references-and-notes)  
&nbsp;&nbsp;&nbsp;&nbsp;[2.9 Translation](#29-translation)  
&nbsp;&nbsp;&nbsp;&nbsp;[2.10 Canonical Examples](#210-canonical-examples)

## 1 Basic Concepts, Definitions, and Terminology

## 1.0 Overview

`Corpus > Category > Composition > Stage > Version > Chapter > Line of Text > Manuscript Lines`

## 1.1 Corpus

A Corpus is a group of [Compositions](#13-composition) with shared generic characteristics. Examples for genres are Literature, Divination, Magic, and Royal Inscriptions. Every such Corpus is referenced by a single letter siglum.

| Siglum | Genre |
|--------|:-------|
| `L` | Literature |
| `D`| Divination |
| `M`| Magic |
| `R` | Royal Inscriptions|

The [Compositions](#13-composition) of a Corpus are grouped in [Categories](#12-category).

## 1.2 Category

The [Compositions](#13-composition) of a [Corpus](#11-corpus) can be arranged in groups according to a set of shared characteristics chosen by the editor. These characteristics can be e.g. ancient designations, literary form etc.  Each Category is referenced by a Roman numeral. The [Compositions](#13-composition) of the Literature [Corpus](#11-corpus) are divided into four Categories.

| Category-Number | Description |
|-----------------|:-------------|
| `0`  | Catalogues|
| `I` | Narrative Poetry |
| `II` | Monologue and dialogue literature |
| `III` | Literary Hymns and Prayers |

The number of Categories in a [Corpus](#11-corpus) and the number of [Compositions](#13-composition) in each Category is not restricted.

## 1.3 Composition

Compositions are not defined in absolute terms. Whereas in a [Corpus](#11-corpus) of Royal Inscriptions a certain king might be placed on the level of Composition (with the [Chapters](#16-chapter) being the different inscriptions and [Category](#12-category) being the historical period in which he reigned), the [Corpus](#11-corpus) of Literature defines Compositions as textual entities, loosely relying on Aristotle's definition of tragedy as something that represents a whole of a certain magnitude that has a beginning and middle and end ([Arist. Poet. 1450b](http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0056%3Asection%3D1450b)). Compositions are referred to by Arabic numerals (called index in the formal definition) affixed to the Roman numerals that stand for a [Category](#12-category), e.g. `L I.1` is Literature (`L`) > Narrative Poetry (`I`) > Story of the Flood (`1`). Compositions are represented in [Stages](#14-stage) and [Versions](#15-version) and divided into [Chapters](#16-chapter).

## 1.4 Stage

A Stage is a subgroup of texts of a [Composition](#13-composition). It is not a property of a single [Manuscript](#18-manuscript) (see [Period](#182-period)). A given subgroup of texts should belong to a distinct developmental stage of a composition’s history. The designation of Stages should follow the division defined under [Period](#182-period).

## 1.5 Version

A Version describes a distinguishable form of a [Composition](#13-composition) within one of its [Stages](#14-stage). The designation of Versions is free. To distinguish between Versions is particularly important when dealing with fluid textual traditions e.g. in the Old-Babylonian period.

## 1.6 Chapter

Technically Chapters are sequences of words arranged in [Lines of Text](#17-lines-of-text). Conceptually, a Chapter is a coherent and in most cases dependant part of a [Composition](#13-composition). The division of a [Composition](#13-composition) into Chapters should follow ancient conventions (_ṭuppu_, _nisḫu_, _pirsu_ etc.) wherever possible (classification: `Ancient`). If no ancient division into Chapters is known Chapters can be used to establish a conventional order among the parts of a [Composition](#13-composition) (classification: `Modern`).  

The designation of chapters is free. Depending on the particularities of a given [Corpus](#11-corpus) the division into Chapters is a flexible tool to deal with all kinds of editorial challenges.  

[Manuscripts](#18-manuscript) are assigned to Chapters as textual witnesses.

## 1.7 Lines of Text

A sequence of Lines of Text constitutes a [Chapter](#16-chapter) of a [Composition](#13-composition). Each Line of Text consists of a line number and some transcribed text (normalised text) preceded by `%n`. Optional elements are the indication of [Parallel Lines](#274-parallel-lines), an [Apparatus](#271-alignment-and-apparatus) with textual variants, [Notes](#193-notes-note), and [Translations](#29-translation). Line numbers can be strict or loose (loose line numbers are not implemented yet), see the [formal definition](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/docs/ebl-atf.md#text-lines). Strict numbers allow for ranges (`1–4`), the representation of lacunae in the sequence  (`1, 2, 3, a+1, a+2, b+1, b+2 ...`), disambiguation (`1a, 1b, 1c, ...`) and the addition of a prime (`1ʹ`).  

Once fully implemented the flexible line numerals will be able to meet all kinds of editorial needs.  

[Manuscript Lines](#19-manuscript-lines) are assigned to Lines of Text and contain the textual data that their reconstruction is based on.

## 1.8 Manuscript

A Manuscript is a [Fragment](#110-fragment) that has been identified as a textual witness of a [Composition](#13-composition). Classifying a clay tablet as a Manuscript says nothing about its state of preservation: Manuscripts can be quite fragmentary. Manuscripts are edited in a [Corpus](#11-corpus). In the future tablets edited as Manuscripts of a [Corpus](#11-corpus) will be automatically extracted and put in the [Fragmentarium](https://www.ebabylon.org/fragmentarium). Each Manuscript has the following properties: [Provenance](#181-provenance), [Period](#182-period), [Type](#183-type). The bibliographical information for each Manuscript can be added in the [List of Manuscripts](#22-prepare-the-edition-of-a-composition).

Standard Text (`Std`) is an extra option available under [Provenance](#181-provenance). Standard Text manuscripts are not specified with regard to [Period](#182-period) and [Type](#183-type). They are a means to provide the reader with a reconstructed standard spelling, see [2.6 Reconstruct a Standard Spelling](#26-reconstruct-a-standard-spelling).

### 1.8.1 Provenance

| Region | Place | Siglum |
|--------|:------|:--------|
| Assyria |  | `Assa` |
| | Aššur | `Ašš` |
| | Ḫuzirina | `Huz` |
| | Kalḫu | `Kal` |
| | Khorsabad | `Kho` |
| | Nineveh | `Nin` |
| | Tarbiṣu | `Tar`|
| Babylonia | | `Baba` |
| | Babylon | `Bab`|
| | Borsippa | `Bor`|
| | Cutha | `Cut`|
| | Dilbat | `Dil`|
| | Isin | `Isn`|
| | Kiš | `Kiš`|
| | Larsa | `Lar`|
| | Meturan | `Met` |
| | Nērebtum | `Nēr`|
| | Nippur | `Nip`|
| | Sippar | `Sip`|
| | Šaduppûm | `Šad`|
| | Ur | `Ur`|
| | Uruk | `Urk`|
| Periphery | | |
| | Alalakh | `Ala` |
| | Tell el-Amarna | `Ama` |
| | Emar | `Emr` |
| | Ḫattuša | `Hat` |
| | Mari | `Mar` |
| | Megiddo | `Meg` |
| | Susa | `Sus` |
| | Ugarit | `Uga` |
| Unclear | | `Unc` |

| Special Type | |
|--------------|---|
| Standard Text | `Std` |

### 1.8.2 Period

For the dates given see Frahm, _Geschichte des alten Mesopotamien_ (2013) 273–276.

| Period | | Siglum |
|----|---|---|
| Ur III (ca. 2100-2002 BC) | | `Ur3` |
| Old Assyrian (ca. 1950-1850 BC) | | `OA` |
| Old Babylonian (ca. 2002-1595 BC) | | `OB` |
| Middle Babylonian (ca. 1595-1000 BC) | | `MB` |
| Middle Assyrian (ca. 1595-1000 BC) | | `MA` |
| Hittite (ca. 1500-1100 BC) | | `Hit` |
| Neo-Assyrian (ca. 1000-609 BC) | | `NA` |
| Neo-Babylonian (ca. 1000-539 BC) | | `NB` |
| Late Babylonian (539 BC-ca. 100 CE) | | `LB` |
| |Persian (539-331 BC) | `Per` |
| | Hellenistic (331-141 BC) | `Hel` |
| | Parthian (141 BC-ca. 100 CE) | `Par` |
| Uncertain | | `Unc`|

For some of the Periods (`OB, MB, MA, NA, LB`) there is the option to specify if a [Manuscript](#18-manuscript) seemingly stems from the beginning or the end of a given Period. This indication is not meant to be definitive but rather functions as a flag for tablets where further paleographical (etc.) research could yield interesting results.

### 1.8.3 Type

ø: A library [Manuscript](#18-manuscript) contains a complete [Composition](#13-composition) or [Chapter](#16-chapter). Library is the default type.  
`Sch`: School [Manuscripts](#18-manuscript) contain multiple excerpts form different [Compositions](#13-composition).  
`Com`: A commentary [Manuscript](#18-manuscript) is a text that cites sections of a text in order to explain them. When sections of the text are cited in commentaries on other works (e.g. quotations of _Enūma eliš_ in an astrological commentary), those commentary tablets are classified as `Quo`. The [Commentary Protocols](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/docs/ebl-atf.md#commentary-protocols) should be used to clarify the structure of a commentary in the transliteration: `!qt` precedes quotations. `!bs` base text, `!cm` the commentary, and `!zz` uncertain parts.  
`Quo`: Quotations are singular [Lines of Text](#17-lines-of-text) that are cited in a different context, usually in order to elucidate a line or word of a different [Composition](#13-composition) or to refer to a [Composition](#13-composition) or [Chapter](#16-chapter) via its incipit (e.g. catalogue entries, catchlines).  
`Ex`: Excerpt [Manuscripts](#18-manuscript) only contain a part of a given [Chapter](#16-chapter) and are not school manuscripts.  
`Par`: Parallel [Manuscripts](#18-manuscript) attest to a text that runs parallel to an edited [Composition](#13-composition) but are themselves not Manuscripts of that Composition as they deviate substantially in other places.  
`Var`: Everything else.

### 1.8.4 Script

As the script of a given tablet can be deduced from the combination of [Provenance](#181-provenance) and [Period](#182-period), information about the script (or ductus) is not included in the siglum or the [List of Manuscripts](#223-set-sigla-in-the-list-of-manuscripts). For the Babylonian tablets from Nineveh the combination of `Nin` and `NB` should be used, e.g. `NinNB2`. The Middle-Babylonian tablets from Aššur are to be treated similarly. Special cases like e.g. Late-Babylonian tablets that exhibit archaising sign forms, are not reflected in the siglum but should be described in the [notes](#226-add-bibliography-and-notes) to a given [Manuscript](#18-manuscript) in the List of Manuscripts.

## 1.9 Manuscript Lines

Manuscript Lines are assigned to a [Line of Text](#17-lines-of-text). They consist of a line number and transliterated text respective to the lines of a tablet that contain a [Line of Text](#17-lines-of-text). The transliteration should follow the eBL-ATF conventions that also apply to the Fragmentarium, see the [eBL-ATF formal definition](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/docs/ebl-atf.md).

### 1.9.1 Material and Structural Features (`$`-lines)

Information about the state of preservation, rulings, or the beginning and end of excerpts can be linked to a Manuscript Line, see the definition of the $-lines and see the [eBL-ATF $-lines definition](<https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/docs/ebl-atf.md#-lines-1>).

### 1.9.2 Paratextual and Discoursive Features (`@`-lines)

Information about different structural components of a manuscript's text, like e.g. a date or freely set demarcations of discourse units can be linked to a [Manuscript Line](#19-manuscript-lines), see the definition of [@-lines](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/docs/ebl-atf.md#-lines). On the transliteration of colophons see [2.2.4](#224-edit-colophons).

### 1.9.3 Notes (`#note:`)

Notes can be added to [Manuscript Lines](#19-manuscript-lines) and [Lines of Text](#17-lines-of-text). Notes allow for emphasis in formatting, transliteration of Sumerian and Akkadian and [Bibliographical References](#111-bibliographical-references), see the [eBL-ATF note lines definition](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/docs/ebl-atf.md#note-lines).

## 1.10 Fragment

A Fragment is an inscribed physical artefact, usually a part of a clay tablet. Fragments are edited in the Fragmentarium, especially if they haven’t been published and assigned yet.

## 1.11 Bibliographical References

Bibliographical References to [Manuscripts](#18-manuscript) in the [List of Manuscripts](#22-prepare-the-edition-of-a-composition) are created with the help of an interface that works similar to the one used in the Fragmentarium. Bibliographical References in [Notes](#193-notes-note) are to be formatted according to the schema `@bib{ID@pages}`, e.g. `@bib{RN143@234-237}`. The ID has to match an entry in the [eBL-Bibliography](https://www.ebabylon.org/bibliography). The "pages" element of the schema is free text and thus allows for prefixes like `pl.` to be used. Avoid abbreviations like `ff.` or `sqq.` and give exact page ranges.

## 2 Editing with eBL

## 2.1 Structure a Corpus

The concepts, entities and the overall structure defined above were modelled on the corpus of Standard Babylonian literature. The names chosen make this point of reference apparent. The definitions, on the other hand, are as general as possible and were not tailored to the particularities of a single genre. In the preparation of a [Corpus](#11-corpus) for its edition with the eBL Corpus Editor, it is a crucial first step to match the particular structure of a [Corpus](#11-corpus) of texts against the model defined [above](#1-basic-concepts-definitions-and-terminology). When deciding what parts and aspects of a [Corpus](#11-corpus) should be represented on which level it is helpful to focus on the relational aspects of the definitions. Important questions to ask are:

* What do I want to display at the same time on one page?
* How many sublevels do I need to adequately represent the structure of my corpus?

What is to be accommodated on the level of [Composition](#13-composition), [Version](#15-version), and [Chapter](#16-chapter) is not predefined. In combination with the strict and loose line numbering (see [Lines of Text](#17-lines-of-text)) the freely choosable designations for these levels offer a great degree of flexibility.

### Examples

| Genre | Category | Composition | Chapter |
| ----- | :-------- | :----------- | :------- |
| `R`   | Achaemenid Period | Cyrus | Cyrus Cylinder |
| `D` | Barûtu | _šumma ubānu_ | _šumma ubānu_ 1 |
| `L` | `III` Literary Hymns and Prayers | `4` Great Prayer to Šamaš | (1) |

The most important restrictions to consider exist at the extremes of the structure: On the top-level, it wouldn't make much sense to define a single recipe for a healing potion attested to by three different collective tablets as a [Corpus](#11-corpus). The use of the lowest level is restricted because everything that needs to be displayed as a continuous text on one page has to be part of a [Chapter](#16-chapter).

## 2.2 Prepare the Edition of a Composition

### 2.2.1 Create a List of Manuscripts

For every [Chapter](#16-chapter) of a [Composition](#13-composition), you need to create a List of Manuscripts. Only lines from [Manuscripts](#18-manuscript) entered in the List of Manuscripts can be assigned to [Lines of Text](#17-lines-of-text). To add a [Manuscript](#18-manuscript) to the list, you click on the button "Add manuscript" and enter a [museum or accession number](#222-format-museum-and-accession-numbers), choose [Provenance](#181-provenance) and [Period](#182-period), select a [Type](#183-type) and [set the siglum](#223-set-sigla-in-the-list-of-manuscripts).

### 2.2.2 Format Museum and Accession Numbers

The format of the museum and accession numbers should follow the conventions that also apply to the Fragmentarium. If there is both a museum and an accession number, the museum number suffices. For [Manuscripts](#18-manuscript) that consist of multiple directly joining [Fragments](#110-fragment) give only the number of the [Fragment](#110-fragment) with the lowest museum or accession number and add a plus sign.

### 2.2.3 Set Sigla in the List of Manuscripts

A manuscript siglum has to be unique within a [Chapter](#16-chapter). A siglum is composed of information about a [Manuscript's](#18-manuscript) [Provenance](#181-provenance), [Period](#182-period), [Type](#183-type), and an additional disambiguator. When setting a siglum in the List of Manuscripts, only the disambiguator needs to be entered manually. The rest of the necessary information will be automatically extracted from the respective fields. Arabic numerals should be used to distinguish between multiple [Manuscripts](#18-manuscript) with the same [Period](#182-period) and [Provenance](#181-provenance) properties. Note that indirectly joining parts of a [Manuscript](#18-manuscript) are transliterated in separate lines, each with an independent line numbering. Lower case letters should be used to indicate that [Manuscripts](#18-manuscript) are part of the same physical tablet if they don't join directly and lines do not overlap.

#### Example: Siglum

`UrkHelSch1`
`UrkHelSch2`

### 2.2.4 Edit Colophons

Colophons are to be edited in the respective field in the List of Manuscripts. The transliteration should follow the [eBL-ATF](atfFlavors.md) standard as it applies to editions of [Fragments](#110-fragment) in the [Fragmentarium](https://www.ebabylon.org/fragmentarium). Note that the use of labels like e.g. `o` for obverse (see [2.3.1](#231-sides-and-columns)) is not allowed. Use [@-lines](#192-paratextual-and-discoursive-features--lines) instead.

#### Example

```atf
@reverse
@catchline
40'. u-kap-pit#-ma ti-a-ma-tu₄ [p]i-ti-iq-ša#
$ 1 line blank
41'. DUB.1.KAM e-nu-ma e-liš ul-tu UGU {giš}[l]e-u₅-um na-as#-hi
42'. GABA.RI KA₂.DINGIR.RA{ki} ki-ma la-bir-ri-šu₂ SAR-m[a b]a-ri# x x (x) 15
43'. tup-pi {m}{d}+AG-mu-še-ti-iq-UD.DA DUMU {m}[x x x] x x x [(x)]
44'. pa-lih {d}AMAR.UTU u₃ {d}zar-pa-n[i-tu₄ x x x x x x]
45'. u₃ me₂-reš-tu₄ NU TUM₃ ina ITI-šu₂# [ana EN-šu₂ GUR-šu₂]
#note: On this line see @bib{RN2699@233–234 n. 12}.
46'. {iti}GU₄ U₄.9.KAM MU.27.KAM {m}d[a-ri-a-muš LUGAL]
$ end of side
#note: @bib{RN497@Nr. 422}
```

### 2.2.5 Deal with Tablet Series and Catchlines

In a [Composition](#13-composition) with multiple ancient [Chapters](#16-chapter), [Manuscripts](#18-manuscript) with catchlines should be assigned a `Quo`-Siglum in the edition of the [Chapter](#16-chapter) that the catchline refers to. So if e.g. `NinNA1` would be a Manuscript of SB Gilg. II and contained a catchline that refers to SB Gilg. III, it should have `NinNAQuo1` as its siglum in the edition of SB Gilg. III.

### 2.2.6 Add Bibliography and Notes

The list of manuscripts allows for notes to be added to every [Manuscript](#18-manuscript) and for [Manuscript](#18-manuscript) specific bibliographical references. If a text edition also contains copies of the edited tablets, separate entries should be created for edition and copy, respectively.

### 2.2.7 Write an Introduction

The edition proper of every [Composition](#13-composition) will be accompanied by an introductory page with links to the [Chapters](#16-chapter), Lists of Manuscripts, basic bibliography and an introduction. Extent and content of the introduction are left to the discretion of the editor.

## 2.3 Reference Manuscript Lines

Every line of transliteration is preceded by the Manuscript siglum and exact identification of the [Manuscript Lines](#19-manuscript-lines) that are being transliterated. Line number and transliteration are separated by a full stop and a space.

### 2.3.1 Sides and Columns

Use `o` for obverse, `r` for reverse. If you cannot determine to which side of a [Manuscript](#18-manuscript) with only one side preserved a line belongs, the indication of the side can be left blank. If a line is written entirely on one of the edges of the [Manuscript](#18-manuscript) use one of the following designations (see the [eBL-ATF labels definition](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/docs/ebl-atf.md#labels)):

|Abbreviation | Description |
|----|:---|
| `b.e.` | bottom edge |
| `e.` | edge |
| `l.e.` | left edge |
| `r.e.` | right edge |
| `t.e.` | top edge |

For columns use lower case Roman numerals like `i, ii, iii, iv`, see the [eBL-ATF labels definition](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/docs/ebl-atf.md#labels). As it is possible to reconstruct the number of columns of literary tablets with a high degree of certainty there is no need for a strict relative column numbering that only counts the columns preserved in a fragmentary tablet, like e.g. `ii'`. Instead, an absolute column numbering is preferred, so e.g. `iii` indicates the first column of the reverse of a two-column tablet even if the right-hand edge of that tablet is not preserved.

### 2.3.2 Line Numbers

The numbering of [Manuscript Lines](#19-manuscript-lines) on a side or in a column follows the same conventions as the strict numbering of [Lines of Text](#17-lines-of-text), see the [eBL-ATF labels definition](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/docs/ebl-atf.md#labels). Use Arabic numerals, prefixes (`a+, b+, ...`) to deal with lacunae, ranges, a suffixed prime if the first line of a manuscript is not preserved, and suffixed disambiguators (`a, b, c`) where needed.

### 2.3.3 One Line of Text in Multiple Manuscript Lines

If a [Line of Text](#17-lines-of-text) is spread over multiple [Manuscript Lines](#19-manuscript-lines) use a number range. Don't use `1f.`, `1seq.`, but `1-2`. The line breaks between words should be indicated with a `|`, for linebreaks within a word us `;`.

### 2.3.4 Multiple Lines of Text in One Manuscript Line

Add lower case letters (`a, b, c`) to the line number if a [Manuscript Line](#19-manuscript-lines) contains more than one [Line of Text](#17-lines-of-text). If the endpoint of a [Line of Text](#17-lines-of-text) is indicated with a _Glossenkeil_, transliterate it as `:` or `:.` respectively. The _Glossenkeil_ should always be transliterated at the end of that line and not at the beginning of the next. The next line should always contain the annotation `$ line continues`.

## 2.4 Transliterate Manuscript Lines

The transliteration should follow the [eBL-ATF standard](atfFlavors.md) that also applies to the Fragmentarium. The most important rules will also be illustrated below:

### 2.4.1 Broken Parts and Supplied Text

If a word is partly preserved the spelling of the broken part is to be supplied. It should be avoided to give several options for a spelling, like `šu/šu₂` or `tu/tu₂/tu₄/ta/ta₂/ta₃`.  
If a line is partly broken off, it should be indicated how many signs are lost by putting the respective number of `x`-signs between square brackets, e.g. `[x x x] e-liš la na-bu-u₂ ša₂-ma-mu`. Don’t use `[...]`, unless there is no other option (e.g. variant lines, that are only partially preserved, commentaries that are only attested in a single partly preserved manuscript etc.). The estimation of the size of a gap or part that is broken off should always be indicated by the respective number of `x`-signs between square brackets. For complex signs like e.g., `ABZU` put one `x`.

### 2.4.2 Rulings

The annotation `$ single ruling` and `$ double ruling` for rulings on a [Manuscript](#18-manuscript) should be placed in a new line following the [Manuscript Line](#19-manuscript-lines) that precedes the ruling, see the [definition](#191-material-and-structural-features--lines) of `$`-lines.

### 2.4.3 Erasures

The transliteration of erasures uses the following schema: `°<ERASED_SIGNS>\<SIGNS_WRITTEN_OVER_AN_ERASURE>°`, see the [eBL-ATF labels definition](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/docs/ebl-atf.md#labels). There is no need to combine the mark-up of erased signs with the mark-up of superfluous signs (`<<KA>>`).

### 2.4.4 Ink Dots in the Armana Manuscripts

To transliterate the punctuation in the [Manuscripts](#18-manuscript) from Amarna use the Unicode character U+2022 “•” (see the [eBL-ATF non-normalized text definition](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/docs/ebl-atf.md#non-normalized-text)). The same set of flags (`#, !, ?, *`) and brackets (`[ ], ( ), °\°`) applicable to cuneiform signs can also be applied to the bullet. If an ink dot is placed above a cuneiform sign on the tablet, the bullet documenting the ink dot in the transliteration follows the respective sign.

### 2.4.5 Preserved Edges

The annotation `$ end of side` and `$ end of column` for the preserved edges is to be put in a new line following the last line of a side or column.

### 2.4.6 Beginning and End of Excerpts

If the beginning of an excerpt on a tablet with multiple excerpts is preserved put `$ beginning of excerpt` in a new line following the first line of an excerpt. If the end of an excerpt is preserved put `$ end of excerpt` after the last line of the excerpt.

### 2.4.7 Ligatures

Ligatures are transliterated conventionally by putting a `+`-sign between the respective signs, e.g. `{d}+en-lil₂`.

### 2.4.8 Logogramms

A hyphen should only be used when a logogram is combined with a grammatical element like `MEŠ` or `BI`, cp. `DINGIR.DINGIR` and `DINGIR-MEŠ`. Use `ABZU`, not `ZU.AB`.

### 2.4.9 Variants of KAM

The signs with the reading /kam/ are to be transliterated in the following manner

* ABZ Nr. 143 𒃶 = KAM₂
* ABZ Nr. 406 𒄭𒁁 = KAM
* ABZ Nr. 406 𒆚 = KAM@v

### 2.4.10 KIMIN

Transliterate `KIMIN` as a logogram. In the normalisation, the word or words that are indicated by `KIMIN` are to be put in round brackets. If one of the manuscripts spells out what another abbreviates with `KIMIN`, no brackets are needed. The text represented by `KIMIN` or `MIN` can be supplied in `<(...)>`, e.g. `{d}MIN<(AMAR.UTU)>`.

### 2.4.11 Editorial Annotations and Interventions

Put `!?` after a sign to indicate that it needs collation.  
Mark emendations as `zu!(SU)`, not `zu!(“SU”)` or `zu!(copy: “SU”)` etc.  
There is no special mark-up for signs that are documented in older copies but not preserved anymore in the actual state of the respective tablet. In such cases, a comment can be put in the Note to the respective line.

If a [Manuscript](#18-manuscript) omits a [Line of Text](#17-lines-of-text), document this as in the following manner:

```text
NinNA1
$ 1 line omitted
```

If you encounter a wrong sequence of signs on a tablet, transliterate them in the corrected order and put `:` between the signs whose position has been altered in the correction. So e.g. if a tablet has `wi a lum` transliterate this as `a:wi-lum`.

## 2.5 Reconstruct the Lines of Text

> Ohne feste kritische Grundlage wird das philologische Gebäude auf Sand aufgeführt und die philologische Wissenschaft gestaltet sich zum bloßen Dilettantismus
>
> W. Freund, [_Triennium philologicum oder Grunzüge der philologischen Wissenschaften_](https://books.google.de/books?id=PFJeAAAAcAAJ&printsec=frontcover&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false). Leipzig, 1874

### 2.5.1 Principles of Textual Criticism

The editions prepared within the framework of the eBL-project are both critical and diplomatic: Diplomatic because every textual withness is transliterated with as little editorial intervention as possible; critical because the score transliteration is accompanied by a normalised version of the respective line that results from the critical-comparative activity of the editor and doesn’t have to agree with any particular manuscript or with the version attested by the majority of the witnesses. The method by which a normalised version is deduced from the positive manuscript evidence (_recensio_) is neither stemmatological, nor following the _Leithandschriftenprinzip_, but eclectic: Readings are drawn from all the manuscripts available and their selection is based on the editor’s evaluation of the internal and external evidence at hand. As opposed to Lambert, who outlined his model of eclectic reconstruction in his _Babylonian Creation Myth_ (pp. 9–10), the version deduced from the positive manuscript evidence can and shall be subjected to the editor’s corrections (_emendatio_).

The aim is to present the reader with a version of a text that is in accordance with the rules of Standard Babylonian grammar. Variant readings should only be given in the apparatus to the normalised line if they demand a different translation, i.e. lexical variants and morphological variants of verbal predicates (for the conventions see below). The normalised line is conceptualised as an intermediary step between the transliteration and the translation, and thus as a means of making exegetical options apparent to the reader – e.g. the grammatical analysis of a given line –, and not as the representation of an original or archetype. It also has the advantage that the normalised version is linguistically uniform and not a mixture of all the different dialects (Assyrian, Late Babylonian etc.) occurring in manuscripts of Standard Babylonian literature. The latter is inevitably the case if an editor refrains from _emendatio_.

### 2.5.2 Normalisation

In general, the normalisation is to be understood as a phonemic representation of a line and not as its phonetic rendering. If a part of a line can not be reconstructed, this is indicated by putting `...` in the normalisation. Always use lower case letters, even for names.

### 2.5.3 Grammar and Lexicon

Word forms should be in concordance with the [eBL-CDA](https://www.ebabylon.org/dictionary). In difficult cases a justified deviation from this rule is possible. With regards to grammar, _GAG_ ³ applies.

### 2.5.4 Some Special Cases and Recurring Questions

* _tiāmtu_ with case inflexion instead of _tiāmat_ (see Borger _OrNS_ 77 (2008) 272 (Rez. Talon SAACT 4))
* The divine name _ānum_ should be transcribed as _ānu_ (with long _ā_, see Edzard, _Sumerian Grammar_ (2003) 13; since it appears in the last position of the verse, e.g. in _Ee_ I 105, IV 4. 6. 44, VI 147) but transliterated as `a-num` or `a-nim`, as the sign `NUM` is otherwise hardly ever used to write /nu/.
* Don’t decline names, unless the cases are clearly marked in the respective spellings (e.g. `ap-sa-a`).
* Avoid genitive in /e/ except for Assyrian tablets
* _qereb_, not _qirib_
* _ilū_, not _ilānu_ for `DINGIR.DINGIR` and `DINGIR-MEŠ`
* For the normalisation of I-_w_ preterite forms we use the short and not the long forms, so _ubil_, not _ūbil_ (pace v.Soden, with Huehnergard “Three Notes on Akkadian Morphology,” _Fs Lambdin_ (1987) 191–193).
* Vetitive particle should be put as ai following the eBL-_CDA_
* _igīgū/ī_ and _anunnakkū/ī_
* _ayyu_ „which“, not ayyû

## 2.6 Reconstruct a Standard Spelling

The special [Provenance](#181-provenance) Standard Text (`Std`) allows for the creation of a virtual archetypal manuscript. Put at the top of the score of [Manuscript Lines](#19-manuscript-lines), Standard Text Manuscripts thus enable the reconstruction of a standard spelling. Other than the normalisation the reconstruction of a standard spelling is an optional element of eBL-editions.

## 2.7 Analyse and Annotate

### 2.7.1 Alignment and Apparatus

Once the [Manuscript Lines](#19-manuscript-lines) are entered, they have to be aligned: The editor has to declare to which word of the standard reconstruction every word of the manuscripts belongs. The process is automatised and only ambiguous cases have to be entered by hand. At this point, variant words or omitted words can be entered. In `Com`-Manuscripts (see [1.8.3 Type](#183-type)) only the quotations from the base text marked with the protocols `!qt` or `!bs`should be aligned. If a commentary contains both only the fully quoted lines should be aligned.

Substantial variation is to be documented in an apparatus entry to the normalised line. The rule of thumb here is different literal interpretation = substantial variant. The apparatus should be put in the same line as the normalisation.  
A word, to which an apparatus entry exists, is followed by a `†`. The respective apparatus entry is then preceded by `†`. If more than one apparatus entry is necessary, disambiguate by adding Arabic numerals to the dagger-symbol, like `†`, `†2`, `†3`.  
The entry itself consists of the siglum of the [Manuscript](#18-manuscript) that contains a variant reading and the normalised reading. If a variant reading is attested by more than one Manuscript the respective manuscript sigla are concatenated using the `&` sign (examples below). If a word of the reconstructed line is missing in a manuscript the apparatus entry for that should be `† NinNA1 ø`.  
In cases where no well-founded critical decision is possible, simple variants are to be documented by the following shorthand: if some manuscripts contain e.g. the conjunction _u_ and others omit it, this can be indicated by transcribing `(u)` in the normalised line. Another frequent cause for the application of this shorthand is the enclitic particle _-ma_.  
If manuscripts vary above the level of the single word, this should be documented with an apparatus entry that refers to the whole line. To indicate that an apparatus entry refers to a whole line put the `†`-symbol in front of the first word.

### 2.7.2 Lemmatization

Once the text is aligned, the standard reconstruction can be lemmatized using the same lemmatizer that is available in the Fragmentarium. When a word is lemmatized, all words aligned with it are given the same lemmatization. This can be changed manually, e.g. if there is a variant.

### 2.7.3 POS-Tagging

Once implemented, the process of grammatical annotation and Position of Speech-tagging will be described here.

### 2.7.4 Parallel Lines

If the same line is attested more then once within the same [Composition](#13-composition) or it appears unchanged in a different [Composition](#13-composition) this should be indicated after the normalisation after the apparatus entries in accordance with the following schema: `// Genre Category.Index (Stage) (Version) ("Chapter Name") Line Number` e.g `// L I.2 SB "I" 158` (= Literature, Category I, Index 2, Stage SB, Chapter I, line 158) or `// L I.4 SB "VII" 23–123`.  
[Chapter](#16-chapter) and [Version](#15-version) must only be given if a [Composition](#13-composition) has more than one Chapter or Version respectively.  
If a parallel line shows substantial variation in comparison to the respective line of the text being edited, this fact should be indicated by a cf. after `//`, e.g. `// cf. L I.4 OB II 3`.  
Links to the Fragmentarium are also possible, using `// F Fragmentarium_id (&d) (surface) Line_Number`, e.g. `// F K.12341 o`. `&d` ("and duplicates") and `surface` are facultative. The latter follows the standard abbreviations for ATF Labels.  
To indicate a parallel to a [Composition](#13-composition) that is neither part of a [Corpus](#11-corpus) nor present through [Fragments](#110-fragment) in the Fragmentarium (as e.g. Sumerian Adapa) use the following schema: `// (descriptive_name line_number)`. The round brackets are there to indicate that the reference is not a hyperlink. The descriptive name chosen for a composition and the edition according to which the composition is cited is to be noted in the introduction to the eBL-edition.

### 2.7.5 Scansion

Follow the rules outlined by Lambert _Babylonian Creation Myth_ (2013) 17–34 and Jiménez _Babylonian Disputation Poems_ (2017) 72–76. Use `||` to indicate the caesura and `|` to separate metrical feet. If you are uncertain about a given metrical analysis put `||` or `|` between round brackets, like `(|)` or `(||)`.

## 2.8 Add Bibliographical References and Notes

[Notes](#193-notes-note) can be added to [Lines of Text](#17-lines-of-text) and [Manuscript Lines](#19-manuscript-lines). Commentary in Notes should, in general, be kept to the necessary minimum. For the correct formatting see [Bibliographical References](#111-bibliographical-references) above. The text surrounding the Bibliographical Reference in a note is free text. So abbreviations like `cf.`, `see`. can be used if needed. Once processed the references will be displayed as Author, Year: Pages. The name of the author can not be suppressed.

## 2.9 Translation

Translations are to be added to the respective [Lines of Text](#17-lines-of-text). Similar to [Notes](#193-notes-note) the translation sits in its own line beginning with `#tr`, followed by a language code (e.g. `en`, `de`, `ar` etc. in accordance with  [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)), the extent of the translation in parantheses, a colon, and the translation itself with the same inline formatting options that are available in [Notes](#193-notes-note). Language code and extent are each appended to the preceeding element with a period, e.g. `#tr.de:`. Both are facultative. If no language code is given (e.g. `#tr:`) the default language is English. If an extent is given the translation should be added to the first line in the range and the parentheses should contain the last line of the range, e.g.:

### With Lines of Text

```atf
1. enūma
#tr.en.(3): When above heaven had not been named.
2. eliš
3. lā nabû šamāmū
```

### With Manuscript Lines (to be used in the Fragmentarium)

```atf
@obverse
1. e-nu-ma
#tr.en.(o 3): When above heaven had not been named.
2. e-liš
3. la na-bu-u₂ ša-ma-mu
```

## 2.10 Canonical Examples

```atf
41'. %n uballaṭ | marṣa || ša ubburūš | liʾbu
UrkHel1 r 7a. u₂-bal-laṭ GIG ša₂ ub-bu-ru-uš li-bi
$ line continues
UrkHel3 o 13. {(he-pi₂)} <(u₂-bal-laṭ)> GIG ša₂ ub-bu-ru-šu₂ le-e-bu

42'. %n utār-ma† | ultu arallê || šibṭa | namtara
† UrkHel3 itâr
UrkHel1 r 7b. u₂-tari(GUR)-ma <ul-tu> a-ra-le-e ši-biṭ {d}nam-tar-ri
UrkHel3 o 14. i-ta-ri ul-tu a-ra-al-le-e ši-biṭ nam-ta-ri
UncNBSch1 i 1–3. u₂-ta-ru₃ | <ul-tu₂> a-ra-le-e | ši-biṭ nam-tar-ri |

43'. %n ša ina irtīšu || uzabbilu | napšassu
UrkHel1 r 8a. ša₂ ina GABA-šu₂ i-zab-bil nap-šat-su
$ line continues
UrkHel3 15a. ša₂ ina GABA-šu₂ u₂-zab#-bil nap-šat-su :
$ line continues
UncNBSch1 i 4–5a. ša₂ <ina> GABA!-šu₂ i-zab-bil | nap-šat#-su#
$ line continues

44'. %n mūtu | īrimūšī-ma || našûšu | ana qabri
UrkHel1 r 8b. mu-u₂-tu₂ i-ri-mu-ši-ma na-šu-šu₂ a-na qab-ri₃
UrkHel3 15b. mu-u₂-tu i-ri-mu-ši-ma <...>
```

```atf
2. %n bānû (|) ê (|) u qê || mušēṣû (|) urqīti
// (Marduk 5 14)
#tr.en: The creator of barley and flax, who made plant life grow.
NinNA1 o 2. ba-nu-u₂ ŠE.AM u qe₂-e m[u-š]e-ṣu-u₂ [x x x]
HuzNA1a o 2. ba-nu-u₂ ŠE#.AM# u₃# qe₂-e mu-še-ṣu-u₂ ur-qi₂-tu₄#
BabaNB1 o 1'. [x x x x x x x x mu-še-ṣu]-u₂# ur#-qi₂#-[ti]
NinNACom2 r 3'. !qt [x x x ŠE].IM u₃ GU-e m[u-še-ṣu-u₂ x x x !zz ...]
NinNACom3 r 4'. !qt [x x x x x x x x mu-še-ṣ]u-u₂ ur-qi-t[i !zz ...]
NinNACom4 r 3'-4'. !qt b[a-nu]-u₂# ŠE.IM u G[U-e x x x x x x x] | ($___$) !bs [G]U-um ṣi-hir-t[u ...]
NinNACom5 r 7'. [x x x x x x x x x x x x x x x ...] an {se}GIG
NinNACom6 i 6-10. !bs {+ru}RU₂ & !cm ba-nu-u | ($___$) !bs SAR & !cm ŠE.IM | ($___$) !bs SAR & !cm qu-u₂ | !bs {+ma}MA₄ & !cm a-ṣu-u₂ | ($___$) !bs SAR & !cm ar₂-qu
$ single ruling
BabaNBCom3 r 8'-9'. !qt ba-nu-u₂ ŠE#.IM u GU-e [x x x x x x x] | !zz ($___$) GU#-u₂# ṣi-hir#-t[u ...]

93. %n pagalguʾenna | ašarēd naphar bēlī || ša šaqâ | emūqāšu
// cf. (LB 3272 Vs. 5)
NinNA4b r 2. [{d}pa₅]-gal-gu₂#-en#-na [x x x x x x x x x x x x x x]
NinNA5 r 10. {d}p[a₅-gal-gu₂-en-na x x x x x x x x x x x x x x x]
AššNA1 r 9. {d}pa₄-gal-gu₂-en-na a-ša₂-red nap-har EN DINGIR-MEŠ ša₂ ša₂-qa-a e-mu-qa-šu₂
HuzNA2 r 5b. {d}pa₄-gal-gu₂-en-na a-ša₂-red nap-har be-li ša₂ ša₂-qa-a e-m[u-q]a-šu₂#
NinNAQuo2 5'–6'. [{d}pa₄-gal-gu₂-en-na &] {d#}MIN & a-ša₂-r[ed x x x x] | ša₂ ša₂-qa-a# [x x x x]
NinNAQuo3 3'–4'. [x x x x x x & x x & x x x] nap#-har be-li₃ | [x ša₂-qa]-a# e-mu-qa-šu₂

155. %n rūqu | libbašu || rapaš | karassu
// I.2 VI 138
NinNA2 r 31'. ru-u-qu lib₃-ba-šu₂ la*-ʾ-iṭ k[a]r-as#-[su]
NinNA3 r 21'. [x x x x x x r]a-pa-aš₂ ka-ra[s-su]
HuzNA1a r 6'. ru#-qu₂ lib₃-ba-šu ra#-pa#-[aš₂ k]a-ra-as#-su
SipNB1 r 31'. ru-u₂-qu li-ib-[ba-š]u ra-pa-aš ka-r[a-a]s-su
BabaNB2 r 30'. ru-u₂-q[u l]i-ib-ba-šu ra-pa-aš ka-[ras]-sa
BabaNB3 r 21'a. ru-u₂-qa [li]b₃-ba-šu ra-pa-aš₂ ka-ra-aš-sa :.
$ line continues
UrkNB1 r 42'. [x (x) x x x x x ra-p]a-aš ka-ra#-a[š?-sa]
```

Variants are imported independently
