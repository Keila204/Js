import { separar } from './funcao.js';

import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite uma frase: ');
let txt = ler();

let x = separar(txt);

console.log(x);