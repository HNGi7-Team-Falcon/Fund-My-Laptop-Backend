const response = require("./../utils/response");
const UserServ = require("./../services/UserService");
const CustomError = require("../utils/CustomError");

class UserContoller {
  async create(req, res) {
    let {email, password} = req.body;

    const data = await UserServ.create({email,password});

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

  //storing favorite requests
  async favorites(req, res) {
    
    const data = await UserServ.newFavorite(req.body);
    //message returned should be a flash message
    res.status(200).send(response("Request added to favorites", data));
  }

}

module.exports = new UserContoller();
