const express = require("express")

const publico = require("./routes/publico")

const app = express()
const port = 3000

app.use("/",publico)

app.listen(port,()=>{
    console.log(`Servidor ativo em: http://localhost:${port}`)
})