const express = require("express")
const app = express()
const port = 3000

const handlebars = require("express-handlebars")
app.engine('handlebars', handlebars.engine());
app.set("view engine", 'handlebars')
app.set('views','./views')

const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

const session = require("express-session");
app.use(session({
    secret:"process.env.SECRET",
    resave:true,
    saveUninitialized:true
}));

const flash = require("connect-flash");
app.use(flash());

app.use((req,res,next)=>{
    res.locals.msg_success = req.flash("msg_success");
    res.locals.msg_error = req.flash("msg_error");
    res.locals.user = req.session.user || ""
    next();
});

const publico = require("./routes/publico")
app.use("/",publico)

app.listen(port,()=>{
    console.log(`Servidor ativo em: http://localhost:${port}`)
})