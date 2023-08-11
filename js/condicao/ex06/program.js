import { media } from "./funcao.js";

import prompt from "prompt-sync";
let ler = prompt();

console.log('Infome a primeira nota: ');
let n1 = Number(ler());

console.log('Infome a segunda nota: ');
let n2 = Number(ler());

console.log('Infome a terceira nota: ');
let n3 = Number(ler());

console.log('Infome a quarta nota: ');
let n4 = Number(ler());

console.log('Infome a quinta nota: ');
let n5 = Number(ler());

let x = media(n1,n2,n3,n4,n5);

console.log(`A media desse alune é de ${x}`)