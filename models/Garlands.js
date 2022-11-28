const mongoose = require("mongoose");

const GarlandsSchema = new mongoose.Schema({
  title: {
    type: String,

    trim: true,
  },
  body: {
    type: String,
  },
});

module.exports = mongoose.model("Garlands", GarlandsSchema);
