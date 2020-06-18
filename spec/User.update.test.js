const request = require('supertest');
const app = require('../server');

describe('Update user info', () => {
  it('should update user info', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});

describe('login', () => {
  it('should update user info', async () => {
    const res = await request(app).post('/login')
    .send({
      email:"me@gmail.com",
      password:"password"
    })
    expect(res.statusCode).toEqual(200);
    
  });
});
