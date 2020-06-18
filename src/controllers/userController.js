const AdminServ = require("../services/AdminService");const response = require("../utils/response");
const CustomError = require('../utils/CustomError')class UserContoller {
  async register(req, res) {
    const data = await AdminServ.create(req.body);
    res.status(201).send(response("User account created", data));
  }
}
