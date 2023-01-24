exports.errorCatcher = (fn) => { return (req,res,next) => {
    return fn(req,res,next).catch(next);
}}

exports.errorCollector = (err,req,res,next)=>{
    const status = err.status || 500;
    if(status === 404){
        res.format({
            "text/html": res.status(status).render("./error/404", {message: err.message, stack: err.stack})
        })
    } else {
        console.log("non");
        res.format({
            "text/html": res.status(status).render("./error/505", {message: err.message, stack: err.stack})
            })
    }
    next();
}

exports.notFound = (req,res,next)=>{
    const err = new Error("La page que vous cherchez n'a pas été trouvée...");
    err.status = 404;
    next(err)
}