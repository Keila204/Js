export function sorteado(){
    let num = Math.random() * 1000;
    num = parseInt(num);
    return num;
}
export function ganhou (sorteado,usuario,tentativa){
    let situ = '';

    if(tentativa == 10 && usuario != sorteado){
        situ = 'Perdeu';
    }
    else if(usuario == sorteado){
        situ = 'Ganhou';
    }
    else if(sorteado > usuario){
        situ = 'Maior';
    }
    else if(sorteado < usuario){
        situ = 'Menor';
    }
    
    return situ
}