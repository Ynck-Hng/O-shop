exports.cart = (req,res,next) => {
    res.locals.session = req.session;

    if(req.session.cart === undefined){
        req.session.cart = [];
    }

    next();
}