const jwt = require('jsonwebtoken');
const response = require('../utils/response');
const User = require('../models/User');

const jwtSecret = process.env.JWT_SECRET;

class RoleAuth {  

async rolecheck (req, res, next)  {

    // const auth = (req, res, next) => {
    // Find JWT in Headers

    const token = req.header("Authorization").replace("Bearer", "").trim();

    if(!token){

        return res.status(401).send(response("Authorization Required"));
        
    }else {

        const decoded = jwt.verify(token, jwtSecret);

        const user = await User.findOne({_id: decoded.id,});
        

        if(!user){

            return res.staus(401).send(response("Access Denied"));

        } else if(user.role !== "admin") {

            return res.status(401).send(response("Access Denied"));

        } 
        
        next();
        
    }
  };
}

module.exports = new RoleAuth();


