const router = require("express").Router();
const authenticate = require("../../middlewares/authenticatorMiddleware");
const AdminRequestCtrl = require("./../../controllers/admin/RequestController");


module.exports = () => {

  router.get("/", authenticate, AdminRequestCtrl.getRequests);
  //boluakins task 49330
  router.get("/completed", authenticate, AdminRequestCtrl.getCompletedRequests);
  router.get("/suspended", authenticate, AdminRequestCtrl.getSuspendedRequests);
  router.patch("/suspend", authenticate, AdminRequestCtrl.suspendRequest);
  router.get("/active/not-funded", authenticate, AdminRequestCtrl.getactiveButNotFundedRequests);
  router.get("/active/funded", authenticate, AdminRequestCtrl.getActiveAndFundedRequests);
  return router;
};