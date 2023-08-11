import prompt from 'prompt-sync';
import { palindromo } from './funcao.js';
let ler = prompt();

console.log("Informe uma palavra: ");
let texto = ler();

let text = palindromo(texto);
console.log(text);
 
if (text == true){
    console.log ('É um palindromo')
}
else{
    console.log ('Não é um palindromo')
}