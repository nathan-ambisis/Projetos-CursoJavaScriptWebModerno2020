function criarProduto(nome, preco, desconto){
        let desconto1 = desconto * preco
        let valorTotal = preco - desconto1
    return{
        nome,
        preco,
        valorTotal, 
        getObservacoes(){
            return console.log("Eae!");
        }
        /*Com a integração com o banco de dados podemos 
        fazer com que essa função crie toda vez novas pessoas/empresas
        diferentes 
        */
    }
}

console.log(criarProduto('iPhone', 3500, 0.1));