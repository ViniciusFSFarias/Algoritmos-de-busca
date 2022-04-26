let count = {}

let array = [1,1,1,1,5,7,9,11,13,13,13,15,23,25,28,28,28,31,35,36,40,41,46,49,50,53,60,28]

for (var i = 0; i < array.length; i++){
    let numero = array[i]

    count[numero] = count[numero] ? count[numero] +1 : 1
}

//exemplo de busca
let numberExist = 1;
let numberDont = 10;
//imprime a tabela
console.table(count)

console.log('--NUMERO ENCONTRADO--');
array.includes(numberExist) ? console.log('Numero', numberExist, 'encontrado!') : console.log('Nao existe');

console.log('--NUMERO NAO ENCONTRADO--');
array.includes(numberDont) ? console.log('Numero', numberDont, 'encontrado!') : console.log('Numero', numberDont, 'nao existe na tabela!');



