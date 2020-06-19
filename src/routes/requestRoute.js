const router = require("express").Router();
const authenticate = require("../middlewares/authenticatorMiddleware");
const RequestCtrl = require("./../controllers/RequestController");
const AdminRequestCtrl = require("./../controllers/admin/RequestController");

module.exports = () => {
  router.get("/:requestId", authenticate, RequestCtrl.findById);
  router.post("/", authenticate, RequestCtrl.create);
  router.put("/:requestId", authenticate, RequestCtrl.update);
  router.delete("/:requestId", authenticate, RequestCtrl.delete);

  router.get("/", authenticate, RequestCtrl.getRequests);

  //ADMIN routes. adminMiddleware yet to be added
  router.get("/", authenticate, AdminRequestCtrl.getFundedRequests);

  return router;
};
