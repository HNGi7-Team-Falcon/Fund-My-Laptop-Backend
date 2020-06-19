const Request = require("./../models/Request");
const CustomError = require("./../utils/CustomError");

class RequestService {
  async create(data) {
    const request = new Request(data);
    await request.save();
    return {
      //This token is not necessary here. This is a protected route so just get the user_id from the request (req)
      // token: token,
      uid: request._id,
      name: request.name,
      email: request.email,
    };
  }

  async update(data) {
    return data;
  }

  async delete(requestId) {
    return Request.findByIdAndRemove(requestId);
  }

  async findById(requestId) {
    return Request.findById(requestId);
  }

  async find(period1, period2) {
    return Request.find({$and: [{isFunded: true}, {date: {$gte: period1, $lte: period2}}]});
  }
  async findSuspended() {
    return Request.find({isSuspended: true});
  }
  async suspend(requestId) {
    return Request.findByIdAndUpdate ({_id: requestId}, {isSuspended: true});
  }
}

module.exports = new RequestService();
