import prompt from 'prompt-sync';
let ler = prompt();

let y = [];

console.log('Digite a quantidade de números: ');
let qtd = Number(ler());

for (let cont = 0; cont <qtd; cont++){
    console.log(`Informe o ${cont +1}° número`);
     y [cont] = Number(ler());
}

console.log();
console.log(' Você digitou os números: ');

for (let item of y) {
    console.log(item);
}

console.log();

for (let item of y) {
    console.log(` O dobro de ${item} é ${item * 2}`);
}
