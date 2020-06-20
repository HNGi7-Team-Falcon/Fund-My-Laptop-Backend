const mongoose = require('mongoose');

//@ DESC: model for new requests by fundee
//@ Values: Takes in title of post, imageURL from cloudinary, amount, desc & date of request

const RequestSchema = new mongoose.Schema({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
      // For relationship with the logged in User
   },
   title: {
      type: String,
      required: true
   },
   imageURL: {
      type: String,
      required: true
   },
   amount: {
      type: Number,
      required: true
   },
   isFunded: {
      type: Boolean,
      default: false
   },
   isSuspended: {
      type: Boolean,
      default: false
   },
   isActive: {
      type: Boolean,
      default: true
   },
   description: {
      type: String,
      required: true,
      minlength: 20,
      maxlength: 255
   },
   date: {
      type: Date,
      default: Date.now
   }
}
);

module.exports = mongoose.model('Request', RequestSchema);