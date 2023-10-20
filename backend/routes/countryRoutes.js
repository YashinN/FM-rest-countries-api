const express = require("express");

const { getAllCountries } = require("../controllers/countriesController");

const router = express.Router();

router.get("/countries", getAllCountries);
