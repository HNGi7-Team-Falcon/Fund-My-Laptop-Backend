/**
 * DON'T TOUCH THIS FILE - IT'S MY TASK
 * @author  ajibade abdullah
 * Story title: TEST:new Request Route
 * Ticket Id: #45821
 */

const server = require('supertest');
const app = require('../server');
const dbHandler = require('./db-handler');

const newRequestRoute = '/api/request/';
const signUpRoute = '/api/users/';
const signInRoute = '/api/users/login';

let user_id;

beforeAll(async () => {
  // spin database
  await dbHandler.connect();

  // Sign me up
  const { body: { data: { token } } } = await server(app).post(signUpRoute).send(me);

  

});

afterAll(async () => {
  // destroy database
  await dbHandler.closeDatabase();
});

describe('POST /api/request', () => {
  it('should allow authenticated USER TO CREATE NEW request', async () => {
    // Create a new request
    const signInResposne = await server(app).post(signInRoute).send(newUser);
    const { data: {token} } = signInResposne.body; // get our authentication token
  const res = await server(app).post(newRequestRoute).send(mockRequest)
  .set('Authorization', 'Bearer ' + token);
  expect(res.statusCode).toEqual(201);
    
  });

  it('should not allow a non logged in user request', async () => {
    const res = await server(app).post(newRequestRoute).send(newRequest);
    expect(res.statusCode).toEqual(403);
  });
});

const newUser = {
  name: 'ajibade abd',
  email: 'ajibade@seeker.com',
  password: 'ajibade',
  verified: true,
};

const newRequest = {
  title: 'MacBook Pro 2020 for ReactNative Development',
  imageURL: 'https://goodmockups.com/wp-content/uploads/2017/06/Free-MacBook-Mockup-PSD-4.jpg',
  amount: 1000000, // equivalent to 3 kidneys,
  description: 'I need this MacBook. Im not gonna lie. I just need it to feel among'
};
