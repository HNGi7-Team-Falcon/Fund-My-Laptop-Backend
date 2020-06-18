const mongoose = require('mongoose');
const shortid = require('shortid');

//@ DESC: model for new requests by fundee
//@ Values: Takes in title of post, imageURL from cloudinary, amount, desc & date of request

const RequestSchema = new mongoose.Schema({
   id:{
      type: String,
      default: shortid.generate
   },
   title:{
      type: String,
      required: true
   },
   imageURL:{
      type: String,
      required: true
   },
   amount:{
      type: Number,
      required: true
   },
   description:{
      type: String,
      required: true,
      minlength: 20,
      maxlength: 255
   },
   date:{
      type: Date,
      default: Date.now
   }
});


const requestModel = mongoose.model('Request', RequestSchema);

module.exports = requestModel;