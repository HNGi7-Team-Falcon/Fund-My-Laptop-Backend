const router = require("express").Router();
const RequestCtrl = require("./../controllers/RequestController");

module.exports = () => {
  router.post("/", RequestCtrl.create);
  router.put("/:requestId", RequestCtrl.update);
  router.delete("/:requestId", RequestCtrl.delete);

  return router;
};
