// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const jwtSecret = process.env.JWT_SECRET;

// module.exports = async function (req, res, next) {
//   //token provided by client
//   const tokenProvidedByUser =
//     req.header("x-authorization") || req.header("authorization");
//   //if token was sent
//   if (tokenProvidedByUser) {
//     try {
//       if (tokenProvidedByUser.startsWith("Bearer ")) {
//         // Remove Bearer from string
//         tokenProvidedByUser = tokenProvidedByUser.slice(
//           7,
//           tokenProvidedByUser.length
//         );
//       }
//       //decoding token
//       const decoded = jwt.verify(tokenProvidedByUser, jwtSecret);
//       if (decoded) {
//         /*
//          **valid token, giving client access to resource
//          */
//         req.body.token = tokenProvidedByUser;
//         next();
//       }
//     } catch (err) {
//       res.status(400).json({
//         status: "Error",
//         message: "Access denied. Login",
//       });
//     }
//   } else {
//     return res.status(400).json({
//       status: "Error",
//       message: "Access denied. No toekn provided",
//     });
//   }
// };


const jwt = require("jsonwebtoken");
const User = require("../models/User");
const response = require("../utils/response");
require('../utils/env');

const jwtSecret = process.env.JWT_SECRET;

module.exports = async function (req, res, next) {
  const user = new User(req.body);
  //token provided by client
  const tokenProvidedByUser =
    req.header("x-authorization") || req.header("authorization");
  //if token was sent
  if (tokenProvidedByUser) {
    try {
      if (tokenProvidedByUser.startsWith("Bearer ")) {
        // Remove Bearer from string
        tokenProvidedByUser = tokenProvidedByUser.slice(
          7,
          tokenProvidedByUser.length
        );
      }
      //decoding token
      const decoded = jwt.verify(tokenProvidedByUser, jwtSecret);
      if (decoded) {
        /*
         **valid token, giving client access to resource
         */
        req.token = tokenProvidedByUser;
        req.user = user;
        next();
      }
    } catch (err) {
      res.status(400).json({
        status: "Error",
        message: "Access denied. Login",
      });
    }
  } else {
    return res.status(400).json({
      status: "Error",
      message: "Access denied. No toekn provided",
    });
  }
  next();
}


module.exports = auth;
