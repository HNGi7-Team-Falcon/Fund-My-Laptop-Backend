/**=================================================================
 * ====   TITLE:: IMPLEMENTATION OF EMAIL VERIFICATION LOGIC    ====  
 * ====   AUTHOR:: HACKINWALE <hackinwale.developer@gmail.com>  ====
 * ====   DATE::            19TH JUNE 2020                      ====
 * =================================================================
 */

 const RandomString = require('randomstring');
 const User = require('../models/User');
 const EmailVerification = require('../models/EmailVerification');
 const EmailFactory = require('../EmailFactory');
 const CustomError = require('../utils/CustomError');
const response = require('./response');

 const {sendVerificationMail} = EmailFactory;

 class EmailVerificationUtil{
   
  constructor(){
    
  }

  /**
   * Upon signing up, collect the user data
   * Create a verification token using random string
   * Package the token as URL
   * Send the token to user email address provided
   */

  async createVerificationLink(user, req) {

    let data = {
      token: RandomString.generate(64),
      _userId: user.uid
    }

    if(!await EmailVerification.create(data)){
      let deletedUser = User.deleteOne({email: user.email});
      this.logger(deletedUser);
      throw new CustomError("Failed to generate token. Try signup again", 403);
    }

    let verificationUrl = 'http:\/\/' + req.headers.host + '\/signup\/verification\/' + data.token;
    //Now send the mail to the user 
    if(!await sendVerificationMail(user.email, verificationUrl)){
      throw new CustomError("Email Could not be Sent. Try Again.")
    }    
      
    return{
      message: "Kindly Check Your mail to verify your account.",
      status: "success",
      code: 200
    }
  }

  // handles all log
  logger(msg) {
    let debug = true;
    if(debug)
      console.log(msg);
  }

 }

 module.exports = new EmailVerificationUtil();