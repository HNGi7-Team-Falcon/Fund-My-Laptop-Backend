const response = require("./../utils/response");
const UserServ = require("./../services/UserService");
const User = require("../models/User");
const VerifyEmail = require('../utils/EmailVerification');

class UserContoller {
  async create(req, res) {
    let {number=''} = req.body;
    number = number.trim()

    if(number.charAt(0) !== '+') {
      const NGNCode = "+234";
      number = number.substring(1);
      number = NGNCode.concat(number);
    }

    const data = await UserServ.create(req.body);
    if (process.env.NODE_ENV === 'production') {
      // Mail containing verification link will be sent to the user.
      const mailStatus =  await VerifyEmail.createVerificationLink(data, req);
      console.log(mailStatus.message);
    }
    res.status(201).send(response("User account created", data));
  }

    
  async login(req, res) {
    
    const data = await UserServ.login(req.body);

    res.status(200).send(response("User login successful", data));
  }

  async update(req, res) {
    
    const data = await UserServ.update(req.body);

    res.status(204).send(response("User Resource updated successfully", data));
  }
  
  async delete(req, res) {
    const data = await UserServ.delete(req.params, req.body);
    res.status(204).send(response('User deleted successfully', {}));
}

  //storing favorite requests
  async favorites(req, res) {
    
    const data = await UserServ.newFavorite(req.body);
    //message returned should be a flash message
    res.status(200).send(response("Request added to favorites", data));
  }

}

module.exports = new UserContoller();
