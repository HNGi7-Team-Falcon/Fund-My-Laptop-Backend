const response = require("./../utils/response");
const UserServ = require("./../services/UserService");

class UserContoller {

    async create(req, res) {
        const data = await UserServ.create(req.body);
        res.status(201).send(response("User account created", data));
    }

    async login(req, res){
        const data = await UserServ.login(req.body);
        res.status(200).send(response("User login successful", data));
    }

    //storing favorite requests
    async favorites(req,res){
       const data = await UserServ.newFavorite(req.body);
       //message returned should be a flash message
       res.status(200).send(response("Request added to favorites", data));
    }
}

module.exports = new UserContoller(); 
