const router = require("express").Router();

const userRoute = require("./userRoute");
const requestRoute = require("./requestRoute");
const recommentdationRoute = require("./recommendationRoute");
const paymentRoute = require("./paymentRoute");
const trendRoute = require('./trendRoute');
const adminRequestRoute = require("./admin/requestRoute");

module.exports = () => {
  router.get("/test", (req, res) => res.send("Yeah it works!"));

  router.use("/users", userRoute());
  router.use("/request", requestRoute());
  router.use("/vouch", recommentdationRoute());
  router.use("/payment", paymentRoute);
  router.use("/trend", trendRoute);
  router.use("/admin/request", adminRequestRoute());




  return router;
};
