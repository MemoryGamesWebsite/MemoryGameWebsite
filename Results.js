const express = require("express");
const results = express.Router();
const cors = require("cors");

const Result = require("./schema/Result");
results.use(cors());

results.post("/rez", (req, res) => {
  const rezData = {
    result: req.body.result,
    email: req.body.email,
    full_name: req.body.full_name,
  };
  Result.create(rezData)
    .then((result) => {
      res.json({ status: result.result + "Time Registered" });
    })
    .catch((err) => {
      res.send("error: hehe " + err);
    });
});
results.get("/", function (req, res) {
  Result.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

module.exports = results;
//module.exports = results;
