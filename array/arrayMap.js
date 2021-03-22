//O map retorna um array do mesmo tamanho mas com os elementos transformados.

//Exemplo 1
const nums = [1,2,3,4,5]

let resultado = nums.map(function(e){
    return e * 2
})
console.log(resultado);

const triplo = e => e * 3
resultado = nums.map(triplo)
console.log(resultado);

//Exemplo 2 

