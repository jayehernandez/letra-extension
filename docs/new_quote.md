# ➕ Adding Quotes

> No need for experience in VueJS and NodeJS is needed to add a new language. **You'll only be working with JSON files 🎉**

## 📝 Guidelines

### Where is this seen?
![Main Screenshot](screenshots/main_screenshot.png)

This is seen below the word of the day. This is randomized so that you'll get a different quote each day! It's meant to serve as an inspiration for language learning.

### Adding Quote
You'll need to add the new quote in the `server/data/quotes.json` file.  

Example:
```sh
{
  "sentence": "Languages, just like people, are worlds within themselves. They have the incredible ability to provide us with a clearer, more profound and detailed perspective of a culture and its views on life, nature, and death.",
  "author": "Orge Castellano"
}
```

Here's a small checklist to make sure your Pull Request is accepted!

## ✅ Checklist
- [ ] The quote(s) added are not ❌ duplicates.
- [ ] The sentence attribute does not have inner quotation marks, and is ended with a period.
- [ ] Copy pasted the raw JSON `quotes.json` file to [JSONLint](https://jsonlint.com/) and made sure that the modified JSON file is valid.
