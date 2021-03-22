const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao);
    }
}
const falar = pessoa.falar()
falar() //Erro, o this não consegue mais fazer contato 

const falarCerto = pessoa.falar.bind(pessoa) //Referencia o objeto, ajustando o problema do this 
falarCerto() //Retorna Bom dia!

function Pessoa(){
    this.idade = 0
    const self = this 
    setInterval(function(){
        self.idade++
        console.log(self.idade);
    }, 1000)
}
new Pessoa