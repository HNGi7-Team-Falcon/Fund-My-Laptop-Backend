/**
 * @author Siddhi Jha - @wave
 * Story title: TEST: Verification Model
 * Ticket Id: #45815
 * URL https://app.clubhouse.io/startng/story/45815/test-verification-model
 */
const dbHandler = require('./db-handler');
//const VerificationService = require('../src/services/VerificationService');
const verificationModel = require('../src/models/verification');

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
      await verificationModel.create(mockUser);
    })
      .not.toThrow();
  });


  it('requires an id, photoURL, videoURL, bvn and status', async () => {
    await expect(async () => {
      await verificationModel.create(noId);
    })
      .rejects
      .toThrow();

    await expect(async () => {
      await verificationModel.create(noPhotoURL);
    })
      .rejects
      .toThrow();

    await expect(async () => {
      await verificationModel.create(noVideoURL);
    })
      .rejects
      .toThrow();
      
    await expect(async () => {
      await verificationModel.create(noBvn);
    })
      .rejects
      .toThrow();	

    await expect(async () => {
      await verificationModel.create(wrongBvn);
    })
      .rejects
      .toThrow();
  });

  it('exists after being created', async () => {
    await verificationModel.create(mockUser3);
    const createdUser = await verificationModel.findOne();
    expect(createdUser.userId).toBe(mockUser3.userId);                  
  });

  it('can be updated correctly', async () => {
    const result = await verificationModel.create(mockUser2);
    const filter = { userId: result.userId };
    const update = {
      userId: '67sdusdgsj9'
    };
    const updated = await verificationModel.findOneAndUpdate(filter, update, { new: true });
    expect(updated.userId).toBe(update.userId);
  });

  it('should be deleted correctly', async () => {
    const result = await verificationModel.create(mockUser4);
    const filter = { userId: result.userId };
    const operation = await verificationModel.deleteOne(filter);
    expect(operation.ok).toBe(1);
  });
});

const mockUser = {
  userId: '82hdd6dbs8',
  photoURL: 'abcd@xyz.com',
  videoURL: 'abcd@xyz.com',
  bvn: '12345678910',
  status: true
};

const mockUser2 = {
  userId: '82hdd6dbs8',
  photoURL: 'efgh@xyz.com',
  videoURL: 'abcd@xyz.com',
  bvn: '12345678910',
  status: true
};

const mockUser3 = {
  userId: '82hdd6dbs8',
  photoURL: 'ijkl@xyz.com',
  videoURL: 'abcd@xyz.com',
  bvn: '12345678910',
  status: true
};

const mockUser4 = {
  userId: '82hdd6dbs8',
  photoURL: 'mnop@xyz.com',
  videoURL: 'abcd@xyz.com',
  bvn: '12345678910',
  status: true
};

const unverifiedUser = {
  userId: '82hdd6dbs8',
  photoURL: 'abcd@xyz.com',
  videoURL: 'abcd@xyz.com',
  bvn: '12345678910'
};

const noId = {
  photoURL: 'mnop@xyz.com',
  videoURL: 'abcd@xyz.com',
  bvn: '12345678910',
  status: true
};

const noPhotoURL = {
  userId: '82hdd6dbs8',
  videoURL: 'abcd@xyz.com',
  bvn: '12345678910',
  status: true
};

const noVideoURL = {
  userId: '82hdd6dbs8',
  photoURL: 'mnop@xyz.com',
  bvn: '12345678910',
  status: true
};

const noBvn = {
  userId: '82hdd6dbs8',
  photoURL: 'mnop@xyz.com',
  videoURL: 'abcd@xyz.com',
  status: true
};

const wrongBvn = {
  userId: '82hdd6dbs8',
  photoURL: 'mnop@xyz.com',
  videoURL: 'abcd@xyz.com',
  bvn: '123456789',
  status: true
};
