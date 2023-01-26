exports.userForbidden = (req,res,next)=>{
    if(req.session.user){
        res.status(403).render("./error/403");
    } else {
        next();
    }
}