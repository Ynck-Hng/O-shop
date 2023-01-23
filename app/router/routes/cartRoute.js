const express = require("express");
const router = express.Router();
const cartController = require("./../../controllers/cartController");

/* Currently on route / */

router.get("/", cartController.cartPage);

module.exports = router;