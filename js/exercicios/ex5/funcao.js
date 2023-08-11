export function invertido(texto){
    let invertido = ''

    for(let cont = 0; cont < texto.length; cont++){
        let letra = texto.charAt(cont)
        invertido = letra + invertido;
    }

    return invertido
}