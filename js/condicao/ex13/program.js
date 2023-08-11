import { potencia } from "./funcao.js";

import  prompt  from "prompt-sync";
let ler = prompt();

console.log('Infome o número base: ');
let base = Number(ler());

console.log('Informe o número do expoente: ');
let expoente = Number(ler());

let x = potencia(base,expoente);

console.log(`${base} elevado a ${expoente} é ${x}`) 