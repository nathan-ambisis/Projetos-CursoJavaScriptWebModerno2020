//Objeto para JSON
const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c} }
console.log(JSON.stringify(obj)); //Função não foi passada

//JSON para Objeto
const obj1 = (JSON.parse('{"a": 1, "b": 2, "c": 3}'));
console.log(obj1);
