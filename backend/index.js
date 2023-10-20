const express = require("express");

const cors = require("cors");

const PORT = process.env.PORT || 6000;
const app = express();
// connectDB();

app.use(cors());
app.get("/api", (req, res) => {
  res.json("Helooo");
});

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

// Export the Express AP
module.exports = app;
