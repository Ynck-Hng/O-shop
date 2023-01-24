const logoutController = {
    logout: (req,res)=>{
        delete req.session.user;

        res.redirect("/");
    }
}

module.exports = logoutController;