const request = require('supertest');
const app = require('../app');
const rewire = require('rewire');

const languages = require('../data/languages');
const letra = rewire('../routes/letra.js');

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
