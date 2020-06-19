/**
 * DON'T TOUCH THIS FILE - IT'S MY TASK
 * @author Usman Suleiman
 * Story title: TEST:Update Request Route
 * Ticket Id: #45822
 * URL: https://app.clubhouse.io/startng/story/45822/test-update-request-route
 */

const server = require('supertest');
const app = require('../server');
const dbHandler = require('./db-handler');

const newRequestRoute = '/api/request/new';
const signUpRoute = '/api/users/';
const signInRoute = '/api/users/login';

let id;

beforeAll(async () => {
  // spin database
  await dbHandler.connect();

  // Sign me up
  const signUpResponse = await server(app).post(signUpRoute).send(me);
  const { data: {token} } = signUpResponse.body; // get our authentication token

  // Create a new request
  const res = await server(app).post(newRequestRoute).send(mockRequest)
      .set('Authorization', 'Bearer ' + token); // Gotta do some jwt authentication here later - TODO
  id = res.body._id;
});

afterAll(async () => {
  // destroy database
  await dbHandler.closeDatabase();

  // Optional - Sign out
});

describe('PUT /api/request/:id', () => {
  it('should allow authenticated request', async () => {
    const signInResposne = await server(app).post(signInRoute).send(me);
    const { data: {token} } = signInResposne.body; // get our authentication token
    const res = await server(app).put(newRequestRoute + '/' + id)
      .send(mockRequest)
      .set("Authorization", 'Bearer '+ token);
  
    expect(res.statusCode).toEqual(200);
  });

  it('should allow only authenticated request with ID param', async () => {
    const signInResposne = await server(app).post(signInRoute).send(me);
    const { data: {token} } = signInResposne.body; // get our authentication token
    const res = await server(app).put(newRequestRoute + '/')
      .send(mockRequest)
      .set("Authorization", 'Bearer '+ token);
  
    expect(res.statusCode).toEqual(405);
  });

  it('should reject unauthenticated request', async () => {
    const res = await server(app).post(newRequestRoute).send(mockRequest);
    expect(res.statusCode).toEqual(403);
  });
});

const me = {
  name: 'Lord Rahl',
  email: 'anti_lengend@seeker.com',
  password: 'villains_also_work_hard',
  verified: true,
};

const mockRequest = {
  title: 'MacBook Pro 2020 for ReactNative Development',
  imageURL: 'https://goodmockups.com/wp-content/uploads/2017/06/Free-MacBook-Mockup-PSD-4.jpg',
  amount: 1000000, // equivalent to 3 kidneys,
  description: 'I need this MacBook. Im not gonna lie. I just need it to feel among'
};
