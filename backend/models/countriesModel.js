const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const countrySchema = new Schema({});

module.exports = mongoose.model("countries", countrySchema);
