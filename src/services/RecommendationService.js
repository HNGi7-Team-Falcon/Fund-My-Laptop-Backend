const Recommendation = require("../models/Recommendation");

class RecommendationService {
  async delete(id) {
    return Recommendation.findByIdAndRemove(id);
  }
}

module.exports = new RecommendationService();
