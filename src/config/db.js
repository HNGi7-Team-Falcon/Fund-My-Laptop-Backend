const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');


let uri = process.env.MONGODB_URI;


(async () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('using in-memory-server for development');
    const mongod = new MongoMemoryServer();
    uri = await mongod.getConnectionString();
  }
})();

const dbOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

function initDbConfig() {
    mongoose
    .connect(uri, dbOptions)
    .then(() => console.log("Connected to database!"))
    .catch((error) => console.log("Error!. Couldn't connect to database ", error));
}

module.exports = initDbConfig;