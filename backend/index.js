const express = require("express");
require("dotenv").config();

const cors = require("cors");
const connectDB = require("./config/mongoConnect");

const countryRoutes = require("./routes/countryRoutes");

const PORT = process.env.PORT || 4000;
const app = express();
connectDB();

app.use(cors());
app.use("/api", countryRoutes);

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

// Export the Express AP
module.exports = app;
