const request = require('supertest');
const app = require('../server');


/**
 * @author Usman Suleiman
 */
const dbHandler = require('./db-handler');


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