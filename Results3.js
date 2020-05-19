const express = require("express");
const results3 = express.Router();
const cors = require("cors");

const Result3 = require("./schema/Result3");
results3.use(cors());

results3.post("/rez3", (req, res) => {
  const rezData = {
    result: req.body.result,
    email: req.body.email,
    full_name: req.body.full_name,
  };
  Result3.create(rezData)
    .then((result) => {
      res.json({ status: result.result + "Time Registered" });
    })
    .catch((err) => {
      res.send("error: hehe " + err);
    });
});
results3.get("/", function (req, res) {
  Result3.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

module.exports = results3;
//module.exports = results;
