const helper = require('../routes/helpers');
const mockHelper = require('../routes/__mocks__/helpers');
const consts = require('./test-consts');

const { getLanguage } = helper;

describe('getLanguage', () => {
  it('returns german when selectedLanguages is undefined', () => {
    const defaultLanguage = getLanguage(undefined);
    expect(defaultLanguage).toEqual('german');
  });
  it('returns the language on list when there is only 1 language in selectedLanguages', () => {
    const selectedLanguage = 'spanish';
    const language = getLanguage(selectedLanguage);
    expect(language).toEqual('spanish');
  });
  it('returns a random language inside the selectedLanguages', () => {
    const selectedLanguages = 'spanish,chinese,english,arabic';
    const language = getLanguage(selectedLanguages);
    expect(selectedLanguages.split(',')).toEqual(
      expect.arrayContaining([language]),
    );
  });
});

describe('getPhoto', () => {
  it('returns a photo', () => {
    mockHelper.getPhoto().then((resultado) => {
      expect(resultado).toEqual(consts.UNSPLASH_API_RET_IMAGE);
    });
  });
});
