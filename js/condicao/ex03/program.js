import { retangulo } from "./funcao.js";

import prompt from "prompt-sync";
let ler = prompt();

console.log('Infome a base do retangulo: ');
let base = Number(ler());

console.log('Informe a altura do retangulo: ');
let altura = Number(ler());

let multi = retangulo(base, altura);

console.log(`A area do retangulo equivale a ${multi}`)