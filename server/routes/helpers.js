const unsplashCreateApi = require('unsplash-js').createApi;
const { unsplashAccessKey } = require('../config');

const unsplash = unsplashCreateApi({ accessKey: unsplashAccessKey });
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
    unsplash.photos.getRandom({ collectionIds: [9836658] }).then((result) => {
      return result.response;
    }),
};

module.exports = helpers;
