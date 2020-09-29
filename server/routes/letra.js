const express = require('express');

const router = express.Router();

const Unsplash = require('unsplash-js').default;
const { toJson } = require('unsplash-js');
const { unsplashAccessKey } = require('../config');

const unsplash = new Unsplash({ accessKey: unsplashAccessKey });

const defaultLanguage = 'german';
const quotes = require('../data/quotes');
const languages = require('../data/languages');

const getRandomChoice = (options) => {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

const getLanguage = (selectedLanguages) => {
  if (selectedLanguages === undefined) return defaultLanguage;
  return getRandomChoice(selectedLanguages.split(','));
};

const getOtherLanguages = (selectedLanguages, selected) => {
  if (selectedLanguages === undefined) return null;
  return selectedLanguages.split(',').filter(o => o != selected);
};

const getPhoto = async () =>
  unsplash.photos
    .getRandomPhoto({ collections: [9836658] })
    .then(toJson)
    .then((json) => json);

// eslint-disable-next-line no-unused-vars
router.get('/', async (req, res, next) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  res.write(
    'Hi There! Nothing much here, just a server for the letra extension!',
  );
  res.end();
});

// eslint-disable-next-line no-unused-vars
router.get('/daily', async (req, res, next) => {
  const selectedLanguage = getLanguage(req.query.languages);
  const others = getOtherLanguages(req.query.languages, selectedLanguage);
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const words = require(`./../data/words/${selectedLanguage}`);
  
  const language = languages[selectedLanguage];
  let translations = {};

  const word = {
    ...getRandomChoice(words),
    language: selectedLanguage,
  };
  
  if (others) {
    const otherLanguages = others.map(language => {
      return {
        name: language,
        language: languages[language]
      };
    });
    const otherWords = others.map(language => {
      return {
        name: language,
        words: require(`./../data/words/${language}`)
      };
    });
    otherWords.forEach(translation => {
      let thisWord = translation.words.filter(o => o.translation == word.translation);
      let other = otherLanguages.filter(o => o.name == translation.name)[0];
      let languageData = {
        flag: other.language.flag,
        voice: other.language.voice
      };
      languageData.translation = thisWord.length === 0 ? null : thisWord[0];
      translations[translation.name] = languageData;
    });
  }
  
  const quote = getRandomChoice(quotes);
  const photo = await getPhoto();

  res.status(200).json({
    word,
    quote,
    language,
    photo,
    translations
  });
});

// eslint-disable-next-line no-unused-vars
router.get('/languages', async (req, res, next) => {
  res.status(200).json({ languages });
});

module.exports = router;
