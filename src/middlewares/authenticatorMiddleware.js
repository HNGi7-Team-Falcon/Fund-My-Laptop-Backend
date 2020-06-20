const jwt = require("jsonwebtoken");
const CustomError = require("../utils/CustomError")

const jwtSecret = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
  
    const token = req.header("Authorization").replace("Bearer", "").trim();

    const decoded = jwt.verify(token, jwtSecret);

    if(decoded.name = 'TokenExpiredError'){
      throw new CustomError("jwt expired");
    }
    next()
};

module.exports = auth;
