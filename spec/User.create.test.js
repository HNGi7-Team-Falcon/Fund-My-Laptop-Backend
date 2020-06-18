const request = require('supertest');
const app = require('../server');

describe('TEST:Create user route', () => {
  it('should create a new user', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});
