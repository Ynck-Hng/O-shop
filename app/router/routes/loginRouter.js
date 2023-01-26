const express = require("express");
const router = express.Router();
const loginController =require("./../../controllers/loginController");
const {userForbidden} = require("./../../middlewares/userForbidden/userForbidden");

// Currently on route /login

router.get("/", userForbidden, loginController.loginPage);
router.post("/success", loginController.loginSuccess);

module.exports = router;