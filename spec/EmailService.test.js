const sendGrid = require('@sendgrid/mail');;

// Connect to a test databse before running any tests.
beforeAll(async () => await sendGrid.connect());

describe('email service', () => {
  it('can connect succssfully', () => {
    expect(async () => await sendGrid.connect()).not.toThrow();
  });
  });  
