const router = require("express").Router();

const { getAllCountries } = require("../controllers/countriesController");

router.get("/countries", getAllCountries);

module.exports = router;
