const express = require("express");
const router = express.Router();
const itemController = require("./../../controllers/itemController");
const {userOnline} = require("./../../middlewares/checkUser/userOnline");
// Currently on route /item

router.get("/:figurineId", itemController.itemPage);;
router.post("/:figurineId/review/add", userOnline, itemController.addReviewToItem);
router.get("/:figurineId/review/delete/:reviewId", userOnline, itemController.deleteReview);
module.exports = router;
