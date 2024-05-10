const produtos = require("../json/produtos.json")

function list(filtro=""){
    console.log(filtro)
    if(filtro){
        dados = produtos.filter(produto => (produto.nome==filtro))
    }else{
        dados=produtos
    }
    dados.map((info) => info.valor = info.valor.toFixed(2))
    total = dados.reduce((total,produto) => (total+parseFloat(produto.valor)),0).toFixed(2)
    return {dados,total}
}

module.exports = {list}
