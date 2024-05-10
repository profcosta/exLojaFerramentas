const produtos = require("../json/produtos.json")

function list(filtro=""){
    if(filtro){
        dados = produtos.filter(produto => (produto.nome.toLowerCase==filtro.toLowerCase))
    }else{
        dados=produtos
    }
    //dados.map((info) => info.valor = (info.valor.toFixed(2)*1))
    dados.map((info) => info.valor = parseFloat(info.valor).toFixed(2))
    total = dados.reduce((total,produto) => (total+parseFloat(produto.valor)),0).toFixed(2)
    return {dados,total}
}

function criar(dados){
    produtos.push(dados)
    return true
}

module.exports = {list,criar}
