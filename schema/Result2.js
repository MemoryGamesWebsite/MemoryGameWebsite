const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const Result2Schema = new Schema({
  level: {
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

module.exports = Result2 = mongoose.model("results2", Result2Schema);
