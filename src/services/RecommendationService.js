const CustomError = require("./../utils/CustomError");
const Recommendation = require("../models/Recommendation");

class RecommendationService {
  async delete(id) {
    return Recommendation.findByIdAndRemove(id);
  }

  async getUserRecommendations(id) {
    const userRecommendations = await Recommendation.find({ requesterID: id })
    if (!userRecommendations.length) {
        throw new CustomError("No Recommendation was found for this user", 404);
    }
    return userRecommendations;
}

}

module.exports = new RecommendationService();
