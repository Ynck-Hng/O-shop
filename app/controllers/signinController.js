const {errorCatcher} = require("./../middlewares/errorHandler/errorHandler");
const {User} = require("./../models");
const signinController = {
    signinPage: (req,res)=>{
        let errorSignin = [];
        res.render("signin");
    },

    signinSuccess: errorCatcher(async(req,res)=>{
        
    })
}

module.exports = signinController;