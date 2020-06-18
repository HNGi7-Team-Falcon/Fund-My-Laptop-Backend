const request = require('supertest');
const app = require('../server');

describe('TEST:HOME page endpoint', () => {
  it('should get the home page', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});

describe('login', () => {
  it('should login user info', async () => {
    const res = await request(app).post('/login')
    .send({
      email:"me@gmail.com",
      password:"password"
    })
    expect(res.statusCode).toEqual(200);
    
    
  });
});
