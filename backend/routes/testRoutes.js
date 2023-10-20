const express = require("express");

const router = express.Router();

router.get("/now", (req, res) => {
  res.json("Hellow !!!");
});

module.exports = router;
