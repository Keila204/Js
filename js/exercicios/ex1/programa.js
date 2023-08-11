import prompt from 'prompt-sync';
import { somarAte}from './funcao.js'
let ler = prompt();

console.log(`Digite um número`);
let n = Number(ler());

let x = somarAte(n)
console.log('A soma é ' + x)