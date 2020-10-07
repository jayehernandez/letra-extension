const Unsplash = require('unsplash-js').default;
const { toJson } = require('unsplash-js');
const { unsplashAccessKey } = require('../config');

const unsplash = new Unsplash({ accessKey: unsplashAccessKey });
const defaultLanguage = 'german';

const helpers = {
  getRandomChoice: (options) => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  },
  getLanguage: (selectedLanguages) => {
    if (selectedLanguages === undefined) return defaultLanguage;
    return helpers.getRandomChoice(selectedLanguages.split(','));
  },
  getPhoto: async () =>
    unsplash.photos
      .getRandomPhoto({ collections: [9836658] })
      .then(toJson)
      .then((json) => json),
};

module.exports = helpers;
