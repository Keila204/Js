import prompt from 'prompt-sync';
import { media,pedirNota } from './funcao.js';
let ler = prompt();

let n1 = pedirNota();
let n2 = pedirNota();
let n3 = pedirNota();

let m = media(n1,n2,n3);
console.log('A media é ' + m)