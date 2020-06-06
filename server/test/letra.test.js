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
    it('returns the languages as the response body', async () => {
      const res = await request(app).get('/languages');
      console.log(res);
      console.log(languages);
      expect(res.body.languages).toEqual(languages);
    });
  });

// TODO: example only
// describe('Post Endpoints', () => {
//   it('should create a new post', async () => {
//     const res = await request(app)
//       .post('/api/posts')
//       .send({
//         userId: 1,
//         title: 'test is cool',
//       });
//     expect(res.statusCode).toEqual(201);
//     expect(res.body).toHaveProperty('post');
//   });
// });
