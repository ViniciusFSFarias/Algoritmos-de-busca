let iterations = 1;

function linearSearch(array, val){
    for(let i = 0; i < array.length; i++){
        if (array[i] == val) {
            return i;
        }
        iterations++;
    }

    return -1;
}


const elements = [];

for (let i = 1; i <= 1000; i++){
    elements.push(i);
}

//CASO QUE ENCONTRA
let result = linearSearch(elements, 60);

if(result == -1){
    console.log('O valor não existe no vetor');
} else{
    console.log(`O valor existe no index ${result}`);
    console.log(`Iteracoes: ${iterations}`);
}

//CASO QUE NAO ENCONTRA
result = linearSearch(elements, 3333);
console.log('\n---NAO EXISTE---');
if(result == -1){
    console.log('O valor não existe no vetor');
} else{
    console.log(`O valor existe no index ${result}`);
    console.log(`Iteracoes ${iterations}`);
}