const jwt = require("jsonwebtoken");
const User= require("../models/User");
const CustomError = require("../helpers/CustomError");class UserService {
  async create(data) {
    if (await User.findOne({ email: data.email }))
      throw new CustomError("email already exists");    const user = new Admin(data);    const token = await jwt.sign({ id: admin._id }, process.env.JWT_SECRET);    await user.save();    return data = {
      token,
      user: {
        name: admin.name,
        email: admin.email
      }
    };
  }
}
