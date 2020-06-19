const response = require("../../utils/response");
const RequestServ = require("../../services/RequestService");

class RequestController {

  //GET returns all requests that have been funded & completely paid for. Filter by period
  async getCompletedRequests(req, res) {
    const period1 = req.body.period1;
    const period2 = req.body.period2;
    const data = await RequestServ.find(period1, period2);
    res.status(201).send(response("Requests retrieved", data));
  }

  async getSuspendedRequests(req, res) {
    const data = await RequestServ.findSuspended();
    res.status(201).send(response("Requests retrieved", data));
  }

  async suspendRequest(req, res) {
    requestId = req.params.requestId;
    const data = await RequestServ.suspend(requestId);
    res.status(201).send(response("Request suspended", data));
  }

}

module.exports = new RequestController();
