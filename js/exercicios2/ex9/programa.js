import prompt from 'prompt-sync';
let ler = prompt();

let notas = [];
let soma = 0 

console.log('Digite a qtd de notas: ');
let qtd = Number(ler());

for (let cont = 0; cont < qtd; cont++){
    console.log('Digite a nota' + (cont+1));
    notas[cont] = Number(ler());
}

console.log('----');
console.log('Notas digitadas: ')
console.log('----');

for(let item of notas){
    process.stdout.write(`||${item}||`)
}

for( let cont = 0; cont < notas.length; cont++){
    soma = soma + notas[cont];
}

let media = soma / notas.length;
let notaM = Math.max.apply(null,notas)
let notaN = Math.min.apply(null,notas)


console.log(`qual é a média ||${media}||`);
console.log('qual é a maior nota ' + notaM );
console.log('qual é a menor nota ' + notaN );