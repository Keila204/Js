import {invertido} from './funcao.js'
import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe um texto:')
let palavra = ler()

let x = invertido(palavra)
console.log(x)