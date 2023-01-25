const bcrypt = require("bcrypt");
const {errorCatcher} = require("./../middlewares/errorHandler/errorHandler");
const {User} = require("./../models");
const loginController = {

    loginPage: (req,res)=>{
        let errorLogin = [];
        res.locals.meta.title = "O'Shop - Connexion";
        res.render("login", {errorLogin});
    },

    loginSuccess: errorCatcher(async(req,res)=>{
        const userCredentials = req.body;
        let errorLogin = [];
        const findUser = await User.findOne({
            where:{
                email: userCredentials.email__login.toLowerCase(),
            },
            include: "roles"
        })
        if(!findUser){
            errorLogin.push({message: "L'email ou le mot de passe est invalide"});
            res.status(400).render("login", {errorLogin});
        }

        const passwordCheck = await bcrypt.compare(userCredentials.password__login, findUser.password);
        if(!passwordCheck){
            errorLogin.push({message: "L'email ou le mot de passe est invalide"});
            res.status(400).render("login", {errorLogin});
        }

        req.session.user = {
            id: findUser.id,
            firstname: findUser.firstname,
            lastname: findUser.lastname,
            email: findUser.email,
            roles: findUser.roles.name,
        }

        res.redirect("/");
        
    }),

}

module.exports = loginController;