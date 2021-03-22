const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13,
}
console.log(Object.keys(pessoa)); //Retorna as chaves do objeto
console.log(Object.values(pessoa)); //Retorna os valores das chaves do objeto
console.log(Object.entries(pessoa)); //Retorna um array maior e dentro desse pequenos arrays com cada chave e seu valor
Object.defineProperty(pessoa, 'dataNascimento', {
    //Cria um novo atributo ao objeto que pode receber algumas caracteristicas
    enumerable: true, //Se ele vai ser listado ou não quando chamado o objeto
    writalbe: false, //Se ele pode ser alterado ou não
    value: '19/03/2021' //Valor inicial - Não obrigatório
})
console.log(pessoa.dataNascimento);

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest,o1,o2) //Vai pegar todos os elementos e jogar dentro do objeto dest
console.log(obj); //Retorna {a:4,b:2,c:3}