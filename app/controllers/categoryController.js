const sequelize = require("./../models/database/sequelize");
const { errorCatcher } = require("../middlewares/errorHandler/errorHandler");
const {Review, Figurine} = require("./../models");
const categoryController = {

    categoryFilter: errorCatcher(async (req,res)=>{
        const categoryName = req.params.categoryName;
        const result = await Review.findAll({
            attributes: [[sequelize.fn('AVG', sequelize.col("note")), "note"]],
            group: ["figurine.id"],
            order: [['note', 'DESC']],
            include:{
                association: "figurine",
                where:{
                    category: categoryName,
                }
            }
        });
        const result2 = await Figurine.findAll({
            where:{
                category: categoryName,
            }
        });
        let idContainer = [];
        for(let figurine of result2){
            idContainer.push(figurine.id);
        }
        for(let i = 1; i<=result2.length; i++){
            if(!result.find(figurine => figurine.figurine.id === idContainer[i-1])){
                let figurine = result2.find(figurine => figurine.id === idContainer[i-1]);
                result.push({note: 0, figurine});
            }
        }
        const categories = [];
        const categoriesCountTotal = [];
        for(let element of result){
            categories.push(element.figurine.category);
        }
        const uniqueCategories = new Set(categories);
        for(let category of uniqueCategories){
            let countedCategories = [];
            if(!countedCategories.find(element => element === category)){
                let {count} = await Figurine.findAndCountAll({
                    where:{
                        category: `${category}`
                    }
                })
                categoriesCountTotal.push({name: `${category}`, count});
            }
        }
        res.locals.meta.title = `O'Shop - ${categoryName}`;
        res.render("home", {figurines: result, categories: categoriesCountTotal});
    }),

}

module.exports = categoryController;