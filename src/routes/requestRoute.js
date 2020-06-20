const router = require("express").Router();
const authenticate = require("../middlewares/authenticatorMiddleware");
const RequestCtrl = require("./../controllers/RequestController");
<<<<<<< HEAD

=======
// const AdminRequestCtrl = require("./../controllers/admin/RequestController");
>>>>>>> 458e08d0fc089ff21d56d066926670d2760d885a

module.exports = () => {
  router.get("/:requestId", authenticate, RequestCtrl.findById);
  router.post("/", authenticate, RequestCtrl.create);
  router.put("/:requestId", authenticate, RequestCtrl.update);
  router.delete("/:requestId", authenticate, RequestCtrl.delete);

  router.get("/", authenticate, RequestCtrl.getRequests);

<<<<<<< HEAD
=======
  //ADMIN routes. adminMiddleware yet to be added
  // router.get("/admin/funded-requests", authenticate, AdminRequestCtrl.getFundedRequests);
  // router.get("/admin/requests", authenticate, AdminRequestCtrl.getRequests);

>>>>>>> 458e08d0fc089ff21d56d066926670d2760d885a
  return router;
};
