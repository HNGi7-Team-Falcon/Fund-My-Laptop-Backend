const User = require('../models/User');
const Request = require('../models/Request');
const Recommend = require('../models/Recommendation');
const { getTrends } = require('../controllers/TrendController');

class Trends {

// A trending request is one that has more than 10 recommendations
// request to recommendation  => one-to-many

// Person.find().populate('teamId').exec(function(err, people) {
//     ...
//   });
//   The people array will look something like this:
  
//   [ { user: 'John Doe',
//       Recommend: { name: 'Smitt', _id: ..., __v: 0 },
//       _id: ...,
//       __v: 0 },
//    
//   To get the results you want, it's simple a matter of running a map on it:
  
//   var results = people.map(function(person) {
//     return { name : person.name, Team : person.teamId.name };
//   }));

    async getTrends(data){



    }
}