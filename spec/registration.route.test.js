/**
<<<<<<< HEAD
 * DON'T TOUCH THIS FILE - IT'S MY TASK
 * @author @rotimi
 * Story title: TEST: Registration Route
 */

const server = require("supertest");
const app = require("../server");
const dbHandler = require("./db-handler");

const signUpRoute = "/api/users/";
const signInRoute = '/api/users/login';

=======
 * @author _rotimi
*/

const server = require('supertest');
const app = require('../server');
const dbHandler = require('./db-handler');

const newRequestRoute = '/api/request/';
const signUpRoute = '/api/users/';
const User = require('../src/models/User');
>>>>>>> still-testing

beforeAll(async () => {
  // spin database
  await dbHandler.connect();

  // Sign me up
<<<<<<< HEAD
  const { body: { data: { token } } } = await server(app).post(signUpRoute).send(signUpDetails);
=======
  await server(app).post(signUpRoute).send(me);

//
>>>>>>> still-testing
});

afterAll(async () => {
  // destroy database
  await dbHandler.closeDatabase();
<<<<<<< HEAD
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
=======

});

describe('POST /api/users', () => {
  it('should create a user && allow authenticated request', async() => {
    const signupDetails = {
        name: 'Jon-Bellion',
        email: 'iRobot@gmail.com',
        password: 'beautiful-mind'
    }
    const signUpResponse = await server(app).post(signUpRoute).send(signupDetails);
    const { data: {token} } = signUpResponse.body; // get our authentication token
    const res = await server(app).post(newRequestRoute).set('Bearer', token);

    expect(res.headers['x-auth']).not.toBeNull();
    expect(res.body._id).not.toBeNull();
    expect(res.body.email).not.toBeNull();
    expect(res.statusCode).toEqual(200);

    User.findOne({email}).then((user) => {
        expect(user).not.toBeNull();
        expect(user.password).not.toBe(password)
        done();
    });    
  });

  it('should reject a user with invalid email', async () => {
    const signupDetails = {
        name: 'Jon-Bellion',
        email: 'iRobot',
        password: 'beautiful-mind'
    }
    const signUpResponse = await server(app).post(signUpRoute).send(signupDetails);
    const res = await server(app)
>>>>>>> still-testing
    expect(res.statusCode).toEqual(400);
  });

  it('should reject a user with invalid password', async () => {
<<<<<<< HEAD
    const signUpDetails={email:'iRobot',password:""}
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
=======
    const signupDetails = {
        name: 'Jon-Bellion',
        email: 'iRobot',
        password: ''
    }
    const signUpResponse = await server(app).post(signUpRoute).send(signupDetails);
    const res = await server(app)
    expect(res.statusCode).toEqual(400);
  });

});

>>>>>>> still-testing
