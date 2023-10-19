const express = require("express");

const PORT = 4000;

const app = express();

router.get("/", (req, res) => {
  res.send("Hey this is my API runndddding 🥳");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;
