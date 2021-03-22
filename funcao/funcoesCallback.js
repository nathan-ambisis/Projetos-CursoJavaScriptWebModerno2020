const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}.${nome}`);
}

fabricantes.forEach(imprimir) //Retorna 1.Mercedes 2.Audi 3.BMW

fabricantes.forEach(fabricante => console.log(fabricante)) //Retorna Mercedes Audi BMW

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
const notasBaixas = notas.filter(nota => nota < 7) //Se for true, joga isso dentro do novo vetor notasBaixas
console.log(notasBaixas); //Retorna [ 6.5, 5.2, 3.6 ] 