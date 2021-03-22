function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}
const carro = {preco: 45000, desc: 0.2}
console.log(getPreco.call(carro, 0.17 /*Imposto*/, '$')); 
console.log(getPreco.apply(carro, [0.17, '$'])); //Passa-se os parâmetros em forma de array