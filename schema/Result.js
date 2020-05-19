const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ResultSchema = new Schema({
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

module.exports = Result = mongoose.model("results", ResultSchema);
