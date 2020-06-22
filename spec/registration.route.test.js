/**
 * DON'T TOUCH THIS FILE - IT'S MY TASK
 * @author @rotimi
 * Story title: TEST: Registration Route
 */

const server = require('supertest');
const app = require('../server');
const dbHandler = require('./db-handler');

const signUpRoute = '/api/users/';
const signInRoute = '/api/users/login';


beforeAll(async () => {
  // spin database
  await dbHandler.connect();

  // Sign me up
  const { body: { data: { token } } } = await server(app).post(signUpRoute).send(signUpDetails);
});

afterAll(async () => {
  // destroy database
  await dbHandler.closeDatabase();
});

describe('POST /api/user', () => {
  it('should create a new user && login user', async () => {
    const signInResponse = await server(app).post(signUpRoute).send(signUpDetails);
    const { data: {token} } = signInResponse.body; // get our authentication token
    const res = await server(app).post(signInRoute)
      .send(signUpDetails)
      .set('Authorization', 'Bearer ' + token);
  
    expect(res.headers['x-auth']).not.toBeNull();
    expect(res.body._id).not.toBeNull();
    expect(res.body.email).not.toBeNull();
    expect(res.statusCode).toBe(200);
  });

  it('should reject a user with invalid mail', async () => {
    const signUpDetails={email:'iRobot',password:"beautiful-mind"}
    const res = await server(app).post(signUpRoute).send(signUpDetails);
    expect(res.body).toEqual('Please input a valid mail account');
    expect(res.statusCode).toEqual(400);
  });

  it('should reject a user with invalid password', async () => {
    const signUpDetails={email:'iRobot@gmail.com',password:""}
    const res = await server(app).post(signUpRoute).send(signUpDetails);
    expect(res.body).toEqual('Please input in a valid password');
    expect(res.statusCode).toEqual(400);
  });
});

const signUpDetails = {
  name: 'Jon Bellion',
  email: 'iRobot@gmail.com',
  password: 'beautiful-mind',
  verified: true,
};

