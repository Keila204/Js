import prompt from 'prompt-sync';
let ler = prompt();
import { fibonacci}  from './funcao.js';

console.log("Programa Fibonacci? ");
let posicao = Number(ler());

let num = fibonacci(posicao);

console.log("O número de Fibonacci na posição é " + num);
