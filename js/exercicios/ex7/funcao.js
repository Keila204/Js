import prompt from 'prompt-sync';
let ler = prompt();

export function pedirNota(){
    
    console.log('Informe uma nota');
    let nota = Number(ler());

    while(nota < 0 || nota > 10){
        console.log('Nota invalida. Ela deve está entre 0 e 10.\n')
        console.log('Informe a nota ');
        nota = Number(ler());
    }
    return nota 
}

export function media(n1,n2,n3){
    let m = (n1 + n2 + n3)/3
    return m 
}