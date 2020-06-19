/**
 * YOU'RE NOT SUPPOSED TO BE HERE
 * DON'T TOUCH THIS FILE 
 * @author Usman Suleiman
 */
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongod = new MongoMemoryServer();


module.exports.connect = async () => {
    const uri = await mongod.getConnectionString(); 
    const dbOptions = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    };
    
    await mongoose.connect(uri, dbOptions);
};

module.exports.closeDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
};

module.exports.clearDatabase = async () => {
  const collections = mongoose.connection.collections;

  for (let key in collections) {
    await collections[key].deleteMany({});
  }
}
