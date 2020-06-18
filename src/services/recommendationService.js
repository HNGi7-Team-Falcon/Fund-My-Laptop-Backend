const Recommendation = require("./../models/Recommendation");

class RecommendationService {
  async delete(recommendationId) {
    return Recommendation.findByIdAndRemove(recommendationId);
  }
}

module.exports = new RecommendationService();

