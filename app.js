import http from "http";
import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";

import db from "./db/mongoose";
import routes from "./server/routes";
import config from "./server/config/appConfig";

const { port, development } = config;
const hostname = development.host;

const app = express();
const server = http.createServer(app);
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(function(req,res,next){
//      res.header("Access-Control-Allow-Origin","*");
//      res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authorization");
//      next();
// });
routes(app);

app.get("*", (req, res) =>
  res.status(200).send({ message: "Welcome to yoyo" })
);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
db.then(
  () => {
    console.log("MongoDB Ready to Use");
  },
  err => {
    console.log("handle intial connection error");
  }
);
