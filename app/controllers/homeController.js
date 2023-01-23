const {errorCatcher} = require("./../middlewares/errorHandler/errorHandler");
const {Figurine} = require("./../models");

const homeController = {

    homePage: async (req,res) => {
        res.render("home");
    },

    

}

module.exports = homeController;