/**=================================================================
 * ====   TITLE::     DESIGN OF EMAIL VERIFICATION MODEL        ====  
 * ====   AUTHOR:: HACKINWALE <hackinwale.developer@gmail.com>  ====
 * ====   DATE::            19TH JUNE 2020                      ====
 * =================================================================
 */

 const mongoose = require("mongoose");

 const emailVerificationSchema = new mongoose.Schema({

  //  TODO: Add the model here 

 });

 module.exports = mongoose.model("EmailVerificationToken", emailVerificationSchema);