const express = require("express");
const router = express.Router();
const logoutController = require("./../../controllers/logoutController");

// Currently on route /logout

router.get("/", logoutController.logout);

module.exports = router;