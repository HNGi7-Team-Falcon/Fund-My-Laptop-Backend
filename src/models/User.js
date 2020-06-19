const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    // select: false, // It is important for the password to be returned on login
  },
  number: {
    type: Number,
    default: 0,
  },
  address: {
    type: String,
  },
  verified: {
    type: Boolean,
    required: true,
  },
  investment_count: {
    type: Number,
    default: 0,
  },
  request_count: {
    type: Number,
    default: 0,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Encrypt password using bcrypt

UserSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model("user", UserSchema);
