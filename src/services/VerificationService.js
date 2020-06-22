const Verify = require("../models/verification");
const CustomError = require("../utils/CustomError");

class VerifyService {

  async create(data) {
    if (!data.videoUrl) throw new CustomError("Video Url is required")
    if (!data.photoId) throw new CustomError("Photo ID is required")

    if (!(await this.verifyBVN(data.bvn))) throw new CustomError("BVN verfication failed")

    const verify = new Verify(data);
    await verify.save();

    return null
  }

  async update(verifyId, data) {
    const verify = await Verify.findByIdAndUpdate(
      { _id: verifyId },
      data,
      { new: true, }
    );

    if (!verify) throw new CustomError("Verify dosen't exist", 404);

    return verify;
  }

  async verifyBVN(bvn) {
    let result = `https://rave-api-v2.herokuapp.com/v3/kyc/bvns/${bvn}`

    if (!result.success) return false

    return true
  }

}

module.exports = new VerifyService()