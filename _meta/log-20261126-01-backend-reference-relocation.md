# Backend Reference Relocation Log

Created: 2026-11-26
Last Reviewed: 2026-11-26

Reviewed the backend README and source at 60a8ce461cc135b5791dcf06974551609e0aca67
and the documentation base at 8b6594a7c3eb0494fbe4c30cbc285be63ad45eac.
Mapped five detailed README sections to the four existing reference chapters.
Replaced obsolete startup-index, cache-invalidation, and public-route
generalizations where the relocated material made those statements incomplete.
Preserved Created metadata, added current Last Reviewed metadata at the top,
and retained existing heading anchors. No application code, runtime setting,
database, or service was changed. No local tests were run.

Markdown lint passed on all four edited chapters, both internal records, and
the companion backend README. All 97 checked repository file/anchor references
resolve; no other documentation files link to the removed README anchors.
An inherited provenance source link was corrected to the current service.
Independent source and preservation reviews passed; the filter-composition
reference was corrected to the pattern matcher. Recovery and migration CLI
snippets were checked against source without running those commands.

The companion README change is on the backend findspot-query branch. Publish
the documentation update before that cleanup is merged into backend master.
No primary page links to these internal task records. Review this log and the
paired plan before merge and remove either if it is not needed for memory.
