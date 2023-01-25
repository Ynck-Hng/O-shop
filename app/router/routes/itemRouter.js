const express = require("express");
const router = express.Router();
const itemController = require("./../../controllers/itemController");

// Currently on route /item

router.get("/:figurineId", itemController.itemPage);
router.post("/:figurineId/review/add", itemController.addReviewToItem);
router.get("/:figurineId/review/delete/:reviewId", itemController.deleteReview);
module.exports = router;
