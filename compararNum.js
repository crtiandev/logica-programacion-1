const prompt = require('prompt-sync')();

let num1 = Number(prompt(`Digita el primer numero: `));
let num2 = Number(prompt(`Digita el segundo numero: `));
let num3 = Number(prompt(`Digita el tercer numero: `));

const listaNum = [num1,num2,num3];
const listaNum2 = [num1,num2,num3];

for (let i = 0; i < listaNum.length; i++){

    for(let j = 0; j < listaNum.length; j++ ){
    if (listaNum[j] >= listaNum[j+1]){
       let guardar = listaNum[j];
       listaNum[j] = listaNum[j+1];
       listaNum[j+1] = guardar;
    }
    } 
}

for (let i = 0; i < listaNum2.length; i++){
    for(let k = 0; k < listaNum2.length; k++ ){
    if (listaNum2[k] <= listaNum2[k+1]){
       let guardar = listaNum2[k+1];
       listaNum2[k+1] = listaNum2[k];
       listaNum2[k] = guardar;
    }
    }
}

console.log (`Lista mayor a menor: ${listaNum2} \nLista menor a mayor: ${listaNum}`)



