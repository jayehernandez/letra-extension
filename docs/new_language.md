# ➕ Adding a New Language

> No need for experience in VueJS and NodeJS is needed to add a new language. **You'll only be working with JSON files 🎉**

## 📝 Guidelines

### Adding Language Details

You'll need to add the new language in the `server/data/languages.json` file.  

Format:
```sh
{
  languageName: {
    voice: "",
    flag: ""
  }
}
```

- **voice** attribute: Choose voice in the supported [ResponsiveVoice API voices](https://github.com/jayehernandez/letra-extension/blob/master/docs/supported_voices.md)
- **flag** attribute: Choose the flag emoji from twemoji-awesome's [list of CSS classes](https://github.com/jayehernandez/letra-extension/blob/master/client/src/style/twemoji-awesome.scss)

Example:
```sh
{
  "german": {
    voice: "Deutsch Female",
    flag: "german"
  }
}
```

### Adding Words
Here's the [list](https://github.com/jayehernandez/letra-extension/blob/master/docs/3000_words.md) of the English words used in this extension. This is based on Education First's [list](https://www.ef.com/wwen/english-resources/english-vocabulary/top-3000-words/) of the 3000 most common words.

You'll need to add a new file in the `server/data/words` folder called `{language}.json`. This file contains an array of JSON objects with the format:
```sh
{
  word: "erreichen",
  translation: "reach"
}
```

Here's the [`french.json`](https://github.com/jayehernandez/letra-extension/blob/master/server/data/words/french.json) for the French language  for your reference.

**Please remove words with the same translation or no direct translation and note them in your Pull Request.**

## ✅ Checklist
- [ ] There is ❌ no assigned issue or pull request for this new language.
- [ ] ➕ Added a new JSON object in the `server/data/languages.json` file.
- [ ] Added the **voice** 🎤 attribute supported by ResponsiveVoice API.
- [ ] Added the **flag** 🏳 atrribute in the format of the twemoji-awesome CSS syntax.
- [ ] ➕ Created the `{language.json}` file inside the `server/data/words` folder containing the list of the 3000 words.
- [ ] Removed duplicates and noted 🗒 them in the Pull Request.
