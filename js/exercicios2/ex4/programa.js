import prompt from 'prompt-sync';
let ler = prompt();

let y = [];
let inversa = [];
let inicial = 0;

console.log('Digite a quantidade de números: ');
let qtd = Number(ler());

for (let cont = 0; cont < qtd; cont++){
    console.log('Digite os números:' );
    y [cont] = Number(ler());
}

for(let cont = y.length-1; cont >=0; cont--){
    inversa[inicial] = y [cont];
    inicial++
}

console.log('-------------');

console.log('Você digitou os números:');

for (let item of inversa) {
    console.log(item);
}