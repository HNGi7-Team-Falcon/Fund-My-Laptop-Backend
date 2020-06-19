/**
 * DO NOT EDIT OR DELETE THIS FILE
 * YOU ARE EXPECTED TO CREATE YOUR OWN FILE FOLLOWING THIS FORMAT AND ADD IT TO
 * THE SPEC FOLDER, AS YOU DID IN STAGE TWO
 * FOLLOW THE NAME FORMAT
 * @author Usman Suleiman
 */
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
