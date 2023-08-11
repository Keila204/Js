import prompt from 'prompt-sync';
let ler = prompt();

let y = [];

console.log('Informe  a quantidade : ');
let qtd = Number(ler());

console.log('Digite os números:' );

for (let cont = 0; cont < qtd; cont++){
    let num = Number(ler());
    y [cont] = num;
}

console.log('-------------');

console.log('Você digitou os números:');

for(let i= 0; i < y.length; i++){

    console.log(y[i])
}