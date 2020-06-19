const response = require("../utils/response");
const RecommendationServ = require("../services/RecommendationService");

class RecommendationController {
  async delete(req, res) {
    try {
      const recommendation = await RecommendationServ.delete(
        req.params.recommendationId
      );
      if (!request) {
        return res
          .status(404)
          .send(
            response(
              `Recommendation not found with Id: ${req.params.recommendationId}`,
              recommendation
            )
          );
      }
      res
        .status(200)
        .send(response("Recommendation deleted successfully", recommendation));
    } catch (error) {
      res.send(response(recommendation));
    }
  }

  async getUserRecommendations(req, res) {
    const recommendations = await RecommendationServ.getUserRecommendations(req.params.user_id);
    return res.status(200).json(
        {
            message: 'User recommendations', 
            data: recommendations, 
            success: true
        });
  }
}

module.exports = new RecommendationController();
