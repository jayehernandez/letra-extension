const request = require('supertest');
const app = require('../app');
const languages = require(`../data/languages`);

describe('/', () => {
  it('returns a 200 response', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
  it('returns a message', async () => {
    const expectedMessage = 'Hi There! Nothing much here, just a server for the letra extension!';
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
