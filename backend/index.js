const express = require("express");
const cors = require("cors");
const connectDB = require("./config/mongoConnect");

const PORT = process.env.PORT || 4000;
const app = express();
connectDB();

app.use(cors());

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

// Export the Express AP
module.exports = app;
