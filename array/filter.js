const produtos = [
    {nome: 'Noebook', preco: 2499, fragil:true},
    {nome: 'iPad PRO', preco: 4199, fragil:true},
    {nome: 'Copo de Plástico', preco: 18, fragil:false}
]

console.log(produtos.filter(function(p){
    if(p.preco < 20){
        return p 
    }
})); //p = elemento do array

const fragil = produto => produto.fragil == true
console.log(produtos.filter(fragil));