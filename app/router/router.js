const express = require("express");
const router = express.Router();
const homeRouter = require("./routes/homeRoute");
const cartRouter = require("./routes/cartRoute");
const itemRouter = require("./routes/itemRoute");

router.use("/", homeRouter);
router.use("/cart", cartRouter);
router.use("/item", itemRouter);

module.exports = router;