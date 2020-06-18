const mongoose = require('mongoose');


//define database schema & model 
const verificationSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    },

    photoURL: {
      type: String,
      required: true
    },
    
    videoURL: {
        type: String,
        required: true
    },
  
    bvn: {
        type: String,
        validate: {
            validator: function(v) {
            return /\d{11}/.test(v);
            },
            message: props => `${props.value} is not a valid BVN number!`
            },
        required: true
    },
    
    status: {
    type: Boolean,
    default: false,
    required: true
    }
  });

const Verify = mongoose.model("Verify", verificationSchema);

module.exports = Verify;
