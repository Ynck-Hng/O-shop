const express = require("express");
const router = express.Router();
const homeRouter = require("./routes/homeRouter");
const cartRouter = require("./routes/cartRouter");
const itemRouter = require("./routes/itemRouter");
const loginRouter = require("./routes/loginRouter");
const signinRouter = require("./routes/signinRouter");
const categoryRouter = require("./routes/categoryRouter");
const logoutRouter = require("./routes/logoutRouter");

router.use("/", homeRouter);
router.use("/cart", cartRouter);
router.use("/item", itemRouter);
router.use("/login", loginRouter);
router.use("/signin", signinRouter);
router.use("/category", categoryRouter);
router.use("/logout", logoutRouter);

module.exports = router;