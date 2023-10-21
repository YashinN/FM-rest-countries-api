const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/connectDB");

const countriesRoutes = require("./routes/countriesRoutes");

const app = express();
const PORT = 4000;

app.use(cors());

app.use("/api", countriesRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

// Export the Express AP
module.exports = app;
