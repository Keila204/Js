import { somArt } from './funcao.js';

import prompt from 'prompt-sync';
let ler = prompt();

console.log("informe o numero desejado: ");
let numero = Number(ler());


somArt(numero)