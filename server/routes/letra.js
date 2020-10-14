const express = require('express');

const router = express.Router();

const quotes = require('../data/quotes');
const languages = require('../data/languages');

const helper = require('./helpers');

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
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const words = require(`./../data/words/${selectedLanguage}`);

  const language = languages[selectedLanguage];
  const word = {
    ...getRandomChoice(words),
    language: selectedLanguage,
  };
  const quote = getRandomChoice(quotes);
  const photo = await getPhoto();

  res.status(200).json({
    word,
    quote,
    language,
    photo,
  });
});

// eslint-disable-next-line no-unused-vars
router.get('/languages', async (req, res, next) => {
  res.status(200).json({ languages });
});

module.exports = router;
