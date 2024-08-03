const mongoose = require("mongoose");

let modelData = new mongoose.Schema({
  email: String,
  date: String,
  amount: Number,
  category: String,

  password: String,
});

let userData = mongoose.model("Users", modelData);

module.exports = userData;
