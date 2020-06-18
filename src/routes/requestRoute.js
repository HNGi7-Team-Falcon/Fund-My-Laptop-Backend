const router = require("express").Router();
const RequestCtrl = require("./../controllers/RequestController");
const AdminRequestCtrl = require("./../controllers/admin/RequestController");

module.exports = () => {
  router.get("/:requestId", RequestCtrl.findById);
  router.post("/", RequestCtrl.create);
  router.put("/:requestId", RequestCtrl.update);
  router.delete("/:requestId", RequestCtrl.delete);

  router.get('/', RequestCtrl.getRequests);

  //ADMIN routes. adminMiddleware yet to be added
  router.get('/', AdminRequestCtrl.getFundedRequests);

  return router;
};
