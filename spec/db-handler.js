const mongoose = require('mongoose');
require('dotenv').config();

module.exports.connect = async () => {
    const uri = process.env.MONGODB_URI;
    const dbOptions = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    };
    
    await mongoose.connect(uri, dbOptions);
};

module.exports.closeDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
};

module.exports.clearDatabase = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
}
