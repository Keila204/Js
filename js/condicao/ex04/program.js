import { quadrado } from "./funcao.js";

import prompt from "prompt-sync";
let ler = prompt();

console.log('Infome a lado do quadrado: ');
let lado = Number(ler());

let multi = quadrado(lado);

console.log(`A area do retangulo equivale a ${multi}`)