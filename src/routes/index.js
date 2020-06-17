const router = require("express").Router();

module.exports = function() {
  router.get("/test", (req, res) => res.send("Yeah it works!")); 

  return router;
};
