function soma(){
    let soma = 0 
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma("Nathan","Willian","Airan")); //0NathanWillianAiran