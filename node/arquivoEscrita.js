const fs = require ('fs')
const produto = [{
    nome: 'Celular',
    preco: 1250.00,
    desconto: 0.15,
    },{
    nome: 'Nathan',
    preco: 800,
    desconto: 50,
    }]


fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!');
})