export function palindromo(texto){
    let invertido = ''

    for(let cont = 0; cont < texto.length; cont++){
        let letra = texto.charAt(cont)
        invertido = letra + invertido;
    }
    
    let text = invertido == texto
    return text
}