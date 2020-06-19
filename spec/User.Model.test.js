/**
 * DON'T TOUCH THIS FILE - IT'S MY TASK
 * @author Usman Suleiman
 * Story title: TEST:User Model
 * Ticket Id: #45803
 */
const mongoose = require('mongoose');
const dbHandler = require('./db-handler');
const userService = require('../src/services/UserService');
const userModel = require('../src/models/User');

// Connect to a test databse before running any tests.
beforeAll(async () => {
  await dbHandler.connect();
});

// clear all test data after every test.
afterEach(async () => {
  console.log('clear')
  await dbHandler.clearDatabase();
});
// Remove and close the db and server.
afterAll(async () => {
  await dbHandler.closeDatabase();
});


describe('user', () => {
  it('can be created correctly', () => {
    expect(async () => {
      await userService.create(mockUser);
    })
      .not.toThrow();
  });

  it('needs to be verified', () => {
    expect(async () => {
      await userService.create(unverifiedUser);
    })
      .rejects
      .toThrow();
  });

  it('requires a name', () => {
    expect(async () => {
      await userService.create(noName);
    })
      .rejects
      .toThrow();
  });

  it('exists after being created', async () => {
    await userService.create(mockUser3);
    const createdUser = await userModel.findOne();
    expect(createdUser.name).toBe(mockUser3.name);
  });

  it('can be updated correctly', async () => {
    const result = await userService.create(mockUser2);
    expect(result.uid).toBeDefined();
    const mockUpdate = {
      id: result.uid,
      name: 'Senbon Zakura',
      email:mockUser2.email 
    };
    expect(async () => await userService.update(mockUpdate))
      .not
      .toThrow();
  });
});

const mockUser = {
  name: 'Usman Suleiman',
  email: 'usmansbk1@gmail.com',
  password: 'ittadakimasu',
  verified: true
};

const mockUser2 = {
  name: 'Usman Suleiman',
  email: 'usmansbkx@gmail.com',
  password: 'ittadakimasu',
  verified: true
};

const mockUser3 = {
  name: 'Usman Suleiman',
  email: 'usmansbky@gmail.com',
  password: 'ittadakimasu',
  verified: true
};

const unverifiedUser = {
  name: 'Usman moon',
  email: 'usmansbk2@gmail.com',
  password: 'alacakazm'
};

const noName = {
  email: 'usmansbk3@gmail.com',
  password: 'ittadakimasu',
  verified: true
};
