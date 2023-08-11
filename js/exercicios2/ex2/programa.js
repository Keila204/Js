import prompt from 'prompt-sync';
let ler = prompt();


let x = 5;
let nomes = [];

console.log('Digite 05 nomes:');
for (let cont = 0; cont < 5; cont++) {
    nomes[cont] = ler();
}

console.log('--------------');

console.log('Você digitou os nomes:');
for (let item of nomes) {
    console.log(item);
}