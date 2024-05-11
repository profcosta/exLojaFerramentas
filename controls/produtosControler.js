const produtos = require("../json/produtos.json")

function list(pagina=1,qtda=10,filtro=""){
    inicio=(pagina-1)*qtda
    fim=(pagina*qtda)
    dados = produtos.slice(inicio,fim)
    if(filtro){
        dados = dados.filter(produto => (produto.nome.toLowerCase()==filtro.toLowerCase()))
    }
    dados.map((info) => info.valor = parseFloat(info.valor).toFixed(2))
    total = dados.reduce((total,produto) => (total+parseFloat(produto.valor)),0).toFixed(2)
    return {dados,total,pagina}
}

function criar(dados){
    if ((dados.nome) && (dados.valor)){
        produtos.push(dados)
        return {sucess:true, msg:"Produto cadastrado com sucesso!"}
    }else{
        return {sucess:false, msg:"Erro ao cadastrar produto!"}
    }
    
}

module.exports = {list,criar}
