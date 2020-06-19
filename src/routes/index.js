const router = require("express").Router();

const userRoute = require("./userRoute");
const requestRoute = require("./requestRoute");
const recommendationRoute = require("./recommendationRoute");
const paymentRoute = require("./paymentRoute");
const TrendCtrl = require('../controllers/TrendController');
const adminRequestRoute = require("./admin/requestRoute");

module.exports = () => {
  router.get("/test", (req, res) => res.send("Yeah it works!"));

  router.use("/users", userRoute());
  router.use("/request", requestRoute());
  router.use("/vouch", recommendationRoute());
  router.use("/payment", paymentRoute);
  router.use("/trend", TrendCtrl.getTrends);
  router.use("/admin", adminRequestRoute());




     return router;
};
