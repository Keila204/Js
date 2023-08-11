import { contar } from "./funcao.js";

import prompt from "prompt-sync";
let ler = prompt();

console.log('Infome um numero: ');
let num = Number(ler());

console.log('Informe o numero final: ');
let numf = Number(ler());


contar(num,numf);

