// Requests with 200% and above recommendation count should be listed as trending.(A user needs at least 10 recommendation)

// A fundee can have multiple recommendations. In the event that they get 10 and above recommendations, their request is considered as trending and should be kept in an array
// You are just supposed to filter through the list of recommendation and return userID's with above 10 recommendations.
// Search the id in the user collection and return the request for the users

const Recommend = require('../models/Recommendation');
const User = require ('../models/User');
const Request = require('../models/Request');
const CustomError = require("../utils/CustomError");


class TrendService {

    async trend () {

        const query = {VerificationTag : true};
        const trenders = Recommend.find(query).countDocuments((res) => {
                if(res > 10){
                    return res;
                }
        });

        const user = User.findById(trenders);

        return Request.find(user);

    };
}

module.exports = new TrendService();