const helpers = jest.createMockFromModule('./helpers');
const consts = require('../../test/test-consts');

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

helpers.getRandomChoice = (options) => {
  const randomIndex = 1;
  return options[randomIndex];
};
helpers.getLanguage = (selectedLanguages) => {
  if (selectedLanguages) {
    return selectedLanguages;
  }
  const options = ['', consts.HELPERS_MOCK_RET_LANGUAGE];
  return helpers.getRandomChoice(options);
};
helpers.getPhoto = async () => {
  await delay(100);
  return consts.UNSPLASH_API_RET_IMAGE;
};

module.exports = helpers;
