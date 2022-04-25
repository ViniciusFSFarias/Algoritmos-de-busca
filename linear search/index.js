
let iterations = 1;

function linearSearch(array, val)
{
    for(let i = 0; i < array.length; i++)
    {
        if (array[i] == val) {
            return i;
        }
        iterations++;
    }

    return -1;
}


const elements = [];

for (let i = 1; i <= 1000; i++) 
{
    elements.push(i);
}

const result = linearSearch(elements, 60);

if(result == -1)
{
    console.log('o valor não existe no vetor');
}else
{
    console.log(`o valor existe no index ${result}`);
    console.log(`iteracoes ${iterations}`);
}