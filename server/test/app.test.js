const request = require('supertest');
const app = require('../app');

describe('HTTP OPTIONS Request', () => {
  it('returns a 200 response', async () => {
    await request(app).options('/').expect(200);
  });
  it('returns allowed HTTP methods', async () => {
    const expectedAllowedMethods = 'PUT, POST, PATCH, DELETE, GET';
    await request(app)
      .options('/')
      .expect('access-control-allow-methods', expectedAllowedMethods);
  });
  it('returns empty object', async () => {
    const expectedResponseBody = {};
    await request(app).options('/').expect(200, expectedResponseBody);
  });
});
