const router = require("express").Router();
const RequestCtrl = require("./../controllers/RequestController");

module.exports = () => {
  router.get("/:requestId", RequestCtrl.findById);
  router.post("/", RequestCtrl.create);
  router.put("/:requestId", RequestCtrl.update);
  router.delete("/:requestId", RequestCtrl.delete);

  router.get('/', RequestCtrl.getRequests);

  return router;
};
