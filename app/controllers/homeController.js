const sequelize = require("../models/database/sequelize");
const {errorCatcher} = require("./../middlewares/errorHandler/errorHandler");
const {Figurine, Review} = require("./../models");

const homeController = {

    homePage: errorCatcher(async (req,res) => {

        const result = await Review.findAll({
            attributes: [[sequelize.fn('AVG', sequelize.col("note")), "note"]],
            group: ["figurine.id"],
            order: [['note', 'DESC']],
            include:"figurine",
        });
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
        res.render("home", {figurines: result, categories: categoriesCountTotal});
    }),

    

}

module.exports = homeController;