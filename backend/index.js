// index.js
const express = require("express");

const app = express();
const PORT = 4000;

const testRoutes = require("./routes/testRoutes");

// app.get("/", (req, res) => {
//   res.send("Hey this is my API running 🥳");
// });

// app.get("/about", (req, res) => {
//   res.send("This is my about route..... ");
// });

app.use("/test", testRoutes);

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

// Export the Express AP
module.exports = app;
