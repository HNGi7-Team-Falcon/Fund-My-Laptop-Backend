const router = require("express").Router();
const RequestCtrl = require("./../controllers/RequestController");


module.exports = () => {
  router.post("/", RequestCtrl.create);

  router.put("/:requestId", RequestCtrl.update);

  router.get('/', RequestCtrl.getRequests);

  router.get('/:requestId', RequestCtrl.getRequest);

  router.delete("/:deleteId", RequestCtrl.delRequest);

  return router;
};
