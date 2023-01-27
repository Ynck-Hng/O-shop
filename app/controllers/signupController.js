const {errorCatcher} = require("./../middlewares/errorHandler/errorHandler");
const {User} = require("./../models");
const emailValidator = require("email-validator");
const bcrypt = require("bcrypt");
const signupController = {
    signupPage: (req,res)=>{
        let errorSignup = [];
        res.locals.meta.title = "O'Shop - Inscription";
        res.render("signup", {errorSignup});
    },

    signupSuccess: errorCatcher(async(req,res)=>{
        const userInfo = req.body;
        let errorSignup = [];

        if(!userInfo.firstname__submit){
            errorSignup.push({message: "Le prénom est obligatoire"})
        }
        if(!userInfo.lastname__submit){
            errorSignup.push({message: "Le nom est obligatoire"})
        }
        const checkEmail = emailValidator.validate(userInfo.email__submit)
        if(!checkEmail){
            errorSignup.push({message: "L'email est invalide"})
        }
        if(!userInfo.password__submit){
            errorSignup.push({message: "Le mot de passe est obligatoire"})
        }
        if(!userInfo.passwordConfirm__submit){
            errorSignup.push({message: "Le mot de passe de confirmation est incorrect"})
        }

        const findUser = await User.findOne({
            where:{
                email: userInfo.email__submit.toLowerCase(),
            }
        })

        if(findUser){
            errorSignup.push({message: "Email déjà utilisé"});
        }

        const hashPassword = bcrypt.hashSync(userInfo.passwordConfirm__submit, 10);
        const isPasswordIdentical = bcrypt.compare(userInfo.password__submit, hashPassword);
        if(!isPasswordIdentical){
            errorSignup.push({message: "Le mot de passe de confirmation n'est pas identique au mot de passe saisi"});
        }

        if(errorSignup.length > 0){
            return res.status(400).render("signup", {errorSignup});
        } else {
            
        const user = {
            firstname: `${userInfo.firstname__submit.charAt(0).toUpperCase() + userInfo.firstname__submit.slice(1).toLowerCase()}`,
            lastname: `${userInfo.lastname__submit.charAt(0).toUpperCase() + userInfo.lastname__submit.slice(1).toLowerCase()}`,
            email: userInfo.email__submit.toLowerCase(),
            password: hashPassword,
        }

        const createUser = await User.create(user);

        res.redirect("/login");
        }

    })
}

module.exports = signupController;