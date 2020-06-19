const router = require("express").Router();
const authenticate = require("../middlewares/authenticatorMiddleware");
const RequestCtrl = require("./../controllers/RequestController");
const AdminRequestCtrl = require("./../controllers/admin/RequestController");

module.exports = () => {
  router.get("/:requestId", authenticate, RequestCtrl.findById);
  router.post("/new", authenticate, RequestCtrl.create);
  router.put("/:requestId", authenticate, RequestCtrl.update);
  router.delete("/:requestId", authenticate, RequestCtrl.delete);

  router.get("/", authenticate, RequestCtrl.getRequests);

  //ADMIN routes. adminMiddleware yet to be added
  router.get("/completed", authenticate, AdminRequestCtrl.getCompletedRequests);
  router.get("/suspended", authenticate, AdminRequestCtrl.getSuspendedRequests);
  router.patch("/suspend", authenticate, AdminRequestCtrl.suspendRequest);
  router.get("/active/not_funded", authenticate, AdminRequestCtrl.getactiveButNotFundedRequests);

  return router;
};
