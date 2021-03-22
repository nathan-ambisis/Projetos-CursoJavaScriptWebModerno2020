const nums = [1,2,3,4,5,6,7,8,9,10]

for(x in nums){
    if(x == 5){
        break //Vai ignorar o índice 5 e parar a sentença
    }
    console.log(`${x} = ${nums[x]}`); //retorna 0=1 1=2 2=3 3=4 4=5 
}

for(y in nums){
    if(y == 5){
        continue //Vai ignorar o índice 5 e continuar a sentença
    }
    console.log(`${y} = ${nums[y]}`); // retorna 0=1 1=2 2=3 3=4 4=5   6=7 7=8 
}