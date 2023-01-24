const {errorCatcher} = require("./../middlewares/errorHandler/errorHandler");
const {User} = require("./../models");
const emailValidator = require("email-validator");
const bcrypt = require("bcrypt");
const signinController = {
    signinPage: (req,res)=>{
        let errorSignin = [];
        res.locals.meta.title = "O'Shop - Inscription";
        res.render("signin", {errorSignin});
    },

    signinSuccess: errorCatcher(async(req,res)=>{
        const userInfo = req.body;
        let errorSignin = [];

        if(!userInfo.firstname__submit){
            errorSignin.push({message: "Le prénom est obligatoire"})
        }
        if(!userInfo.lastname__submit){
            errorSignin.push({message: "Le nom est obligatoire"})
        }

        const checkEmail = emailValidator.validate(userInfo.email__submit)
        if(!checkEmail){
            errorSignin.push({message: "L'email est invalide"})
        }
        if(!userInfo.password__submit){
            errorSignin.push({message: "Le mot de passe est obligatoire"})
        }
        if(!userInfo.passwordConfirm__submit){
            errorSignin.push({message: "Le mot de passe de confirmation est incorrect"})
        }

        const findUser = await User.findOne({
            where:{
                email: userInfo.email__submit,
            }
        })

        if(findUser){
            errorSignin.push({message: "Email déjà utilisé"});
        }

        const hashPassword = bcrypt.hashSync(userInfo.passwordConfirm__submit, 10);
        const isPasswordIdentical = bcrypt.compare(userInfo.password__submit, hashPassword);
        if(!isPasswordIdentical){
            errorSignin.push({message: "Le mot de passe de confirmation n'est pas identique au mot de passe saisi"});
        }

        if(errorSignin.length > 0){
            return res.status(400).render("signin", {errorSignin});
        } else {
            
            const user = {
                firstname: userInfo.firstname__submit,
                lastname: userInfo.lastname__submit,
                email: userInfo.email__submit,
                password: hashPassword,
            }

            const createUser = await User.create(user);

            res.redirect("/login");
        }

    })
}

module.exports = signinController;