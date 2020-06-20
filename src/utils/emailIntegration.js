const request = require('request')
module.exports = new UserContoller();
const response = require("./../utils/response");
const CustomError = require("./../utils/CustomError");

  module.exports.setupMailChim = (req, email) => {
      
      if(!req.body.email){
       throw new CustomError("Please input an email", 404);

      }else{
        const mcData = {members:[
            {
                email,
                status:'pending'
            }
        ]}

     const  mcDataPost = JSON.stringify(email)
     const  options = {
         url:'',
         methods:'POST',
         headers:{
             Authorization:'mailchimp-api-key'
         },
         body:mcDataPost
     }


    // })
      }
  
  };