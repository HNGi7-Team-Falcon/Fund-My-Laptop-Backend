/**
 * @author Usman Suleiman
 */
const dbHandler = require('./db-handler');
const userService = require('../src/services/UserService');

// Connect to a test databse before running any tests.
beforeAll(async () => await dbHandler.connect());

// clear all test data after every test.
afterEach(async () => await dbHandler.clearDatabase());

// Remove and close the db and server.
afterAll(async () => await dbHandler.closeDatabase());

describe('user', () => {
  it('can be created correctly', async () => {
    expect(async () => await userService.create(userExample));
  })
});

const userExample = {
  name: 'Fluffy Dragon',
  email: 'fluffydragon@gmail.com'
};