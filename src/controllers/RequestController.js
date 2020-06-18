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
      const request = await RequestServ.findById(req.params.requestId);
      if (!request) {
        console.log(request);
        return res.status(404).send(response("Request not found", request));
      }
      res.status(200).send(response("Request details", request));
    } catch (error) {
      res.send(response(request));
    }
  }

  async delete(req, res) {
    try {
      const request = await RequestServ.delete(req.params.requestId);
      if (!request) {
        return res
          .status(404)
          .send(
            response(
              `Request not found with Id: ${req.params.requestId}`,
              request
            )
          );
      }
      res.status(200).send(response("Request deleted successfully", request));
    } catch (error) {
      res.send(response(request));
    }
  }

  async getRequests(req, res) {
    // Pull from DB
    try {
      // Find Requests and sort by most recent requests
      const requests = await Request.find({ user: req.user.id }).sort({
        date: -1,
      });

      res.json(requests);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
}

module.exports = new RequestController();
