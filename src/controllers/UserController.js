const response = require("./../utils/response");
const UserServ = require("./../services/UserService");
const User = require("../models/User");
const VerifyEmail = require('../utils/EmailVerification');

class UserContoller {
  async create(req, res) {
    if (!req.body) throw new CustomError("No data provided");

        console.log("why")
        const data = await UserServ.create(req.body);
        // Mail containing verification link will be sent to the user.
        const mailStatus =  await VerifyEmail.createVerificationLink(data, req);
        console.log(mailStatus.message);
        res.status(201).send(response("User account created", data));
    }

    
  async login(req, res) {
    if (!req.body) throw new CustomError("No data provided");

    const data = await UserServ.login(req.body);

    res.status(200).send(response("User login successful", data));
  }

  async update(req, res) {
    if (!req.body) throw new CustomError("No data provided");

    const data = await UserServ.update(req.body);

    res.status(204).send(response("User Resource updated successfully", data));
  }
  
  async delete(req, res) {
    const data = await UserServ.delete(req.params, req.body);
    res.status(204).send(response('User deleted successfully', {}));
}

  //storing favorite requests
  async favorites(req, res) {
    if (!req.body) throw new CustomError("No data provided");

    const data = await UserServ.newFavorite(req.body);
    //message returned should be a flash message
    res.status(200).send(response("Request added to favorites", data));
  }

}

module.exports = new UserContoller();
