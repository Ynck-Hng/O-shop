const express = require("express");
const router = express.Router();
const homeRouter = require("./routes/homeRoute");

router.use("/", homeRouter);

module.exports = router;