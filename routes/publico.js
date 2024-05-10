const express = require("express")
const router = express.Router()
const produtos = require("../controls/produtosControler")


router.get("/",(req,res)=>{
    res.render("principal")
})

router.get("/produtos/criar",(req,res)=>{
    info = {
        "nome":"Chave Philips",
        "valor":9.30
    }
    console.log(produtos.criar(info))
    res.send(produtos.list())
})

router.get("/produtos/:nome",(req,res)=>{
    res.render("produtos", produtos.list(req.params.nome))
})


router.get("/produtos",(req,res)=>{
    res.render("produtos", produtos.list())
})



module.exports = router