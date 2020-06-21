/**
 * YOU'RE NOT SUPPOSED TO BE HERE
 * DON'T TOUCH THIS FILE 
 * @author Usman Suleiman @Usman
 */
const mongoose = require('mongoose');

module.exports.connect = async () => {
    const uri = process.env.MONGODB_URI; 
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
};

module.exports.clearDatabase = async () => {
  const collections = mongoose.connection.collections;
  for (let key in collections) {
    // await collections[key].deleteMany({});
  }
}
