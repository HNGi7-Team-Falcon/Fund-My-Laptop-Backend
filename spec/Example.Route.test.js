 // DONT EDIT/DELETE THIS FILE

const request = require('supertest');
const app = require('../server');

describe('TEST:HOME page endpoint', () => {
  it('should get the home page', async () => {
    // visit https://www.npmjs.com/package/supertest
    // to see how to post a form with the post('/routeName').send({...}) method
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});
