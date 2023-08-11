import { separar } from './funcao.js';
import prompt from 'prompt-sync';
let ler =prompt();

console.log('Digite uma palavra: ');
let texto = ler();

let x = separar(texto);
console.log(x);