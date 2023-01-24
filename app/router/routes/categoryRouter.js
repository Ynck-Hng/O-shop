const express = require("express");
const router = express.Router();
const categoryController = require("./../../controllers/categoryController");

//Currently on /category

router.get("/:categoryName", categoryController.categoryFilter);

module.exports = router;