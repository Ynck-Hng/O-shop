const {errorCatcher} = require("./../middlewares/errorHandler/errorHandler");
const {Review} = require("./../models");
const itemController = {

    itemPage: errorCatcher(async (req,res)=>{
        const figurineId = Number(req.params.figurineId);
        const result = await Review.findAll({
            where:{
                figurine_id: figurineId
            },
            include: "figurine"
        })

        console.log(JSON.stringify(result));

        res.render("item");
    }),

}

module.exports = itemController;