exports.userAdmin = (req,res,next)=>{
    if(req.session.user.role.name === "Admin"){
        next();
    } else {
        res.status(403).render("./error/403", {message: "Où vas-tu ? Cet endroit est inaccessible"})
    }
}