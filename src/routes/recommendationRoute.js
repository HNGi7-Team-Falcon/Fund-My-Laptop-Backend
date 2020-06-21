const router = require("express").Router();
const RecommendationCtrl = require("./../controllers/RecommendationController");

module.exports = () => {
  router.delete("/:recommendationId", RecommendationCtrl.delete);
  router.get("/:user_id/all", RecommendationCtrl.getUserRecommendations);

  return router;
};
