import { naturais } from './funcao.js';

import prompt from 'prompt-sync';
let ler = prompt();

console.log("Sejam bem vindos");
let num = Number(ler());

let x =  naturais (num);
console.log(x);