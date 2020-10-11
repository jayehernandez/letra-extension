const request = require('supertest');
const rewire = require('rewire');
const app = require('../app');
const consts = require('./test-consts');
global.fetch = require('node-fetch'); // for provide fetch to Unsplash apis

const languages = require('../data/languages');

const letra = rewire('../routes/letra.js');

jest.mock('../routes/helpers');

describe('/', () => {
  it('returns a 200 response', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
  it('returns a message', async () => {
    const expectedMessage =
      'Hi There! Nothing much here, just a server for the letra extension!';
    const res = await request(app).get('/');
    expect(res.text).toEqual(expectedMessage);
  });
});

describe('/languages', () => {
  it('returns a 200 response', async () => {
    const res = await request(app).get('/languages');
    expect(res.statusCode).toEqual(200);
  });
  it('returns languages as the response body', async () => {
    const res = await request(app).get('/languages');
    expect(res.body.languages).toEqual(languages);
  });
});

describe('#getLanguage', () => {
  /* eslint no-underscore-dangle: ["error", { "allow": ["__get__"] }] */
  const getLanguage = letra.__get__('getLanguage');
  it('returns german when selectedLanguages is undefined', () => {
    const defaultLanguage = getLanguage(undefined);
    expect(defaultLanguage).toEqual('german');
  });
  it('returns the language on list when there is only 1 language in selectedLanguages', () => {
    const languageQuery = 'indonesian';
    const language = getLanguage(languageQuery);
    expect(language).toEqual('indonesian');
  });
});

describe('/daily', () => {
  it('returns a 200 response', async () => {
    const res = await request(app).get('/daily');
    expect(res.statusCode).toEqual(200);
  });
  it('returns daily word as the response body', async () => {
    const word = consts.RANDOM_API_WORD;
    const quote = consts.RANDOM_API_QUOTE;
    const language = consts.LANGUAGE_API;
    const photo = consts.UNSPLASH_API_RET_IMAGE;
    const res = await request(app).get('/daily');
    expect(res.body.word).toEqual(word);
    expect(res.body.quote).toEqual(quote);
    expect(res.body.language).toEqual(language);
    expect(res.body.photo).toEqual(photo);
  });

  it('returns hindi language in the response', async () => {
    const res = await request(app).get('/daily?languages=hindi');
    expect(res.body.language).toEqual(languages.hindi);
  });
});
