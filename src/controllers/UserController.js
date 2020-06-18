const response = require("./../utils/response");
const UserServ = require("./../services/UserService");
const User = require("../models/User");

class UserContoller {

    async create(req, res) {
        console.log("why")
        const data = await UserServ.create(req.body);
        res.status(201).send(response("User account created", data));
    }

    async login(req, res) {
        const data = await UserServ.login(req.body);
        res.status(200).send(response("User login successful", data));
    }

    async update(req, res) {
        const data = await UserServ.update(req.params, req.body);
        res.status(204).send(response("User Resource updated successfully", data));
    }
    
    //storing favorite requests
    async favorites(req,res){
      const data = await UserServ.newFavorite(req.body);
      //message returned should be a flash message
      res.status(200).send(response("Request added to favorites", data)); 
   }
}

module.exports = new UserContoller(); 
