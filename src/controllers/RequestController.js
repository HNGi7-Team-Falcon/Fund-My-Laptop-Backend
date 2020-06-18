const response = require("./../utils/response");
const RequestServ = require("./../services/RequestService");

class RequestController {

    async create(req, res) {
        const data = await RequestServ.create(req.body);
        res.status(201).send(response("Request created", data));
    }

    async update(req, res){
        const data = await RequestServ.update(req.body);
        res.status(200).send(response("Request updated successfully", data));
    }
}

module.exports = new RequestController();