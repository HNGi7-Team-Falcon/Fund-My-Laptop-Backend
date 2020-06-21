/**
 * DO NOT EDIT OR DELETE THIS FILE
 * YOU ARE EXPECTED TO CREATE YOUR OWN FILE FOLLOWING THIS FORMAT AND ADD IT TO
 * THE SPEC FOLDER, AS YOU DID IN STAGE TWO
 * FOLLOW THE NAME FORMAT
 * @author Usman Suleiman @Usman
 */
const dbHandler = require('./db-handler');
const userService = require('../src/services/UserService'); // Import the db service here

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
  address: 'home',
  number: '1234567'
};