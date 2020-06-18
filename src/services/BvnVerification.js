//var userBVN = '123456789';
var secretKey = 'FLWSECK_TEST-SANDBOXDEMOKEY-X';
var request = require('request');

class BvnVerification {
  verifyBvn(userBVN){
    var options = {
      'method': 'GET',
      'url': `https://api.flutterwave.com/v3/kyc/bvns/${userBVN}`,
      'headers': {
        'Authorization': `Bearer ${secretKey}`
      }
    };

  request(options, function (error, response) { 
    if (error) throw new Error(error);
    var result = JSON.parse(response.body);
    console.log(result);
    });
  }
}
module.exports = new BvnVerification();