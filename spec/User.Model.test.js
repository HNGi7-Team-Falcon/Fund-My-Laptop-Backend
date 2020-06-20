/**
 * DON'T TOUCH THIS FILE - IT'S MY TASK
 * @author Usman Suleiman
 * Story title: TEST:User Model
 * Ticket Id: #45803
 * URL https://app.clubhouse.io/startng/story/45803/test-user-model
 */
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

  it('requires a name, email, and password', async () => {
    await expect(async () => {
      await userService.create(noName);
    })
      .rejects
      .toThrow();

    await expect(async () => {
      await userService.create(noEmail);
    })
      .rejects
      .toThrow();

    await expect(async () => {
      await userService.create(noPassword);
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
    const filter = { _id: result.uid };
    const update = {
      name: 'Uzumaki Naruto'
    };
    const updated = await userModel.findOneAndUpdate(filter, update, { new: true });
    expect(updated.name).toBe(update.name);
  });

  it('should be deleted correctly', async () => {
    const result = await userService.create(mockUser4);
    const filter = { _id: result.uid };
    const operation = await userModel.deleteOne(filter);
    expect(operation.ok).toBe(1);
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

const mockUser4 = {
  name: 'Usman Suleiman',
  email: 'usmansbkz@gmail.com',
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

const noEmail = {
  name: 'Usman Suleiman',
  password: 'ittadakimasu',
  verified: true
};

const noPassword = {
  name: 'Usman Suleiman',
  email: 'usmansbk1@gmail.com',
  verified: true
};