const request = require('supertest');
const app = require('../server');


/**
 * @author Usman Suleiman
 * Story title: User Model
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
  await dbHandler.clearDatabase();
});

// Remove and close the db and server.
afterAll(async () => {
  await dbHandler.closeDatabase();
});


describe('user', () => {
  it('can be created correctly', async () => {
    expect(async () => {
      await userService.create(mockUser);
    })
      .not.toThrow();
  });

  it('requires name', async () => {
    const user = await userService.create(noName);
    expect(user.name).toBeDefined();
  });

});

const mockUser = {
  name: 'Usman Suleiman',
  email: 'usmansbk@gmail.com',
  password: 'ittadakimasu'
};

const noName = {
  email: 'usmansbk2@gmail.com',
  password: 'alacakazm'
}

