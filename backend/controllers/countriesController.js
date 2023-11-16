const Country = require("../models/countriesModel");

const properties = {
  name: 1,
  flags: 1,
  population: 1,
  region: 1,
  capital: 1,
  topLevelDomain: 1,
  borders: 1,
  languages: 1,
  nativeName: 1,
  subregion: 1,
  currencies: 1,
  alpha3Code: 1,
};

const getAllCountries = async (req, res) => {
  try {
    const countries = await Country.find({}, { ...properties });

    res.json(countries);
  } catch (err) {
    console.log(err);
  }
};

const getCountry = async (req, res) => {
  try {
    const { name: countryName } = req.params;
    const country = await Country.find(
      { name: countryName },
      { ...properties }
    );
    res.json(country);
  } catch (err) {
    console.log("error");
  }
};

module.exports = { getAllCountries, getCountry };
