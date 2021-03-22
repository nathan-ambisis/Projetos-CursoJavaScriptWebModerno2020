const sequencia = {
    _valor: 1,
    get valor() {return this._valor++},
     /*Pegando o valor por uma função permite algumas verificações e operações 
    antes de realmente retonrar o valor*/
    set valor(valor) {
        if(this._valor > 5){
            console.log("Eae");
        }
    }
}
console.log(sequencia.valor,sequencia.valor); //O primeiro comando mostra o valor atual e o segundo o valor com +1
