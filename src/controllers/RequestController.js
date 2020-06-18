const response = require("./../utils/response");
const RequestServ = require("./../services/RequestService");

class RequestController {

    async create(req, res) {
        const data = await RequestServ.create(req.body);
        res.status(201).send(response("Request created", data));
    }

    async update(req, res){

        // Validate Request
    if(!req.body) {
        return res.status(400).send(response("Fill in the necessary details", data));
      } else{
        const data = await RequestServ.update(req.params.requestId, {
            amount: req.body.amount,
            description: req.body.description,
            title: req.body.title,
          });
        res.status(200).send(response("Request updated successfully", data));

      }

    }

    async getRequests(req, res) {
        // Pull from DB
        const data = await RequestServ.get(req.body);
        res.status(200).send(response("Request Gotten Successfully", data));
      }

      

    async getRequest(req, res){
        const data = await RequestServ.getOne(req.params.requestId);
        res.status(200).send(response(`${req.params.requestId} has been gotten successfully`, data));
    }

    async delRequest(req, res){
        
        const data = await RequestServ.delete(req.params.deleteId)
        res.status(200).send(response("Request deleted successfully", data));
    }
}

module.exports = new RequestController();