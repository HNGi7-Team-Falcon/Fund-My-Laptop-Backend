//var userBVN = '123456789';
const CustomError = require("./../utils/CustomError");
var request = require('request');
var secretKey = 'FLWSECK_TEST-SANDBOXDEMOKEY-X';

const makeBvnRequest = (userBVN, callback) => {
  var options = {
    'method': 'GET',
    'url': `https://api.flutterwave.com/v3/kyc/bvns/${userBVN}`,
    'headers': {
      'Authorization': `Bearer ${secretKey}`
    }
  }
  request(options, (error, response) => {
    if (error) { throw new CustomError(error, 400); }
    return callback(response.body);
  });
}
  module.exports.verifyBVN = makeBvnRequest;