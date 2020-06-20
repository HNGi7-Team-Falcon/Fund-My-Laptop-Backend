const router = require("express").Router();

const userRoute = require("./userRoute");
const requestRoute = require("./requestRoute");
const recommentdationRoute = require("./recommendationRoute");
const paymentRoute = require("./paymentRoute");
<<<<<<< HEAD
const TrendCtrl = require('../controllers/TrendController');
const adminRequestRoute = require("./admin/requestRoute");
=======
>>>>>>> 458e08d0fc089ff21d56d066926670d2760d885a

module.exports = () => {
  router.get("/test", (req, res) => res.send("Yeah it works!"));

  router.use("/users", userRoute());
  router.use("/request", requestRoute());
  router.use("/vouch", recommentdationRoute());
  router.use("/payment", paymentRoute);
<<<<<<< HEAD
  router.use("/trend", TrendCtrl.getTrends);
  router.use("/admin", adminRequestRoute());



=======
>>>>>>> 458e08d0fc089ff21d56d066926670d2760d885a

  return router;
};
