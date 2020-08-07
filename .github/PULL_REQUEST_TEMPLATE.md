<!--Please select specific checklist(Quote/Language) according to PR and make sure to check the following boxes by putting x in the [ ] (Example: [x]). Remove the checklists that are NOT related to your PR. Thank you for your contribution-->

## ✅ New Quote Checklist
- [ ] The quote(s) added are in alphabetical order and not ❌ duplicates.
- [ ] The quote(s) added are about **learning a foreign language**.
- [ ] The sentence attribute does not have inner quotation marks, and is ended with a period.
- [ ] Copy pasted the raw JSON `quotes.json` file to [JSONLint](https://jsonlint.com/) and made sure that the modified JSON file is valid.


## ✅ New Language Checklist
- [ ] There is ❌ no assigned issue or pull request for this new language.
- [ ] ➕ Added a new JSON object in the `server/data/languages.json` file.
- [ ] Added the **voice** 🎤 attribute supported by ResponsiveVoice API.
- [ ] Added the **flag** 🏳 attribute in the format of the twemoji-awesome CSS syntax.
- [ ] Added the **romanization** attribute for appropriate languages.
- [ ] ➕ Created the `{language.json}` file inside the `server/data/words` folder containing the list of the 3000 words.
- [ ] Removed duplicates and noted 🗒 them in the Pull Request.
- [ ] Increment `currentLanguagesCount` in `client/src/store/index.js`
- [ ] Add new language in `README.md`
