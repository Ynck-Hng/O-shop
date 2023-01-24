const express = require("express");
const router = express.Router();
const loginController =require("./../../controllers/loginController");

// Currently on route /login

router.get("/", loginController.loginPage);
router.post("/success", loginController.loginSuccess);

module.exports = router;