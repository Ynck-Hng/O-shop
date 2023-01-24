exports.userOnline = (req,res,next)=>{
    if(req.session.user){
        next();
    } else {
        res.status(403).render("./error/403", {message: "Hey ! Que cherches-tu ? Tu ne trouveras rien ici"})
    }
}