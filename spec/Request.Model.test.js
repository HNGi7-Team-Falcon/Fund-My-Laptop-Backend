/**
 * DON'T TOUCH THIS FILE - IT'S MY TASK
 * @author Usman Suleiman
 * Story title: TEST:Request Model
 * Ticket Id: #45816
 * URL https://app.clubhouse.io/startng/story/45816/test-request-model
 */
const dbHandler = require('./db-handler');
const requestService = require('../src/services/RequestService'); // Import the db service here
const requestModel = require('../src/models/Request');

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

describe('request', () => {
  it('can be created correctly', () => {
    expect(async () => await requestService.create(mockRequest))
      .not.toThrow();
  });

  it('requires title, imageURL, amount, and descriptoin', () => {
    expect(async () => await requestService.create(noTitle))
      .rejects.toThrow();
    expect(async () => await requestService.create(noAmount))
      .rejects.toThrow();
    expect(async () => await requestService.create(noImage))
      .rejects.toThrow();
    expect(async () => await requestService.create(noDescription))
      .rejects.toThrow();
  });

  it('should accept amount in number', async () => {
    const result = await requestService.create(numberString);
    expect(result.name).toBeFalsy();
  });

  it('should update correctly', async () => {
    const result = await requestService.create(mockRequest);
    const filter = { _id: result._id};
    const update = {
      title: 'Alienware'
    };
    const updated = await requestModel.findOneAndUpdate(filter, update, { new: true });
    expect(updated.title).toBe(update.title);
  });

  it('should be deleted', async () => {
    const result = await requestService.create(mockRequest);
    const filter = { _id: result._id };
    const operation = await requestModel.deleteOne(filter);
    expect(operation.ok).toBe(1);
  });
});

const mockRequest = {
  title: 'MacBook Pro 2020 for ReactNative Development',
  imageURL: 'https://goodmockups.com/wp-content/uploads/2017/06/Free-MacBook-Mockup-PSD-4.jpg',
  amount: 1000000, // equivalent to 3 kidneys,
  description: 'I need this MacBook. Im not gonna lie. I just need it to feel among'
};

const noTitle = {
  imageURL: 'https://goodmockups.com/wp-content/uploads/2017/06/Free-MacBook-Mockup-PSD-4.jpg',
  amount: 1000000, // equivalent to 3 kidneys,
  description: 'I need this MacBook. Im not gonna lie. I just need it to feel among'
};

const noImage = {
  title: 'MacBook Pro 2020 for ReactNative Development',
  amount: 1000000, // equivalent to 3 kidneys,
  description: 'I need this MacBook. Im not gonna lie. I just need it to feel among'
};

const noAmount= {
  title: 'MacBook Pro 2020 for ReactNative Development',
  imageURL: 'https://goodmockups.com/wp-content/uploads/2017/06/Free-MacBook-Mockup-PSD-4.jpg',
  description: 'I need this MacBook. Im not gonna lie. I just need it to feel among'
};

const noDescription = {
  title: 'MacBook Pro 2020 for ReactNative Development',
  imageURL: 'https://goodmockups.com/wp-content/uploads/2017/06/Free-MacBook-Mockup-PSD-4.jpg',
  amount: 1000000, // equivalent to 3 kidneys,
};

const numberString = {
  title: 'MacBook Pro 2020 for ReactNative Development',
  imageURL: 'https://goodmockups.com/wp-content/uploads/2017/06/Free-MacBook-Mockup-PSD-4.jpg',
  amount: '1000000', // equivalent to 3 kidneys,
  description: 'I need this MacBook. Im not gonna lie. I just need it to feel among'
};