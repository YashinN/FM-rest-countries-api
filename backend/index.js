const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");
const connectDB = require("./config/mongoConnect");

const countryRoutes = require("./routes/countryRoutes");

const PORT = process.env.PORT || 4000;
const app = express();
// connectDB();

app.use(cors());
app.use("/api", countryRoutes);

// app.listen(PORT, () => {
//   console.log(`API listening on PORT ${PORT} `);
// });

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Export the Express AP
module.exports = app;
