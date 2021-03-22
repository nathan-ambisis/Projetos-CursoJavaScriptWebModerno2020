const x = 'Global'

function fora(){
    const x = 'Local'
    console.log(x);
}
fora()

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}