/**
 * @author _rotimi
*/

const server = require('supertest');
const app = require('../server');
const dbHandler = require('./db-handler');

const newRequestRoute = '/api/request/';
const signUpRoute = '/api/users/';
const User = require('../src/models/User');

beforeAll(async () => {
  // spin database
  await dbHandler.connect();

  // Sign me up
  await server(app).post(signUpRoute).send(me);

//
});

afterAll(async () => {
  // destroy database
  await dbHandler.closeDatabase();

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
    expect(res.statusCode).toEqual(400);
  });

  it('should reject a user with invalid password', async () => {
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

