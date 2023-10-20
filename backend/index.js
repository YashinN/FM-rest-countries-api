// index.js
const express = require("express");
const cors = require("cors");
const testData = require("./data.json");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

const testRoutes = require("./routes/testRoutes");

app.get("/api/countries", (req, res) => {
  res.send(testData);
});

app.use("/test", testRoutes);

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

// Export the Express AP
module.exports = app;
