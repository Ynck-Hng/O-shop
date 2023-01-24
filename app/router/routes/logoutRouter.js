const express = require("express");
const router = express.Router();
const logoutController = require("./../../controllers/logoutController");
const {userOnline} = require("./../../middlewares/checkUser/userOnline");

// Currently on route /logout

router.get("/", userOnline, logoutController.logout);

module.exports = router;