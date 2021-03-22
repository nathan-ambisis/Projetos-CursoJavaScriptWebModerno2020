function soma(a, b=0){
    return console.log(a+b);
}
soma(2,3)

const x = function(a, b){
    console.log(a+b);
}
x(2,3)

//Arrow
const soma2 = (a, b) => {
    return a+b
}

//Retorno Implicito
const subtracao = (a, b) => a-b
console.log(subtracao(5,3));