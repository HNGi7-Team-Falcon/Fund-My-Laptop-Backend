/**
 * DON'T TOUCH THIS FILE - IT'S MY TASK
 * @author @rotimi
 * Story title: DB SETUP
 * Ticket ID - 43802
 */

const mongoose = require('mongoose');
require('../utils/env');

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
        .then(() => console.log(":: Connected to database"))
        .catch((error) => console.log(":: Couldn't connect to database ", error));
}

module.exports = initDbConfig;