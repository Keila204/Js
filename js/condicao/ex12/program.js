import { fatorial } from './funcao.js';
import prompt from 'prompt-sync';
let ler = prompt();

console.log('informe um número :');
let numero = Number(ler());



let x = fatorial(numero);

console.log(`o fatorial de ${numero} é ${x}`);