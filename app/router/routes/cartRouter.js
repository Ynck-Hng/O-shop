const express = require("express");
const router = express.Router();
const cartController = require("./../../controllers/cartController");

/* Currently on route /cart */

router.get("/", cartController.cartPage);
router.get("/add/:figurineId", cartController.addToCart);
router.get("/remove/:figurineId", cartController.removeFromCart);

module.exports = router;