const express = require("express");
const bodyParser = require("body-parser");

var app = express();

const routes = require("./routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method"
  );
  res.header("Access-Control-Allow-Headers", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/api", routes)

module.exports = app