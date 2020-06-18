const mongoose = require('mongoose');

//@ DESC: model for public recommendation
//@keys: 
//verificationTag - URL to an existing professional profile
//requesterID - id of the user requesting recommendation. Should be passed in automatially

const RecommendSchema = new mongoose.Schema({
   content: {
      type: String,
      required: true
   },
   verificationTag: {
      type: String,
      required: [true, 'Please provide a link to a verified profile']
   },
   requesterID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true
   },
   date: {
      type: Date,
      default: Date.now
   }
}
);

module.exports = mongoose.model('Recommendation', RecommendSchema);