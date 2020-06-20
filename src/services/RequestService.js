const Request = require("./../models/Request");
const CustomError = require("./../utils/CustomError");

class RequestService {
  async create(data) {
    const request = new Request(data);
    await request.save();
    return request;
  }

   update(id,data) {

    return Request.findByIdAndUpdate(
      id,
      data,
      {
        new: true,
        runValidators: true
      }
      )
  }

  delete(requestId) {
    return Request.findByIdAndRemove(requestId);
  }

  findById(requestId) {
    return Request.findById(requestId);
  }

  find(period1, period2) {
    return Request.find({$and: [{isFunded: true}, {date: {$gte: period1, $lte: period2}}]});
  }

  findAll() {
    return Request.find();
  }
<<<<<<< HEAD
  async findSuspended() {
    return Request.find({isSuspended: true});
  }
  async suspend(requestId) {
    return Request.findOneAndUpdate({_id: requestId}, {isSuspended: true}, {new: true});
  }
  async activeButNotFunded() {
    return Request.find({$and: [{isactive: true}, {isFunded: false}]});
  }
=======

>>>>>>> 458e08d0fc089ff21d56d066926670d2760d885a
}

module.exports = new RequestService();
