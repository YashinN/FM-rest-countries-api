const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://yashinnaran:G5COrwgQnYHinlaP@countiesdb.in16qug.mongodb.net/countriesDB?retryWrites=true&w=majority"
    );
    console.log("Mongo DB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const app = express();
const PORT = 4000;
connectDB();

app.use(cors());
app.get("/api", (req, res) => {
  res.json("Helooo");
});

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

// Export the Express AP
module.exports = app;
