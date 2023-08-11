import { factorialize } from './funcao.js';


import prompt from 'prompt-sync';
let ler = prompt();

console.log("Informe um numero ");
let num = Number(ler());

factorialize(num)