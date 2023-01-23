const sequelize = require("./../models/database/sequelize");
const {errorCatcher} = require("./../middlewares/errorHandler/errorHandler");
const {Review} = require("./../models");
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

        res.render("item", {reviews, figurine: figurineInfo[0].figurine, rating: figurineInfo[0].note});
    }),

}

module.exports = itemController;