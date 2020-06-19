/**
 * @author Usman Suleiman
 * Story title: User Model
 * Ticket Id: #45803
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
  it('can be created correctly', () => {
    expect(async () => await userService.create(mockUser))
      .not.toThrow();
  });
});

describe('user', () => {
  it('can be updated correctly', async () => {
    const result = await userService.create(mockUser);
    console.log(result);
    const mockUpdate = {
      id: result.uid,
      name: 'Senbon Zakura',
      email: 'shinigami@yahoo.com',
    };
    expect(async () => await userService.update(mockUpdate))
      .not.toThrow();
  });
});

const mockUser = {
  name: 'Usman Suleiman',
  email: 'usmansbk@gmail.com',
  password: 'ittadakimasu'
};