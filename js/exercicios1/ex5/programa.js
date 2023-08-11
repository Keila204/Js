import prompt from 'prompt-sync';
let ler = prompt();


let tabuada = [];

console.log('Digite o número que deseja saber a tabuada');
let num = Number(ler());


for(let cont = 0; cont <= 10; cont++){
    tabuada [cont] = num * cont;
}

console.log('-------------');

for(let item of tabuada){
    console.log(item);
}