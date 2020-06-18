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
}

module.exports = new UserContoller(); 
