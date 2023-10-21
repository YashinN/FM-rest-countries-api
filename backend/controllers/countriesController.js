const Country = require("../models/countriesModel");

const getAllCountries = async (req, res) => {
  try {
    const countries = await Country.find({});
    res.json("This is working!!!");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAllCountries };
