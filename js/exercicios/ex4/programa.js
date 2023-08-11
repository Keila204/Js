import {separar} from './funcao.js'
import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe uma palavra: ');
let palavra = ler();


let x = separar(palavra)
console.log(x)