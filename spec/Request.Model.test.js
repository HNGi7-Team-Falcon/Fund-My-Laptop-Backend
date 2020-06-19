/**
 * DON'T TOUCH THIS FILE - IT'S MY TASK
 * @author Usman Suleiman
 * Story title: TEST:Request Model
 * Ticket Id: #45816
 * URL https://app.clubhouse.io/startng/story/45803/test-user-model
 */
const dbHandler = require('./db-handler');
const userService = require('../src/services/RequestService'); // Import the db service here

// Connect to a test databse before running any tests.
beforeAll(async () => {
  await dbHandler.connect();
});

// clear all test data after every test.
afterEach(async () => {
  await dbHandler.clearDatabase();
});

// Remove and close the db and server.
afterAll(async () => {
  await dbHandler.closeDatabase();
});

// All your test suite goes after this line

describe('user', () => {
  it('can be created correctly', () => {
    expect(async () => await userService.create(mockUser))
      .not.toThrow();
  });
});

const mockUser = {
  name: 'Example Person',
  email: 'example@gmail.com',
  password: 'liquidxmetal',
  verified: true,
};