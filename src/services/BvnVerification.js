//var userBVN = '123456789';
require('dotenv').config();
var request = require('request');


if(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  var secretKey = 'FLWSECK_TEST-SANDBOXDEMOKEY-X';//development
} else {
  var secretKey = process.env.BVN_FLUTTERWAVE_SECRET_KEY;//production
}

const makeBvnRequest = (userBVN, callback) => {
  var options = {
    'method': 'GET',
    'url': `https://api.flutterwave.com/v3/kyc/bvns/${userBVN}`,
    'headers': {
      'Authorization': `Bearer ${secretKey}`
    }
  }
  request(options, (error, response) => {
    if (error) { return callback(error); }
    return callback(response.body);
  });
}
  module.exports = makeBvnRequest;
