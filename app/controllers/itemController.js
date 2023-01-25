const sequelize = require("./../models/database/sequelize");
const {errorCatcher} = require("./../middlewares/errorHandler/errorHandler");
const {Review, Figurine} = require("./../models");
const itemController = {

    itemPage: errorCatcher(async (req,res)=>{
        const figurineId = Number(req.params.figurineId);
        const figurineInfo = await Review.findAll({
            attributes: [[sequelize.fn("AVG", sequelize.col("note")), "note"]],
            group: ["figurine.id"],
            where:{
                figurine_id: figurineId
            },
            include: "figurine"
        })

        const reviews = await Review.findAll({
            where:{
                figurine_id: figurineId,
            }
        })
        res.locals.meta.title = `O'Shop - ${figurineInfo[0].figurine.name}`;
        res.render("item", {reviews, figurine: figurineInfo[0].figurine, rating: figurineInfo[0].note});
    }),

    addReviewToItem: errorCatcher(async(req,res)=>{
        
        if(!res.locals.session.user){
            return res.status(403).render("403");
        }

        const {review__title, review__figurineId, review__rating, review__content} = req.body;

        const errorReview = [];
        console.log(typeof review__figurineId);
     
        const findFigurine = await Figurine.findByPk(review__figurineId);
        console.log("JE PAAASEE");
        if(!findFigurine){
            return res.status(404).render("404");
        }

        if(!review__title || review__title.length < 2){
            errorReview.push({message: "Votre avis ne peut pas être vide ou doit contenir au moins 3 lettres."})
        }

        if(!review__content || review__content.length < 3){
            errorReview.push({message: "Votre description ne peut pas être vide ou doit contenir au moins 4 lettres."})
        }

        const review = {
            author: res.locals.session.user.firstname,
            note: Number(review__rating),
            title: review__title,
            message: review__content,
            figurine_id: Number(review__figurineId)
        }

        const result = await Review.create(review);

        res.redirect("/");

    })
}

module.exports = itemController;