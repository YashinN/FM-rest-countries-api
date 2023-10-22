const router = require("express").Router();

const {
  getAllCountries,
  getCountry,
} = require("../controllers/countriesController");

router.get("/countries", getAllCountries);

router.get("/countries/:name", getCountry);

module.exports = router;
