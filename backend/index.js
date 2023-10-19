const express = require("express");

const PORT = process.eventNames.PORT || 4000;

const app = express();

router.get("/", (req, res) => {
  res.send("Hey this is my API runndddding 🥳");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
