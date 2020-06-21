const path = require('path');
const dotenv = require('dotenv');

const env = process.env.NODE_ENV;
const envFile = env ? `.env.${env}` : '.env';
const envPath = path.resolve(__dirname, `../../${envFile}`);

dotenv.config({path: envPath});