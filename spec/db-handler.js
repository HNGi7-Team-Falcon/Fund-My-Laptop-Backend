const mongoose = require('mongoose');
require('dotenv').config()
const uri = process.env.MONGODB_URI;

module.exports.connect = async () => {

    const dbOptions = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    };
    
    await mongoose
    .connect(uri, dbOptions)
    .then(() => console.log("Connected to database!"))
    .catch((error) => console.log("Error!. Couldn't connect to database ", error));
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
