const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    number: {
        type: Number,
        default: 0
    },
    address: {
        type: String
    },
    verified: {
        type: Boolean,
        required: true
    },
    investment_count: {
        type: Number,
        default: 0
    },
    request_count: {
        type: Number,
        default: 0
    }
})

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;