const fs = require ('fs');
const caminho = __dirname + '/arquivo.json'

//Ler de forma síncrona = Ruim pois prejudica o processo de chamadas e loop do NodeJS/JavaScript
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo);


//Ler de forma assíncrona = Bom
fs.readFile(caminho, 'utf-8', (err, conteudo ) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`);
})
const config = require('./arquivo.json')
console.log(config.db);


//Ler pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...');
    console.log(arquivos);
})