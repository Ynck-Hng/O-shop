const express =require("express");
const router = express.Router();
const signupController = require("./../../controllers/signupController");
const {userForbidden} = require("./../../middlewares/userForbidden/userForbidden");

// Currently on /signup

router.route("/")
    .get(userForbidden, signupController.signupPage)
    .post(signupController.signupSuccess);

module.exports = router;