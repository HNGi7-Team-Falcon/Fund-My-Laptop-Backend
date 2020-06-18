const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("./../models/User");
const CustomError = require("./../utils/CustomError");
const Favs = require("./../models/Favorites"); // favorites model

const jwtSecret = process.env.JWT_SECRET;

class UserService {
  async create(data) {
    if (await User.findOne({ email: data.email }))
      throw new CustomError("Email already exists");

    const user = new User(data);

    const token = await jwt.sign({ id: user._id }, jwtSecret, {
      expiresIn: 36000,
    });
    user.token = token;

    await user.save();

    return {
      token: token,
      uid: user._id,
      name: user.name,
      email: user.email,
    };
  }

  async login(data) {
    if (!data.email) throw new CustomError("No email specified");
    if (!data.password) throw new CustomError("No password");

    const user = await User.findOne({ email: data.email });

    if (!user) throw new CustomError("Incorrect email");

    const isCorrect = await bcrypt.compare(data.password, user.password);
    if (!isCorrect) throw new CustomError("Incorrect email or password");

    const token = await jwt.sign({ id: user._id }, jwtSecret, {
      expiresIn: 36000,
    });
    user.token = token;

    return {
      token: token,
      uid: user._id,
      name: user.name,
      email: user.email,
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
    if (!data.id) throw new CustomError("No specified user with the id");

    const user = await User.findOneAndUpdate({ _id: data.id });

    return {
      uid: user._id,
      name: user.name,
      email: user.email,
    };
  }
}

module.exports = new UserService();
