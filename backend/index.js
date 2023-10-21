const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 4000;

app.use(cors());

app.get("/api", (req, res) => {
  res.json("Helooo");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongo DB connected");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

// Export the Express AP
module.exports = app;
