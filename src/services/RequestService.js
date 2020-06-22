const Request = require("./../models/Request");
const CustomError = require("./../utils/CustomError");

class RequestService {

  async create(data, user) {
    // Create wasn't initially returning imageURL & description
    const { title, imageURL, amount, description } = data;

    const request = new Request({
      title,
      imageURL,
      amount,
      description,
      user: user.id,
    });

    const newdata = await request.save();
    return newdata;
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

  // Gets all requests irrespective of user (no relationship to user)
  findAll() {
    return Request.find();
  }

  // Get all requests in relationship to user
  async get(data, req) {
    // Get all User Requests
    const requests = await Request.find({ user: req.user });

    return requests; 
  }
  async findSuspended() {
    return Request.find({isSuspended: true});
  }
  async suspend(requestId) {
    return Request.findOneAndUpdate({_id: requestId}, {isSuspended: true}, {new: true});
  }
   //task 49334 @boluakins
  async activeButNotFunded() {
    return Request.find({$and: [{isactive: true}, {isFunded: false}]});

  }

  async activeAndFunded() {
    return Request.find({$and: [{isactive: true}, {isFunded: true}]});
  }
}

module.exports = new RequestService();
