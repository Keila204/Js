import prompt from 'prompt-sync';
let ler = prompt();
import { Eprimo}  from './funcao.js';

console.log('Programa é primo');
let prm = Number(ler());

let primo = Eprimo(prm)

if (primo == true){
    console.log('O número informado é primo! ');
}
else{
    console.log('O número informado NÃO é primo');
}