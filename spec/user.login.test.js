const request = require('supertest');
const app = require('../server');


/**
 * @author ajibade abdullah
 * ticket title: User Model
 * title Id: #45836
 */
const mongoose = require('mongoose');
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
    expect(async () => await userService.login(mockUser))
      .not.toThrow();
  });
});

const mockUser = {
  email: ' abdullah@gmail.com',
  password: ' ajibadepass '
};
