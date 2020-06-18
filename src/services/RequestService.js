const Request = require("./../models/Request");
const CustomError = require("./../utils/CustomError");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

class RequestService {

  

  async create(data) {
    const request = new Request(data);
    const token = await jwt.sign({ id: request._id }, jwtSecret, { expiresIn: 36000 });
    await request.save();

    return {
      token: token,
      uid: request._id,
      name: request.name,
      email: request.email,
    }
  }

  async get(data) {
    // Return requests data from database
    return data;
  }

  

  async getOne(data) {
    const getResult = Request.findById(data);
    
    return getResult;

  }

  

  async update(data, options = {})  {
    
    // Find user and update it with the request body
  const updateRequest =  Request.findByIdAndUpdate(data, options, {new: true})

    return updateRequest;
  };

  async delete(data) {

    const result = Request.findByIdAndRemove(data);

    // console.log(result);
    return result;



  } 
    
};

module.exports = new RequestService()