const response = require("./../utils/response");
const RequestServ = require("./../services/RequestService");

class RequestController {
  async create(req, res) {
    const data = await RequestServ.create(req.body);
    res.status(201).send(response("Request created", data));
  }

  async update(req, res) {
    const data = await RequestServ.update(req.body);
    res.status(200).send(response("Request updated successfully", data));
  }

  async findById(req, res) {
    try {
      const data = await RequestServ.findById(req.params.requestId);
      res.status(200).send(response("Request updated successfully", data));
    } catch (error) {
      res.status(401).send({ message: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const data = await RequestServ.findAll();
      res.status(200).send(response("Request updated successfully", data));
    } catch (error) {
      res.status(401).send({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const request = await RequestServ.delete(req.params.requestId);
      if (!request) {
        return res.status(404).send({
          message: "Request not found with id " + req.params.requestId,
        });
      }
      res.status(200).send(response("Request updated successfully", request));
    } catch (error) {
      if (error.kind === "ObjectId" || error.name === "NotFound") {
        return res.status(404).send({
          message: "Request not found",
        });
      }
      return res.status(404).send({
        message: "Could not delete request",
      });
    }
  }
}

module.exports = new RequestController();
