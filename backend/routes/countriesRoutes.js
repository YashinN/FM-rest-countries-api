const router = require("express").Router();

const { getAllCountries } = require("../controllers/countriesController");

router.get("/api/countries", getAllCountries);

module.exports = router;
