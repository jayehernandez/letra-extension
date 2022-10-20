const express = require('express');

const router = express.Router();

const quotes = require('../data/quotes');
const languages = require('../data/languages');

const helper = require('./helpers');

const getOtherLanguages = (selectedLanguages, selected) => {
  if (selectedLanguages === undefined) return null;
  return selectedLanguages.split(',').filter((o) => o !== selected);
};

const { getRandomChoice, getLanguage, getPhoto } = helper;

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
  const translations = {};

  const word = {
    ...getRandomChoice(words),
    language: selectedLanguage,
  };

  if (others) {
    const otherLanguages = others.map((lang) => {
      return {
        name: lang,
        language: languages[lang],
      };
    });
    const otherWords = others.map((lang) => {
      return {
        name: lang,
        // eslint-disable-next-line global-require, import/no-dynamic-require
        words: require(`./../data/words/${lang}`),
      };
    });
    otherWords.forEach((translation) => {
      const thisWord = translation.words.filter(
        (o) => o.translation === word.translation,
      );
      const other = otherLanguages.filter(
        (o) => o.name === translation.name,
      )[0];
      const languageData = {
        flag: other.language.flag,
        voice: other.language.voice,
      };
      if (thisWord.length === 0) return;
      const [wordTranslation] = thisWord;
      languageData.translation = wordTranslation;
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
    translations,
  });
});

// eslint-disable-next-line no-unused-vars
router.get('/languages', async (req, res, next) => {
  res.status(200).json({ languages });
});

module.exports = router;
