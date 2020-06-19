const router = require("express").Router();
const authenticate = require("../middlewares/authenticatorMiddleware");
const RequestCtrl = require("./../controllers/RequestController");
const AdminRequestCtrl = require("./../controllers/admin/RequestController");


module.exports = () => {
<<<<<<< HEAD
  router.get("/:requestId", RequestCtrl.findById);
  router.post("/", RequestCtrl.create);

  router.put("/:requestId", RequestCtrl.update);
  router.delete("/:requestId", RequestCtrl.delete);
=======
  router.get("/:requestId", authenticate, RequestCtrl.findById);
  router.post("/", authenticate, RequestCtrl.create);
  router.put("/:requestId", authenticate, RequestCtrl.update);
  router.delete("/:requestId", authenticate, RequestCtrl.delete);
>>>>>>> 630feb01b99d796aa2bbe78ad7db29721e4a1575

  router.get("/", authenticate, RequestCtrl.getRequests);

  //ADMIN routes. adminMiddleware yet to be added
  router.get("/admin/funded-requests", authenticate, AdminRequestCtrl.getFundedRequests);
  router.get("/admin/requests", authenticate, AdminRequestCtrl.getRequests);

  return router;
};
