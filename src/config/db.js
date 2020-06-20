const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

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