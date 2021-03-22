function tratarErroELancar(erro){
    throw new Error('Deu erro!')
}

function imprimirNomeGritado(obj){
    try{
    console.log(obj.nome.toUpperCase() + '!!!');
    } catch (e){
        tratarErroELancar(e)
    } finally{
        console.log('Fim do código!');
    }
}
const obj = {name: 'Roberto'}
imprimirNomeGritado(obj)