import prompt from 'prompt-sync';
let ler = prompt();

let n = 5;
let numeros = [];

console.log('Digite 05 números:');
for (let cont = 0; cont < 5; cont++) {
    numeros[cont] = ler();
}

console.log('--------------');

console.log('Você digitou os números:');
for (let item of numeros) {
    console.log(item);
}