# This tool is meant to be used along with the Letra translation extension guide on how to add a language:
# https://github.com/jayehernandez/letra-extension/blob/master/docs/new_language.md

# Steps:
# 1) Ensure Python is installed.
# 2) Add a copy of the Google Sheet containing the 3000 most used English words to your Google Drive:
#    https://docs.google.com/spreadsheets/d/1XFWxJPyVvlG-XL_EFGZ2BUTII0Gr3ovoKPrjfEi-a14/edit#gid=0
# 3) Set up Google Sheets API access and download credentials-sheets.json into the same folder as this script:
#    https://developers.google.com/sheets/api/quickstart/python
# 4) Fill in SHEET_ID and TARGET_LANG below.
# 5) Run this file to auto-translate and fill in the words in the Google Sheet.

import os
import sys

# Fill in the Google Sheet ID and the target language code (e.g., 'es', 'fr', 'de')
SHEET_ID = 'ADD GOOGLE SHEET ID HERE'
TARGET_LANG = 'LANGUAGE TO TRANSLATE TO'


def have_credentials() -> bool:
    # ezsheets looks for credentials-sheets.json in the current working directory by default
    candidates = [
        os.path.join(os.getcwd(), 'credentials-sheets.json'),
        os.path.expanduser('~/credentials-sheets.json'),
    ]
    return any(os.path.exists(p) for p in candidates)


def main() -> None:
    # Basic validation to avoid attempting API calls with placeholder values
    if not SHEET_ID or SHEET_ID.strip().upper().startswith('ADD GOOGLE SHEET ID'):
        print('Missing SHEET_ID. Please set SHEET_ID to your Google Sheet ID.', file=sys.stderr)
        return

    if not TARGET_LANG or TARGET_LANG.strip().upper().startswith('LANGUAGE TO TRANSLATE'):
        print('Missing TARGET_LANG. Please set TARGET_LANG to a valid language code (e.g., "es", "fr").', file=sys.stderr)
        return

    if not have_credentials():
        print(
            'Missing credentials-sheets.json. Download it from the Google Sheets API Quickstart '
            'and place it in the same directory as this script.',
            file=sys.stderr,
        )
        return

    try:
        import ezsheets  # Import here to avoid initializing if we exit early
    except Exception as e:
        print(f'Failed to import ezsheets: {e}', file=sys.stderr)
        return

    try:
        ss = ezsheets.Spreadsheet(SHEET_ID)
        sheet = ss.sheets[0]
    except Exception as e:
        print(f'Failed to open spreadsheet: {e}', file=sys.stderr)
        return

    # Fill column A with GOOGLETRANSLATE formulas that reference column B (source English words)
    for i in range(2, 3002):  # Rows 2 through 3001 inclusive
        sheet[f'A{i}'] = f'=GOOGLETRANSLATE(B{i}, "en", "{TARGET_LANG}")'


if __name__ == '__main__':
    main()