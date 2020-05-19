const express = require("express");
const results2 = express.Router();
const cors = require("cors");

const Result2 = require("./schema/Result2");
results2.use(cors());

results2.post("/rez2", (req, res) => {
  const rezData = {
    level: req.body.level,
    email: req.body.email,
    full_name: req.body.full_name,
  };
  Result2.create(rezData)
    .then((result2) => {
      res.json({ status: result2.result2 + "Time Registered" });
    })
    .catch((err) => {
      res.send("error: hehe " + err);
    });
});
results2.get("/", function (req, res) {
  Result2.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

module.exports = results2;
//module.exports = results;
