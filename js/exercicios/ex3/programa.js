import prompt from 'prompt-sync';
import { potencia } from './funcao.js';
let ler = prompt();
 
console.log('informe um numero ');
let num = Number(ler());

console.log('informe um numero ');
let exp = Number(ler());

let x = potencia(num,exp);
console.log('A potencia é ' + x)