const router = require("express").Router();
const RequestCtrl = require("./../controllers/RequestController");

module.exports = () => {
  router.post("/", RequestCtrl.create);
  router.put("/:requestId", RequestCtrl.update);

  return router;
};
