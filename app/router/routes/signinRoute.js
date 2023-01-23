const express =require("express");
const router = express.Router();
const signinController = require("./../../controllers/signinController");

// Currently on /signin

router.get("/", signinController.signinPage);

module.exports = router;