let contador = 1;
const binarySearch = (array, inicio, fim, numero) => {
    console.log("Inicio:",inicio,"Fim:",fim);
    console.log("--- Comparações: ", contador);
    if(inicio <= fim){
        let meio = Math.floor((inicio + fim) / 2);
        console.log("--- Meio: ", meio)
        if(array[meio] == numero){
            return "Numero encontrado no indice: " + meio;
        } if(numero < array[meio]){
            contador++;
            return binarySearch(array, inicio, meio - 1, numero)
        } else{
            contador++;
            return binarySearch(array, meio + 1, fim, numero)
        }
    }

    return "Numero nao encontrado!";
}

let array = [];

for (let i = 1; i <= 1000; i++) {
   array.push(i);
}

// let array = [1,5,7,9,11,13,15,23,25,28,31,35,36,40,41,46,49,50,53,60]

console.log(binarySearch(array, 0, array.length - 1, 200));

