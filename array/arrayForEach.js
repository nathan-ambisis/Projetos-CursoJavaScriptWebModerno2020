//Exemplo 1:
const aprovados = ['Nathan', 10, false, true]
aprovados.forEach(function(nome, indice){ //Nome = Elementos do array
    console.log(`${indice + 1} = ${nome}`);
}) //Para cada elemento do array, uma função é chamada, indicando seu índice e nome. 

aprovados.forEach((nome, indice) => console.log(`${indice + 1} = ${nome}`))

//Exemplo 2:
const aprovados = ['Nathan', 10, false, true]
aprovados.forEach(function(nome, indice){ //Nome = Elementos do array
    console.log(`${indice + 1} = ${nome}`);
})
