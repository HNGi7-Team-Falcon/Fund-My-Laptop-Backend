const Request = require("./../models/Request");
const CustomError = require("./../utils/CustomError");

class RequestService {

  async create(data) {
    const request = new Request(data);
    await request.save();
    return {
      token: token,
      uid: request._id,
      name: request.name,
      email: request.email,
    }
  }

  async update(data) {
    

    return data
  }
  
}

module.exports = new RequestService()