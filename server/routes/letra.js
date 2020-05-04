const express = require('express');
const axios = require('axios');
const router = express.Router();

const { unsplashAccessKey } = require('../config');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const unsplash = new Unsplash({ accessKey: unsplashAccessKey });

const defaultLanguage = 'german';
const quotes = require(`./../data/quotes`);
const languages = require(`./../data/languages`);

router.get('/', async (req, res, next) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.write('Hi There! Nothing much here, just a server for the letra extension!');
  res.end();
});

router.get('/daily', async (req, res, next) => {
  const selectedLanguage = getLanguage(req.query.languages);
  const words = require(`./../data/words/${selectedLanguage}`);

  const language = languages[selectedLanguage];
  const word = getRandomChoice(words);
  const quote = getRandomChoice(quotes);
  const photo = await getPhoto();

  res.status(200).json({
    word,
    quote,
    language,
    photo,
  });
});

router.get('/languages', async (req, res, next) => {
  res.status(200).json({ languages });
});

const getPhoto = async () => {
  return await unsplash.photos.getRandomPhoto({ collections: [9836658] })
    .then(toJson)
    .then(json => { return json });
}

const getRandomChoice = options => {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

const getLanguage = languages => {
  return languages === undefined ? defaultLanguage : getRandomChoice(languages.split(','));
}

module.exports = router;
