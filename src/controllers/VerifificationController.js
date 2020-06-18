const response = require("../utils/response");
const VerifyServ = require("../services/VerificationService");

class VerifyController {

    async create(req, res) {
        const data = await VerifyServ.create(req.body);
        res.status(201).send(response("User verification created", data));
    }

    
}

module.exports = new VerifyController();