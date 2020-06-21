const router = require("express").Router();

const TrendCtrl = require("../controllers/TrendController");

module.exports = () => {
     router.get("/", TrendCtrl.getTrends);
     return router;
};