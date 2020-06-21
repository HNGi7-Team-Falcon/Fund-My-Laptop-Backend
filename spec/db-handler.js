/**
 * YOU'RE NOT SUPPOSED TO BE HERE
 * DON'T TOUCH THIS FILE 
 * @author Usman Suleiman @Usman
 */
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server-core');

const mongod = new MongoMemoryServer();

jest.setTimeout(1000000);

module.exports.connect = async () => {
    const uri = await mongod.getConnectionString(); 
    const dbOptions = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    };
   
    if (!mongoose.connection.readyState) {
      await mongoose.connect(uri, dbOptions);
    }
};

module.exports.closeDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
};

module.exports.clearDatabase = async () => {
  const collections = mongoose.connection.collections;
  for (let key in collections) {
    // await collections[key].deleteMany({});
  }
}
