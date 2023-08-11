import { triplo } from "./funcao.js";

import prompt from "prompt-sync";
let ler = prompt();

console.log('Informe um numero e direi seu trplo: ');
let n = Number(ler());

let x = triplo(n);

console.log(`O triplo de ${n} é ${x}`)