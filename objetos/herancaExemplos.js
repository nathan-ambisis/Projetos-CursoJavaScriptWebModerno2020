const { delay } = require("lodash");

//Exemplo 1
class Carro {
    constructor(modelo, velMax){
        this.modelo = modelo,
        this.velMax = velMax
    }
}
class Volvo extends Carro{
    constructor(cor, placa){
        super(cor, placa)
        this.cor = cor,
        this.placa = placa
    }
}
const teste = new Volvo()
console.log(Object.keys(teste));

//Exemplo 2
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr1);

//Exemplo 3
const carro2 = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax) this.velAtual += delta
        else this.velAtual = this.velMax
    }, status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const audi = {
    __proto__: carro2,
    tipo: 'audi',
    corJanela: 'preto'
}

console.log(Object.keys(audi));
console.log(audi.velMax);