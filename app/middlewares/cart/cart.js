exports.cart = (req,res,next) => {
    res.locals.cart = req.session.cart;

    if(res.locals.cart === undefined){
        res.locals.cart = [];
    }

    next();
}