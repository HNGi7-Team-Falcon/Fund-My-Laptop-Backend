const mongoose = require('mongoose');
require('../utils/env');

let uri = process.env.MONGODB_URI;

/**
 * Uncomment this line of code to use a local MongoDB server
 */

  if (process.env.NODE_ENV !== 'production') {
    uri = 'mongodb://localhost:27017/FundMyLaptop'
  }

console.log(uri)
const dbOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

function initDbConfig() {
    mongoose
    .connect(uri, dbOptions)
    .then(() => console.log("Connected to database!", uri))
    .catch((error) => console.log("Error!. Couldn't connect to database ", error));
}

module.exports = initDbConfig;