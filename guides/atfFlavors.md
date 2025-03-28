See here: [eBL-ATF specification](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/docs/ebl-atf.md)

* eBL validates transliterations against a sign list. If a value is not present in the sign list, the transliteration is considered invalid even if the syntax is correct.

# Oracc ATF
* `$` for `Is not a logogram` (see [here](http://oracc.museum.upenn.edu/doc/help/editinginatf/primer/inlinetutorial/index.html#d2e18948)) is not supported. It should be removed from the text.
* [Line number is a sequence of non-space characters](http://oracc.museum.upenn.edu/doc/help/editinginatf/primer/structuretutorial/index.html#d2e18411). Conversion to the stricter eBL-format is not possible in the general case.
* [\* = Bullet](http://oracc.museum.upenn.edu/doc/help/editinginatf/primer/inlinetutorial/index.html#d2e19777), the "1" used at the start of each line in lexical texts, omen compendia, etc.. Should be converted to DIŠ.
* `\t` always will be converted to a space character ` `.
* Only interlinear [translations](http://oracc.museum.upenn.edu/doc/help/editinginatf/translations/index.html) are supported. The extent of the translation can be given after the language code, e.g. `tr.en.(o iii 3):`.

## Legacy grammar
* Vowels (`[aeiuAEIU]`) can have acute and grave accents, which correspond to `₂` and `₃` in the sign respectively. Thus, `šá` → `ša₂`, `àm` → `am₃`

## Lemmatization

In Oracc lemmatization is done with `#lem:` lines. eBL has specialized GUI for lemmatization, which is separate from the transliteration. Oracc transliteration needs to be converted and saved first. Then the Oracc lemmatization has to be converted to the eBL lemmatization object and updated to the fragment.

# C-ATF

# Archibab ATF
See [here](http://www.archibab.fr/)

* `()` → `{}` (i.e., determinatives)
* `⸢SIGN-SIGN SIGN SIGN⸣` → `SIGN#-SIGN# SIGN# SIGN#`
* `(?)` → `?` (after signs)
* `(!)` → `!` (after signs)
* As in the ATF Legacy Grammar, Vowels (`[aeiuAEIU]`) can have acute and grave accents, which correspond to `₂` and `₃` in the sign respectively. Thus, `šá` → `ša₂`, `àm` → `am₃`
* The lemmatization is not convertible, since it uses French GWs
![Capture d’écran 2020-04-17 à 11 32 53](https://user-images.githubusercontent.com/39047733/79564025-2e705500-80ae-11ea-98b3-76392e32be55.png)
