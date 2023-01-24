const express = require("express");
const router = express.Router();
const loginController =require("./../../controllers/loginController");

// Currently on route /login

router.get("/", loginController.loginPage);


module.exports = router;