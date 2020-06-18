const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VerificationSchema = new Schema(
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
        validator: function (v) {
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
  }
);

module.exports = mongoose.model("Verify", VerificationSchema);;
