const router = require("express").Router();
const RequestCtrl = require("./../controllers/RequestController");
const AdminRequestCtrl = require("./../controllers/admin/RequestController");


module.exports = () => {
  router.get("/:requestId", RequestCtrl.findById);
  router.post("/", RequestCtrl.create);

  router.put("/:requestId", RequestCtrl.update);
  router.delete("/:requestId", RequestCtrl.delete);

  router.get('/', RequestCtrl.getRequests);

<<<<<<< HEAD
  router.get('/:requestId', RequestCtrl.getRequest);

  router.delete("/:deleteId", RequestCtrl.delRequest);
=======
  //ADMIN routes. adminMiddleware yet to be added
  router.get('/', AdminRequestCtrl.getFundedRequests);
>>>>>>> 23dea110bb98bfc190c632da35dc8f6bed668ad7

  return router;
};
