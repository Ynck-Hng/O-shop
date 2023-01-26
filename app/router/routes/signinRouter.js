const express =require("express");
const router = express.Router();
const signinController = require("./../../controllers/signinController");
const {userForbidden} = require("./../../middlewares/userForbidden/userForbidden");
// Currently on /signin

router.route("/")
    .get(userForbidden, signinController.signinPage)
    .post(signinController.signinSuccess);

module.exports = router;