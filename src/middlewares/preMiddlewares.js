const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

module.exports = (app) => {
  app.use(cors());
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static("/public"));
  app.use("/uploads", express.static("/uploads"));
  passport.use(new Strategy({ 
   consumerKey: TWITTER_CONSUMER_KEY,
   consumerSecret: TWITTER_CONSUMER_SECRET,
   callbackURL: 'https://www.fundmylaptop.com/'
},  
(accessToken, refreshToken, profile, cb) => {    
	return cb(null, profile);}));

  return app;
};
