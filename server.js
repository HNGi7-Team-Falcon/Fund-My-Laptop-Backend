require("express-async-errors");
const express = require("express");
const path = require("path");
const app = express();

const preMiddlewares = require("./src/middlewares/preMiddlewares");
const errorMiddlewares = require("./src/middlewares/errorMiddlewares");
const routes = require("./src/routes");

preMiddlewares(app);

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