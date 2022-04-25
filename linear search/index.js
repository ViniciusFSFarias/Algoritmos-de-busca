
let iterations = 1;

function linearSearch(array, val)
{
    for(let i = 0; i < array.length; i++)
    {
        iterations++;
        if (array[i] == val) {
            return i;
        }
    }

    return -1;
}


const elements = [1,5,7,9,11,13,15,23,25,28,31,35,36,40,41,46,49,50,53,60];

const result = linearSearch(elements, 60);

if(result == -1)
{
    console.log('o valor não existe no vetor');
}else
{
    console.log(`o valor existe no index ${result}`);
    console.log(`iteracoes ${iterations}`);
}