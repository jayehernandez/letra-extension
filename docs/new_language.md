# ➕ Adding a New Language

> No need for experience in VueJS and NodeJS is needed to add a new language. **You'll only be working with JSON files 🎉**

## 📝 Guidelines

### Adding Language Details
You'll need to add the new language in the `server/data/languages.json` file.

Format:
```sh
{
  languageName: {
    flag: "",
    voice: ""
  }
}
```

- **voice** attribute: Choose voice in the supported [ResponsiveVoice API voices](https://github.com/jayehernandez/letra-extension/blob/master/docs/supported_voices.md)
- **flag** attribute: Choose the flag emoji from twemoji-awesome's [list of CSS classes](https://github.com/jayehernandez/letra-extension/blob/master/client/src/style/twemoji-awesome.scss)

Example:
```sh
{
"german": {
        "flag": "twa-germany-flag",
        "voice": "Deutsch Female"
    },
}
```

### Adding Words
This is based on Education First's [list](https://www.ef.com/wwen/english-resources/english-vocabulary/top-3000-words/) of the 3000 most common words.

You'll need to add a new file in the `server/data/words` folder called `{language}.json`.
Here's the [`french.json`](https://github.com/jayehernandez/letra-extension/blob/master/server/data/words/french.json) for the French language for your reference. This file contains an array of JSON objects with the format:
```sh
{
  word: "erreichen",
  translation: "reach"
}
```

Some languages also have the [**romanization**](https://en.wikipedia.org/wiki/Romanization) attribute.

To make this process easier, we'll use Google Sheets. _(You get to contribute and learn about sheets, what a great combination!)_

I made a [reference sheet](https://docs.google.com/spreadsheets/d/1XFWxJPyVvlG-XL_EFGZ2BUTII0Gr3ovoKPrjfEi-a14) of the 3000 words. To generate the JSON file, you can do the following steps:

1. Make a copy of the reference sheet above. `File -> Make a copy`
2. Fill in the **words** column.
* 💁🏻‍♀️ Tip: Since this may take quite some time, I suggest translating the words using Google Translate first and refine the translations afterwards. Google sheets has a handy formula for this. You can read more about it [here](https://support.google.com/docs/answer/3093331?hl=en)! You can also use the auto-translate tool found in the docs section to fill in the words column. Follow the instructions in the auto-translate file and the translated words will be automatically added to the Google Sheet for your review. 
```
= GOOGLETRANSLATE("Hello World","en","es")
= GOOGLETRANSLATE(word, source_language, target_language)
```

3. Install an Export JSON add-on.
  `Add-ons -> Get Add-ons -> Search for "Export Sheet Data" -> Install`
4. Open options for the Export Sheet Data.
  `Add-ons -> Export Sheet Data -> Open Sidebar`
5. Go down to the **JSON** menu and tick the *Export sheet arrays* checkbox.
6. Go down to the **Advanced JSON** menu and tick the *Export contents as array* checkbox.
7. Click on export and copy the code in the `server/data/words/{language}.json` file.
8. Increment the `currentLanguagesCount` variable in the `client/src/store/index.js` by 1. This is used to check if the `client` code has the correct number of languages, if it does, it's one less call to the server every time a new tab is opened!
9. Add the new language in the Supported Languages of `README.md`.

**Please remove words with the same translation or no direct translation and note them in your Pull Request.**

## ✅ Checklist
- [ ] There is ❌ no assigned issue or pull request for this new language.
- [ ] ➕ Added a new JSON object in the `server/data/languages.json` file.
- [ ] Added the **voice** 🎤 attribute supported by ResponsiveVoice API.
- [ ] Added the **flag** 🏳 atrribute in the format of the twemoji-awesome CSS syntax.
- [ ] Added the **romanization** atrribute for appropriate languages.
- [ ] ➕ Created the `{language.json}` file inside the `server/data/words` folder containing the list of the 3000 words.
- [ ] Removed duplicates and noted 🗒 them in the Pull Request.
- [ ] Increment `currentLanguagesCount` in `client/src/store/index.js`
- [ ] Add new language in `README.md`
