const jwt = require("jsonwebtoken");
const User = require("./../models/User");
const CustomError = require("./../utils/CustomError");

const jwtSecret = process.env.JWT_SECRET;

class UserService {

  async create(data) {
    if (await User.findOne({ email: data.email }))
      throw new CustomError("Email already exists");

    const user = new User(data);

    const token = await jwt.sign({ id: user._id }, jwtSecret, { expiresIn: 36000 });

    await user.save();

    return {
      token: token,
      uid: user._id,
      name: user.name,
      email: user.email,
    }
  }

  async login(data) {
    if (!data.email) throw new CustomError("No email specified");
    if (!data.password) throw new CustomError("No password");

    const user = await User.findOne({ email: data.email });

    if (!user) throw new CustomError("Incorrect email");

    const isCorrect = await bcrypt.compare(data.password, user.password)
    if (!isCorrect) throw new CustomError("Incorrect email or password");

    const token = await jwt.sign({ id: user._id }, jwtSecret, { expiresIn: 36000 });

    return {
      token: token,
      uid: user._id,
      name: user.name,
      email: user.email,

    }
  }
  
}

module.exports = new UserService()