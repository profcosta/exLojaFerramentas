const express = require("express")
const router = express.Router()
const produtos = require("../controls/produtosControler")

router.get("/",(req,res)=>{
    res.render("publico/principal")
})

router.get("/produtos/criar",(req,res)=>{
    res.render("publico/criarProdutos")
})

router.post("/produtos/criar",(req,res)=>{
    response = produtos.criar(req.body)
    if(response.sucess){
        req.flash("msg_success",response.msg);
    }else{
        req.flash("msg_error",response.msg);
    }
    return res.redirect("/produtos")
})

router.get("/produtos/:nome",(req,res)=>{
    res.render("publico/produtos", produtos.list(1,10,req.params.nome))
})

router.get("/produtos",(req,res)=>{
    res.render("publico/produtos", produtos.list(2))
})



module.exports = router