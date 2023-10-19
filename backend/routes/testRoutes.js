const express = require("express");

const router = express.Router();

router.get("/now", (req, res) => {
  res.send("Hellow !!!");
});

module.exports = router;
