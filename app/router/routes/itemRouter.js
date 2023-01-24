const express = require("express");
const router = express.Router();
const itemController = require("./../../controllers/itemController");

// Currently on route /item

router.get("/:figurineId", itemController.itemPage);

module.exports = router;