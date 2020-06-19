const router = require("express").Router();

const userRoute = require("./userRoute");
const requestRoute = require("./requestRoute");
const recommendationRoute = require("./recommendationRoute");
const paymentRoute = require("./paymentRoute");

const TrendCtrl = require('../controllers/TrendController');

module.exports = () => {
  router.get("/test", (req, res) => res.send("Yeah it works!"));

  router.use("/users", userRoute());
  router.use("/request", requestRoute());
  router.use("/vouch", recommendationRoute());
  router.use("/payment", paymentRoute);

<<<<<<< HEAD
     router.use("/trend", TrendCtrl.getTrends);




     return router;
};
=======
  return router;
};
>>>>>>> 630feb01b99d796aa2bbe78ad7db29721e4a1575
