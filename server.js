require("express-async-errors");
const express = require("express");
const path = require("path");
const passport = require('passport');
const { Strategy } = require('passport-twitter');
const { TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET, SESSION_SECRET } =  process.env;
const app = express();

const port = 2020 || process.env.PORT;
const preMiddlewares = require("./src/middlewares/preMiddlewares");
const errorMiddlewares = require("./src/middlewares/errorMiddlewares");
const routes = require("./src/routes");

preMiddlewares(app);
	
passport.serializeUser((user, cb) => {  
	cb(null, user);
});
	
passport.deserializeUser((obj, cb) => {  
	cb(null, obj);
});

app.use(require('express-session')({ 
	secret: SESSION_SECRET, resave: true, saveUninitialized: true }));

app.use(passport.initialize());

app.use(passport.session());


// Api routes
app.use("/api", routes());

// Web routes
app.use("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname + "/public/index.html"));
});

errorMiddlewares(app);

app.on("error", (error) => {
  console.log(`::> an error occiurred in our server: \n ${error}`);
});

module.exports = app;
