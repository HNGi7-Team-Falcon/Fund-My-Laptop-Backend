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
}

module.exports = new UserContoller(); 
