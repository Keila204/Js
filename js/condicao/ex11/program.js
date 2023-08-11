import { somarate } from './funcao.js';

import prompt from 'prompt-sync';
let ler = prompt();

console.log('informe um numero :');
let n = Number(ler());

let x =  somarate(n);

console.log(`a soma é ${x}`)