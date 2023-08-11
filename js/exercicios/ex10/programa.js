import prompt from 'prompt-sync';
let ler = prompt();
import {ganhou,sorteado}  from './funcao.js';

console.log("Programa Número Sorteado");

let Nsorteado  = sorteado;

console.log("\n O número já foi sorteado");

for(let tent = 1; tent <= 10; tent++){
    console.log("\n Sua escolha");
    let num = Number(ler());
     
    let situ = ganhou(Nsorteado,num,tent);
    console.log(situ);
    
    if(situ == 'Ganhou'){
        break
    }
}