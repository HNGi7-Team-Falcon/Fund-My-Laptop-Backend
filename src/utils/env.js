const path = require('path');
const dotenv = require('dotenv');

const env = process.env.NODE_ENV;
const envFile = env ? `.env.${env}` : '.env';

dotenv.config({path: path.resolve(__dirname, `../../${envFile}`)});