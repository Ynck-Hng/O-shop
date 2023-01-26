const sequelize = require("./../models/database/sequelize");
const {errorCatcher} = require("./../middlewares/errorHandler/errorHandler");
const {Review, Figurine} = require("./../models");

const itemController = {

    itemPage: errorCatcher(async (req,res)=>{
        const figurineId = Number(req.params.figurineId);
        let reviewAverage;
        reviewAverage = await Review.findAll({
            attributes: [[sequelize.fn("AVG", sequelize.col("note")), "note"]],
            where:{
                figurine_id: figurineId
            },
            group: ["figurine_id"],
        })
        const figurine = await Figurine.findByPk(figurineId)
        
        const reviews = await Review.findAll({
            include:"user",
            where:{
                figurine_id: figurineId,
            },
            order: [["note", "DESC"]]
        })
        res.locals.meta.title = `O'Shop - ${figurine.name}`;
        res.render("item", {reviews, figurine, rating: reviewAverage});
    }),

    addReviewToItem: errorCatcher(async(req,res)=>{
        if(!res.locals.session.user){
            return res.status(403).render("403");
        }
        const {review__title, review__figurineId, review__rating, review__content} = req.body;
        const findFigurine = await Figurine.findByPk(review__figurineId);
        if(!findFigurine){
            return res.status(404).render("404");
        }
        const review = {
            user_id: res.locals.session.user.id,
            note: review__rating,
            title: `${review__title.charAt(0).toUpperCase() + review__title.slice(1).toLowerCase()}`,
            message: `${review__content.charAt(0).toUpperCase() + review__title.slice(1).toLowerCase()}`,
            figurine_id: review__figurineId
        }

        const result = await Review.create(review);
    
        res.redirect(req.get("referrer"));

    }),

    deleteReview: errorCatcher(async(req,res)=>{
        const reviewId = req.params.reviewId;

        if(isNaN(reviewId)){
            return res.status(404).render("404");
        }

        const findReview = await Review.findByPk(reviewId);

        if(!findReview){
            return res.status(404).render("404");
        }

        await findReview.destroy();

        res.redirect(req.get("referrer"));
    }),
}

module.exports = itemController;