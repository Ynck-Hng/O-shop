const express = require("express");
const router = express.Router();
const homeRouter = require("./routes/homeRoute");
const cartRouter = require("./routes/cartRoute");
const itemRouter = require("./routes/itemRoute");
const loginRouter = require("./routes/loginRoute");
const signinRouter = require("./routes/signinRoute");

router.use("/", homeRouter);
router.use("/cart", cartRouter);
router.use("/item", itemRouter);
router.use("/login", loginRouter);
router.use("/signin", signinRouter);

module.exports = router;