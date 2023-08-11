import { dobro } from "./funcao.js";

import prompt from "prompt-sync";
let ler = prompt();

console.log('Informe um numero e direi seu dobro: ');
let n = Number(ler());

let x = dobro(n);

console.log(`O dobro de ${n} é ${x}`)