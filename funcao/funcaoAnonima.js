const soma = function(x,y){
    return x+y
}

const imprimirResultado = function(a,b, operacao = soma){
    console.log(operacao(a,b));
}

imprimirResultado(3,4) //Assume o 3º parametro default, ou seja, o soma
imprimirResultado(3,4, (x,y) => x - y) //O terceiro parâmentro é uma função de subtração