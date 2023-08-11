import prompt from 'prompt-sync';
import {fatorial}from './funcao.js'
let ler = prompt();

console.log(`Digite um número`);
let n = Number(ler());

let ret = fatorial(n);

console.log(ret);

