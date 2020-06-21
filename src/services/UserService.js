const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require('dotenv').config();
const User = require("./../models/User");
const CustomError = require("./../utils/CustomError");
const Favs = require("./../models/Favorites"); 

const jwtSecret = process.env.JWT_SECRET;

class UserService {
  async create(data) {
    if (!data.email) throw new CustomError("No email specified");
    if (!data.password) throw new CustomError("No password");

    data.email = data.email.toLowerCase();

    if (await User.findOne({ email: data.email })){
      throw new CustomError("Email already exists");
    }

    const user = new User(data);

    const token = jwt.sign({ id: user._id }, jwtSecret, {
      expiresIn: 360000,
    });
    user.token = token;
    await user.save();

    return {
      token,
      uid: user._id,
    };
  }

  async login(data) {
    if (!data.email) throw new CustomError("No email specified");
    if (!data.password) throw new CustomError("No password");
    data.email = data.email.toLowerCase();
    const user = await User.findOne({ email: data.email });

    if (!user) throw new CustomError("Invalid Credentials");

    const isCorrect = await bcrypt.compare(data.password, user.password);
    if (!isCorrect) throw new CustomError("Invalid Credentials");

    const token = jwt.sign({ id: user._id }, jwtSecret, {
      expiresIn: 36000,
    });
    user.token = token;

    return {
      token: token,
      uid: user._id,
    };
  }

  //favorites storage in DB
  async newFavorite(data) {
    
    if (await Favs.findOne({ requestID: data.requestID }))
      throw new CustomError("Request is already a favorite");

    const favRequest = new Favs(data);
    await favRequest.save();
  }

  async update(data) {

    const id = data.id;

    for(detail in data){
      if ( data[detail] === id ) {
        delete data[detail]
      }
    }

    const user = await User.findByIdAndUpdate({ _id: data.id }, data);

    return {
      uid: user._id,
    };
  }

  async delete(data) {
    if (!data.id) throw new CustomError('No user with the specified id');;

    const user = await User.findOneAndDelete({ _id: data.id });

    return {
      uid: user._id,
      name: user.name,
      email: user.email
    }
  }

}

module.exports = new UserService();
