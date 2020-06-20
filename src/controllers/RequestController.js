const response = require("./../utils/response");
const RequestServ = require("./../services/RequestService");

class RequestController {
  async create(req, res) {
    
    if(req.body === {}){
      throw new CustomError("Incomplete data provided", 400);
    }

    const data = await RequestServ.create(req.body);
    res.status(201).send(response("Request created", data));
  }

  async update(req, res) {
    try {
      const request = await RequestServ.findById(req.params.requestId);
      if (!request) {
        return res.status(404).send(response("Request not found", request));
      }
      const data = await RequestServ.update(req.body);
      res.status(200).send(response("Request updated successfully", data));
    } catch (error) {
      res.send(response(error));
    }
  }

  async findById(req, res) {
    
    if(!req.params.id){
      throw new CustomError("ID not provided", 400);
    }

      const request = await RequestServ.findById(req.params.id);

      if (!request) {
        return res.status(404).send(response("Request not found", request));
      }

      res.status(200).send(response("Request details", request,"successful"));

  }

  async delete(req, res) {
    
    if(!req.params.id){
      throw new CustomError("ID not provided", 400);
    }

      const request = await RequestServ.delete(req.params.requestId);

      if (!request) {
        throw new CustomError(`Request not found with ${req.params.id}`, 404);
      }

      res.status(200).send(response("Request deleted successfully", null));
  
  }

  async getRequests(req, res) {

    const data = await RequestServ.findAll();

    res.status(200).send(response("Request Gotten Successfully", data));
  }
}

module.exports = new RequestController();
