export function separar(txt){
    let texto = '';
    
    for(let cont = 0; cont < txt.length; cont++){
        let letra = txt.charAt(cont);
        texto = letra + texto;
    }
    return texto;
}