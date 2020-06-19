const Request = require("./../models/Request");
const CustomError = require("./../utils/CustomError");

class RequestService {
  create(data) {
    const request = new Request(data);
    await request.save();
    return {
      //This token is not necessary here. This is a protected route so just get the user_id from the request (req)
      // token: token,
      uid: request._id,
      name: request.name,
      email: request.email,
      fundStatus: request.isFunded
    };
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

}

module.exports = new RequestService();
