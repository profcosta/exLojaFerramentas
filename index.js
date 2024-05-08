const express = require("express")
const handlebars = require("express-handlebars")
const publico = require("./routes/publico")

const app = express()
const port = 3000

app.engine('handlebars', handlebars.engine());
app.set("view engine", 'handlebars')
app.set('views','./views')

app.use("/",publico)

app.listen(port,()=>{
    console.log(`Servidor ativo em: http://localhost:${port}`)
})