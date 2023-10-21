const Country = require("../models/countriesModel");

const getAllCountries = async (req, res) => {
  try {
    const countries = await Country.find({}).limit(20);
    res.json(countries);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAllCountries };
