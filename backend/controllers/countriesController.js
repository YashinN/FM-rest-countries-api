const Countries = require("../model/countryModel");

const getAllCountries = async (req, res) => {
  const countries = await Countries.find({});
  res.status(200).json(countries);
};

module.exports = { getAllCountries };
