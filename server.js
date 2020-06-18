require("express-async-errors");
const express = require("express");
const path = require("path");
const app = express();

const preMiddlewares = require("./src/middlewares/preMiddlewares");
const errorMiddlewares = require("./src/middlewares/errorMiddlewares");
const routes = require("./src/routes");
const databaseConfig = require("./src/config/db");
const port = process.env.PORT;

preMiddlewares(app);

// Api routes
app.use("/api", routes());

// Web routes
app.use("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname + "/public/index.html"));
});

errorMiddlewares(app);

app.listen(port, () => {
  console.log(
    `::: server listening on port ${port}. Open via http://localhost:${port}/`
  );
  databaseConfig();
});

app.on("error", (error) => {
  console.log(`::> an error occiurred in our server: \n ${error}`);
});
