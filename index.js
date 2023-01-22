require("dotenv").config({override: true});
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const router = require("./app/router/router");
const {errorCollector, notFound} = require("./app/middlewares/errorHandler/errorHandler");


app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.static("assets"));

app.use(router);

app.use(notFound);
app.use(errorCollector);

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
})