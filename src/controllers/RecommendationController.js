const response = require("../utils/response");
const CustomError = require("../utils/CustomError");
const RecommendationServ = require("../services/RecommendationService");

class RecommendationController {
  /**
   * @author Jezeh Priesten @TjeY
   */
  async delete(req, res) {
    const id = req.body.id;

    if (!id) {
      throw new CustomError("Incomplete data provided", 400);
    }

    const result = await RecommendationServ.delete(id);

    if (!result) {
      throw new CustomError(`Recommendation not found with ${id}`, 400);
    }

    res
      .status(204)
      .send(
        response("Recommendation deleted successfully", null, "Successful")
      );
  }

  async getUserRecommendations(req, res) {
    const recommendations = await RecommendationServ.getUserRecommendations(
      req.params.user_id
    );
    return res.status(200).json({
      message: "User recommendations",
      data: recommendations,
      success: true,
    });
  }
}

module.exports = new RecommendationController();
