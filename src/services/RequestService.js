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
    };
  }

  async update(data) {
    return data;
  }

  async delete(req, res) {
    Request.findByIdAndRemove(req.params.userId)
      .then((request) => {
        if (!request) {
          return res.status(404).send({
            message: "User not found with id " + req.params.userId,
          });
        }
        res.status(200).send({ message: "User deleted successfully!" });
      })
      .catch((err) => {
        if (err.kind === "ObjectId" || err.name === "NotFound") {
          return res.status(404).send({
            message: "User not found with id " + req.params.userId,
          });
        }
        return res.status(404).send({
          message: "Could not delete user with id " + req.params.userId,
        });
      });
  }
}

module.exports = new RequestService();
