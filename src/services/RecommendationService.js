const CustomError = require("./../utils/CustomError");
const Recommendation = require("../models/Recommendation");

class RecommendationService {
  async delete(id) {
    return Recommendation.findByIdAndRemove(id);
  }

  async getUserRecommendations(id) {
    //TODO check that the id passed is the id of a user
    // that actually exists 
    // update tests to reflect this change 
    const userRecommendations = await Recommendation.find({ requesterID: id })
    if (!userRecommendations.length) {
        throw new CustomError("No Recommendation was found for this user", 404);
    }
    return userRecommendations;
}

}

module.exports = new RecommendationService();
