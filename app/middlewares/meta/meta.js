exports.meta = (req,res, next)=>{
    res.locals.meta = {
        title: "O'Shop - Accueil",
    }

    next();
}