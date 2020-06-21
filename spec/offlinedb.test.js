const mongoose = require('mongoose');
const dbHandler = require('./db-handler');

// Connect to a test databse before running any tests.
beforeAll(async () => await dbHandler.connect());

// clear all test data after every test.
afterEach(async () => await dbHandler.clearDatabase());

// Remove and close the db and server.
afterAll(async () => await dbHandler.closeDatabase());

describe('db', () => {
  it('can connect succssfully', () => {
    expect(async () => await dbHandler.connect()).not.toThrow();
  });
  });