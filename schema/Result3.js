const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const Result3Schema = new Schema({
  result: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  full_name: {
    type: String,
    required: true,
  },
});

module.exports = Result3 = mongoose.model("results3", Result3Schema);
