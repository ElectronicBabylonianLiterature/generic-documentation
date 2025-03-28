# eBL TEI Export 
The [TEI XML](https://tei-c.org/) Export feature of eBL creates a TEI XML [P5](https://tei-c.org/guidelines/p5/) compatible .xml file that can be downloaded from any fragment page.

## Structure
The general structure of the XML contains a `<teiHeader>` as well as a `<text>` and contained `<body>` section.

### `<teiHeader>` 
contains relevant meta-information such as the fragment's title `<title>` containing the text number, a publication statement `<publicationStmt>` containing the location/collection in which the text is published as well as a brief source description `<sourceDesc>`, a description of the source (the original text) from which the downloaded digital file is derived. 

### `<body>`
contains the text divided into line groups (`<lg>`). Line groups are subdivided into lines (`<line>`), which consists of one or more words (`<w>`).
The line groups group the text’s line into segments defined by structural notes `<note>` ([@-lines](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/docs/ebl-atf.md#-lines)) that are displayed (if available) at the beginning of the line group (`<lg>`) they define. Notes about the fragment’s state ([$-lines](https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/docs/ebl-atf.md#-lines-1)) are also displayed as notes (`<note>`) within their respective line groups.
If available, a general note about the text is displayed after the last line group using `<note>`.

### `<line>` and `<w>`
Lines `<line>` are additionally numbered with a line-number that is contained in their `attribute n`. A line-number contains the text number followed by a "." and the respective line number. If available, the word `<w>` will contain its respective lemma or lemmata in the `lemma` attribute.
