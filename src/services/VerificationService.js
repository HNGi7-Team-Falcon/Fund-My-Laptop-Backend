const Verify = require("../models/verification");
const CustomError = require("../utils/CustomError");

class VerifyService {

  async create(data) {
    const verify = new Verify(data);
    await verify.save();
    return {
      token: token,
      uid: verify._id,
      name: verify.name,
      email: verify.email,
    }
  }

  async update(data) {
    

    return data
  }
  
}

module.exports = new VerifyService()