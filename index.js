require("dotenv").config({override: true});
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const router = require("./app/router/router");
const session = require("express-session");
const {cart} = require("./app/middlewares/cart/cart");
const {userSession} = require("./app/middlewares/userSession/userSession");
const {errorCollector, notFound} = require("./app/middlewares/errorHandler/errorHandler");


app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.urlencoded({extended: true}));
app.use(express.static("assets"));

app.use(
    session({
        secret:process.env.PG_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie:{
            secure: false,
            maxAge: 3600*60*60
        }
    })
)

app.use(userSession);

app.use(cart);

app.use(router);

app.use(notFound);
app.use(errorCollector);

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
})