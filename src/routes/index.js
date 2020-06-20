const router = require("express").Router();

const userRoute = require("./userRoute");
const requestRoute = require("./requestRoute");
const recommentdationRoute = require("./recommendationRoute");
const paymentRoute = require("./paymentRoute");
<<<<<<< HEAD
const trendRoute = require('./trendRoute');
=======
>>>>>>> 4ef1f840fc7edf302b5fe7b7009ede4437e47803
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
