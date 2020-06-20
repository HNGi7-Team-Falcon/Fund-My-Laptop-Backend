const mongoose = require('mongoose');
// const { MongoMemoryServer } = require('mongodb-memory-server-core');


let uri = process.env.MONGODB_URI;


/**
 * Uncomment this line of code to use a local MongoDB server
 */
// (async () => {
//   if (process.env.NODE_ENV !== 'production') {
//     const mongod = new MongoMemoryServer();
//     uri = await mongod.getConnectionString();
//     console.log('MongoDB', uri);
//   }
// })();

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