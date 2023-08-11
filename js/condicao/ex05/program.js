import { temperatura } from "./funcao.js";

import prompt from "prompt-sync";
let ler = prompt();

console.log('Informe a sua temperatura: ');
let temp = Number(ler());

let x  = temperatura(temp);

console.log(x);