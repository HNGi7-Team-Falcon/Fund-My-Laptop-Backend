const mongoose = require('mongoose');
const dotenv = require("dotenv").config()
const { MongoMemoryServer } = require('mongodb-memory-server-core');


/**
 * Uncomment this line of code to use a local MongoDB server
 */

  if (process.env.NODE_ENV !== 'production') {
    uri = 'mongodb://localhost:27017/myapp'
  }

  const DB = process.env.DATABASE.replace(
      '<PASSWORD>',
      process.env.DATABASE_PASSWORD
    );

function initDbConfig(){

  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log('DB connection successful');
    })
    .catch(err => {
      console.log({
        Error: err,
        Message: 'Unable to connect to server'
      });
    });
}

module.exports = initDbConfig;