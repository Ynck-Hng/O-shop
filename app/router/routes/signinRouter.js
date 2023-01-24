const express =require("express");
const router = express.Router();
const signinController = require("./../../controllers/signinController");

// Currently on /signin

router.route("/")
    .get(signinController.signinPage)
    .post(signinController.signinSuccess);

module.exports = router;