const express = require ("express");

const app = express ();
const session = require('express-session');
const flash = require("connect-flash");
// const path = require ("path");

//configuracion 
app.set("views", __dirname + "\\views");
app.set("view engine", "ejs");

//middlewares 
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: "Perroo",
    resave: false,
    saveUninitialized: false
}));

app.use(flash());
//global 
app.use((req,res,next)=>{
    app.locals.menssage = req.flash('OK')
    next();
})


//Routes

app.use(require("./routes/index"));


app.listen(3000);
console.log("Server : Ok ")