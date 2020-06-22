/**
 * DON'T TOUCH THIS FILE - IT'S MY TASK
 * @author ajibade abdullah
 * Story title: TEST:login  Route
 * Ticket Id: #45836
 */

const server = require('supertest');
const app = require('../server');
const dbHandler = require('./db-handler');

const signUpRoute = '/api/users/';
const signInRoute = '/api/users/login';

beforeAll(async () => {
  // spin database
  await dbHandler.connect();

  // Sign newUser up
  const { body: { data: {email,password}}} = await server(app).post(signUpRoute).send(newUser);
});

afterAll(async () => {
  // destroy database
  await dbHandler.closeDatabase();

});

describe('login user', () => {
  it('should allow a registerd user', async () => {
    const signUpResposne = await server(app).post(signUpRoute).send(newUser);
    const { data: {email,password} } = signUpResposne.body; // get our email and password
    const res = await server(app).post(signInRoute)
    .send( {email:email,password:password})
    expect(email).toBe(newUser.email);
    expect(password).toBe(newUser.password);
    expect(res.statusCode).toEqual(200);
  });

  it('should reject a non registerd user', async () => {
    const unregisterdUser={email:'fakeEmail@gmail.com',password:"fakepass"}
    const res = await server(app).post(signInRoute).send(unregisterdUser);
    expect(res.body).toEqual('Incorrect email');
    expect(res.statusCode).toEqual(400);
  });

  it('should provide a token on successful login', async () =>  {
    const signUpResposne = await server(app).post(signUpRoute).send(newUser);
    const { data: {email,password} } = signUpResposne.body; // get our email and password
    const res = await server(app).post(signInRoute)
    .send( {email:email,password:password})
    expect(res.body).toHaveProperty('token')
  });

 
});

const newUser = {
  name: 'ajibade abdullah',
  email: 'ajibadeabd.com',
  password: 'you-wanna-know-my-password-call-me',
};


