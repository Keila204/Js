import prompt from 'prompt-sync';
let ler = prompt();

let notas = [];

console.log('Digite a qtd de notas: ');
let qtd = Number(ler());

for (let cont = 0; cont < qtd; cont++){
    console.log('Digite a nota' + (cont+1));
    notas[cont] = Number(ler());
}

console.log('----');

let soma = 0 

for( let cont = 0; cont < notas.length; cont++){
    soma = soma + notas[cont];
}

let media = soma / notas.length;

console.log('qual é a média ' + media);