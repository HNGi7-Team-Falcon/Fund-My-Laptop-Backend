const Request = require("./../models/Request");
const CustomError = require("./../utils/CustomError");

class RequestService {
  async create(data) {
    const request = new Request(data);
    await request.save();
    return request;
  }

  async update(data) {
    const filter = { _id: data.id };
    const update = {...data};
    delete update.id;
    const request = await User.findOneAndUpdate(filter, update, {
      new: true
    });

    if (!request) throw new CustomError("Item does not exist");

    return request;
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
    return Request.findOneAndUpdate({_id: requestId}, {isSuspended: true}, {new: true});
  }
  async activeButNotFunded() {
    return Request.find({$and: [{isactive: true}, {isFunded: false}]});
  }
}

module.exports = new RequestService();
