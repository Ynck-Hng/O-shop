const express = require("express");
const router = express.Router();
const homeController = require("./../../controllers/homeController");

/* Currently on route /cart/ */

router.get("/", homeController.homePage)

module.exports = router;