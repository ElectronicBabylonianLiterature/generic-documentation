# Instructions for the use of the Library

**General Transliteration Rules for the eBL**

The eBL project uses a version of the A(scii)T(ransliteration)F(ormat). The ATF, used both by CDLI (in its ASCII version) and by Oracc (in its Unicode version), is the most popular format for the transliteration of cuneiform texts. A complete guide to Oracc ATF can be found [here](http://oracc.org/doc/help/editinginatf/). The eBL-specific conventions are documented [here](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/docs/ebl-atf.md).

1. New lines can be genereated by entering in the field to the right of `Save` the number of lines (you can also use prime after the number of lines if the lines have a prime mark, and use e.g. `3′, 5` for obv and rev). Then press Enter.

<p align="center">
 <img src="images/automatic_lines.gif">
</p>

2.  Avoid using accents. Use instead Unicode subindex numbers (Alt + Number). Do not use a breve under H or h: use H or h, not Ḫ or ḫ.

3.  For indented lines, use `($___$)` (i.e., three underscores between dollar signs and parentheses) to Mark a blank space. Use in particular at the beginning of the line, avoid using it in the middle of the line.

4.  If fragments have been identified and an absolute numeration can be established on the basis of duplicates or joins, then give the absolute numerations in notes, but retain the relative numeration in the edition. Thus:
 
 ```
4'. [... ku]l-ba-ni-iš
\#note: 20
5'. [...] UZU-MEŠ-šu
\#note: 21
```

5.  Capitals should be used only when it is clear that a certain sign is a logogram. Otherwise, it may confuse the lemmatizer. For signs of uncertain reading, use non-caps.

6.  Avoid using slash for different readings of the same sign. `ku/lu` → OK, but **ku/tuš** → NO

7.  Columns: `@column 1`, `@column 2`, etc.

8.  Rulings: `$ single ruling`, \$ double ruling, etc.

5.  `IGI-MIN`, `GEŠTU-MIN`, etc.

6.  `$ traces`

7.  If a line is the last of a tablet (in Lambert’s papers, “edge”), then add a line saying “`$ end of side`”, “`$ end of column`”, “`$ end of obverse`”, etc. E.g. [K.18264](https://www.ebl.lmu.de/library/K.18264)

8.  If a line is the first of a tablet, **do not use prime numbers**

9.  Use short readings of mimated signs: tu₄ instead of tum, ti₃ instead of tim, lu₄ instead of lum, etc.

10. Document-oriented glosses (“scribal comments on the document including 10-marks, line-count summaries and asides such as he-pi₂”) should be enclosed in {(…)}, e.g. {(he-pi₂)}.

11. **Use `@colophon` to mark the section containing the colophon (after the ruling).** [Addition, 01.2020]

12. **Colophons should be added to the Colophon database ([here](https://gwi-fm1.gwi.uni-muenchen.de/fmi/webd/AsbCol), user name and password provided separately).** [Addition, 05.2020]

13. **Tablets with interesting epigraphic features should be added to this list ([here](https://trello.com/c/fmxeDDGE)), so that they can be systematically tagged.** [Addition 09.2020]

14. In the case of intralinear bilinguals sumerian and akkadian should each be transliterated in a separate line. To differentiate add `a` and `b` to the line number, so. e.g. 
`4a. %sum [transliteration of the sumerian version]`  
`4b. ($___$) [transliteration of the akkadian version]`

15. If textcritical glosses don't repeat the antecedent in full the respective word needs to be supplied, e.g. `er₂-ra : <(er₂)>-ta`.

## **Joins**
1.  Joining pieces should be edited in a single edition on the page of the fragment with the lowest museum number.

## **Lemmatization**
 1.     Whenever possible, the lemmatization feature should be used (lemmatization tab). The lemmatization follows the `Concise Dictionary of Akkadian`.
 2.     The program automatically recognizes some of the lemmas, and these are shown red in the lemmatization tab. In the case of these lemmas, you just need to check if the proposed lemma is correct. After revising them, press `Save` to consolidate them.
 3.     The lemmas without colour need to be entered manually. Click on the lemma, and either choose from the proposed lemmas or type in the lemma (no special characters needed) in order to find it. If needed, consult the dictionary feature (= CDA) to differentiate between ambiguous lemmas.
 4.     The lemmatization dialogue is insensitive to special characters: `s` = `s`, `ṣ`, `š`; `a` = `a`, `ā`, `â`.
 5.     Statives should be lemmatized under the infinitive (`par-sat` → `parāsu I`)
 6.     Most participles have independent entries (so `pa-ri-su` → `pārisu`). If they don’t, lemmatize them under the infinitive (`ta-bi-ku` → `tabāku`, since there is no `tābiku`).

## **Genres**
 1.     Genres are divided into four major groups: **Archival**, **Canonical**, **Monumental**, and **Other**. In the groups there are up to three levels of categorisation, e.g. CANONICAL > Literature > Monologue and Dialogue > Fables.
 2.     To add a genre classification to a tablet simply select the appropriate option from the drop-down menu under "Genres".
 3.     It is possible to add several genre classifications to one tablet.
 4.     If only the genre group that a text belongs to is known, just select one of the four groups from the drop-down menu.
