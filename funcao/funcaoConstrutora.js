function Carro(velocidadeMaxima = 200, delta = 5){
    //Atributo Privado
    let velocidadeAtual = 0

    //Método Público
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }
        else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //Método Público
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}
const uno = new Carro //Não necessita parâmetro devido ao parâmetro padrão
uno.acelerar()
console.log(uno.getVelocidadeAtual());