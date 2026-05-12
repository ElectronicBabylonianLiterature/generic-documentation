# 🧩 Interactive Runner for ATF Importer

Created: 2025-11-06
Last Reviewed: 2026-05-12

## Overview

`interactive_import_onepass.py` is a **runner script** that automates the process of importing ATF (ASCII Transliteration Format) data from **Oracc** or **CDLI** into the **eBL database**.  
It simplifies the workflow by automatically handling user interactions during the import, especially **lemma resolution**, and by caching answers for future runs.

This script is designed for **interactive use** — it prompts the user whenever unknown lemmata are encountered and immediately updates a persistent lookup file so that the same lemma mappings are reused automatically next time.

---

## 🚀 Usage

### Command

```bash
poetry run python ebl/atf_importer/runner/interactive_import_onepass.py
```

---

## 📂 Directory Setup

Before running the importer, ensure that the following directory structure exists:

```text
ebl/
 └── atf_importer/
     └── runner/
         ├── interactive_import_onepass.py
         ├── missing_lemmata.json     # Automatically created or updated
         └── data/
             ├── *.atf                # ATF files to be imported
             ├── *.json               # Glossary and lemma mapping files
             └── logs/                # Import logs (created automatically)
```

**Important:**

- Copy all `.atf` files and glossaries you wish to import into the `data/` directory.
- The importer reads from `data/` and writes logs into `data/logs/`.

---

## ⚙️ Environment Configuration

The script depends on the **eBL API environment**, including access to MongoDB.

---

## 🧠 How It Works

1. **Initialization**
   - Loads previously saved lemma mappings from `missing_lemmata.json` into memory.
   - Starts the standard eBL importer (`ebl.atf_importer.application.atf_importer`) as a subprocess via Poetry.
   - Monitors the importer’s output stream in real time.

2. **Automated Input Handling**
   - Detects prompts for user input (e.g., missing lemma IDs, yes/no confirmations, or other import questions).
   - Answers automatically when possible:
     - Reuses known lemma mappings.
     - Automatically answers `Y` to yes/no questions.
     - Prompts the user interactively for new or ambiguous inputs.

3. **Interactive Lemmatization**
   - When an unknown lemma is found, the user is prompted for the correct eBL lemma ID.
   - The mapping between lemma and guideword is saved immediately.
   - If the same combination appears again in the same or later runs, it will be applied automatically.

4. **Real-Time Logging**
   - Displays all importer output in real time.
   - Tracks which `.atf` files were successfully imported and under which museum numbers.

5. **Persistent Storage**
   - Lemma mappings are stored in:

     ```text
     ebl/atf_importer/runner/missing_lemmata.json
     ```

     Each entry is saved as:

     ```json
     {
       "lemma|guideword": "EBL_LEMMA_ID"
     }
     ```

---

## 🧩 Example Session

```text
======================================================
ATF IMPORTER - SINGLE-PASS INTERACTIVE MODE
======================================================

✅ Loaded 42 saved lemma mappings from previous sessions

UNKNOWN LEMMA ENCOUNTERED
------------------------------------------------------
  Lemma: bītu
  Transliteration: bi-it
  Guide word: house
  POS: N
------------------------------------------------------
  Enter eBL lemma ID (e.g., 'bītu I') or press Enter to skip:
  > bītu I
  ✅ Verified and saved: bītu [house] → bītu I
  💾 Saved to lookup file (total: 43 mappings)
```

If the same lemma appears again:

```text
→ Using saved mapping: bītu [house] → bītu I
```

---

## 🧾 Output Summary

At the end of the import, a summary is displayed:

```text
======================================================
IMPORT COMPLETE
======================================================
  Exit code: 0
  Total prompts: 12
  New lemmas added: 3
  Total saved mappings: 45
  Lookup file: ebl/atf_importer/runner/missing_lemmata.json
  Imported texts: 7

  Imported Texts:
    - BM.12345 (from AD-123A.atf)
    - BM.67890 (from AD-456B.atf)
======================================================
```

---

## 💡 Tips

- Run this script **within an ebl-api Poetry-managed environment** to ensure all dependencies and database access are available.
- Keep `missing_lemmata.json` under version control if multiple users contribute to lemma mappings.
