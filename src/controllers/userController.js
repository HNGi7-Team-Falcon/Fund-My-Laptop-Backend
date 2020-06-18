const mongoose =require('mongoose')
const User =require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const passport = require('passport')
const response = require("./../utils/response");
const CustomError = require("./../utils/CustomError");
const jwtSecret = process.env.JWT_SECRET;
// user registration

class UserContoller {

   


    async login(req, res) {
        
        if (error) throw new CustomError(error.details[0].message);

        const user = await User.findOne({
            email: req.body.email
        });
        if (!user) throw new CustomError("Incorrect email or password");
        const isCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isCorrect) throw new CustomError("Incorrect email or password");

        const token = jwt.sign({
            id: user._id
        }, jwtSecret, {
            expiresIn: 36000
        })

        const data = {
            uid: user._id,
            email: user.email,
            role: user.role,
            token
        };

        res.status(200).json(response("User", data, true))
    }

   
}

module.exports = new UserContoller();