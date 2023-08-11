import { cores } from "./funcao.js";

import prompt from "prompt-sync";
let ler = prompt();

console.log('Informe uma cor e direi se ela é primaria: ');
let cor = Number(ler());

let x = cores(cor);

console.log(x);