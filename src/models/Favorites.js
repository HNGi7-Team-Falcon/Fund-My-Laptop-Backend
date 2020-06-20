const mongoose = require('mongoose');

//@ DESC: model for user(Funder) fav fundee requests
//@keys: 
//userID - takes the id of user(Funder)
//requestID - take the id of the request

const favoriteSchema = new mongoose.Schema({
   userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true
   },
   requestID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Request',
      required: true
   },
   time: {
      type: Date,
      default: Date.now
   }
}
);

module.exports = mongoose.model('Favorite', favoriteSchema);