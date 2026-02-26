# Adding New Dossiers

## Dossier Description

The description (max. 150 words) should contain the following elements:

1. **Findspot and physical characteristics** — Number of tablets, their state, and precise archaeological locus or building context (if available).
2. **Date range** — Chronological span of the documents, established by eponyms, regnal years, or named rulers.
3. **Key protagonists** — The central individuals (with titles where relevant) around whom the archive is organized, and their relationships to one another.
4. **Content summary** — The dominant document types (loans, purchases, ration lists, letters, literary texts, etc.) and the commodities, activities, or institutions they concern.

Example (Aššur M 12):
```
About 60 unbaked clay tablets (plus a few fragments and one baked tablet) were found inside a sealed clay pot in
a small chamber of a private house in area eA9I. The tablets date to the late reign of Shalmaneser I and
especially to Tukultī-Ninurta I’s early years (c. 1243–1207 BCE), as indicated by eponyms such as Tukultī-Ninurta,
Qibi-Aššur, and Mušallim-Adad. The core archive belongs to Uṣur-bēl-šarra, titled @i{nāqidu} ("shepherd") and
later @i{bēl pāhete} ("governor"), and his subordinates Urad-Papsukkal and Urad-Ištar, who managed hundreds
of cattle, recorded milk deliveries to the palace in skins and special pots, and oversaw sheep loans. A secondary
group of about six texts is attributed to Rīš-Aššur and his extended family, who issued loans of grain, lead,
and silver secured on fields and houses.
```

## Other Fields

**Provenance**
The ancient site from which the dossier originates (e.g. `Ur`, `Aššur`, `Babylon`). Use the conventional ancient place name, not the modern one.

**Date (`yearRangeFrom` / `yearRangeTo`)**
The chronological span of the dossier expressed as a year range in BCE (negative integers). Both fields should be filled where possible. If only an approximate date can be given, set `isApproximateDate` to `true`; if the date is secure (established by explicit year formulas or eponyms attested in the texts), set it to `false`. Leave both year fields empty (`null`) if no dating is possible at all.

**Script Period (`script.period` / `script.periodModifier`)**
The primary script/period classification of the dossier. Use standard eBL period labels (e.g. `Ur III`, `Old Babylonian`, `Middle Assyrian`, `Neo-Assyrian`, `Neo-Babylonian`, `Persian`, `Hellenistic`). The optional `periodModifier` refines the period where necessary (e.g. `Early`, `Late`, `None`). When the texts span two periods, prefer the period of the majority of documents, and note the exception in the description.

**References**
A list of the key scholarly works discussing the dossier. Each entry requires:
- `id` — the eBL bibliography identifier of the work
- `type` — typically `DISCUSSION` for works that analyse the dossier; other values may apply for editions or catalogues
- `pages` — the specific page range relevant to the dossier (leave empty if the reference covers the dossier as a whole)
