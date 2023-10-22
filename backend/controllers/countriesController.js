const Country = require("../models/countriesModel");

const getAllCountries = async (req, res) => {
  try {
    const countries = await Country.find();
    res.json(countries);
  } catch (err) {
    console.log(err);
  }
};

const getCountry = async (req, res) => {
  try {
    const { name: countryName } = req.params;
    const country = await Country.find({ name: countryName });
    res.json(country);
  } catch (err) {
    console.log("error");
  }
};

module.exports = { getAllCountries, getCountry };
