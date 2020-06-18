const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({
  path: '.env',
});

// Load models
const Request = require('./src/models/Request');
const User = require('./src/models/User');

// Connect to DB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Read JSON files
const requests = JSON.parse(
  fs.readFileSync(`${__dirname}/src/_data/requests.json`, 'utf-8')
);

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/src/_data/users.json`, 'utf-8')
);

// Import into DB
const importData = async () => {
  try {
    await Request.create(requests);
    await User.create(users);

    console.log('Data Imported...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Request.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
