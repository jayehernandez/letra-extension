# Adding a New Language

## Prerequisites
- No pending issue or pull request
- Supported by ResponsiveVoice API

## Guidelines
`server/data/languages.json`  

Voice - ResponsiveVoice API  
Flag - twemoji-awesome

`server/data/words`
- Link to English words used

```sh
{
  word: "",
  translation: ""
}
```

## Check if it works
1. `npm start`
2. `localhost:3100/daily?languages={{ language }}`
