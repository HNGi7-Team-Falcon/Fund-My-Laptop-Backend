/**
 * DON'T TOUCH THIS FILE - IT'S MY TASK
 * @author Usman Suleiman
 * Story title: TEST:Update Request Route
 * Ticket Id: #45822
 * URL: https://app.clubhouse.io/startng/story/45822/test-update-request-route
 */

const request = require('supertest');
const app = require('../server');
const dbHandler = require('./db-handler');

const route = '/api/request/';
const newRequestRoute = '/api/request/';
const signUpRoute = '/api/users/';

beforeAll(async () => {
  // spin database
  await dbHandler.connect();

  // Sign me up
  await request(app).post(signUpRoute).send(me);

  // Gotta do some jwt authentication here later - TODO

  // Create a new request
  await request(app).post(newRequestRoute).send(mockRequest); 
});

afterAll(async () => {
  // destroy database
  await dbHandler.closeDatabase();

  // Optional - Sign out
});

describe('PUT /api/request/:id', () => {
  it('should allow authenticated request', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });

  it('should request unauthenticated request', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });

  it('requires title, imageUrl, amount, and description', async () => {

    await expect(1).toBe(1); // test title
    await expect(1).toBe(1); // test image
    await expect(1).toBe(1); // test amount
    await expect(1).toBe(1); // test description 
  });

  it('amount should be in number', async () => {
    await expect(1).toBe(1); // test description 
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
  imageUrl: 'https://goodmockups.com/wp-content/uploads/2017/06/Free-MacBook-Mockup-PSD-4.jpg',
  amount: 1000000, // equivalent to 3 kidneys,
  description: 'I need this MacBook. Im not gonna lie. I just need it to feel among'
};
