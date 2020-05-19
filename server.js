var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
const mongoose = require("mongoose");
var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const mongoURI = "mongodb://localhost:27017/UserInfo";

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

var Users = require("./Users");
var Results = require("./Results");
var Results2 = require("./Results2");
var Results3 = require("./Results3");
app.use("/users", Users);
app.use("/results", Results);
app.use("/results2", Results2);
app.use("/results3", Results3);
app.listen(port, function () {
  console.log("Server is running on port: " + port);
});
