const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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

module.exports = mongoose.model('user', UserSchema);