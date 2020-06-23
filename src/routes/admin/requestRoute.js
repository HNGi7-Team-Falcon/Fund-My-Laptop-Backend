const router = require("express").Router();
const authenticate = require("../../middlewares/authenticatorMiddleware");
const AdminRequestCtrl = require("./../../controllers/admin/RequestController");


module.exports = () => {

  router.get("/", authenticate, AdminRequestCtrl.getRequests);

  //@boluakins story: 49330 - get all requests that have been funded, filter by period
  router.get("/completed", authenticate, AdminRequestCtrl.getCompletedRequests);

  //@boluakins story: 49299 get suspended requests, suspend request
  router.get("/suspended", authenticate, AdminRequestCtrl.getSuspendedRequests);
  router.patch("/suspend", authenticate, AdminRequestCtrl.suspendRequest);
  
  //boluakins story: 49334 - get active requests that have not been funded 
  router.get("/active/not-funded", authenticate, AdminRequestCtrl.getactiveButNotFundedRequests);

  router.get("/active/funded", authenticate, AdminRequestCtrl.getActiveAndFundedRequests);
  return router;
};