export function fibonacci(posicao){
    let ult = 1;
    let penult = 1;
    
    for(let cont = 2; cont < posicao; cont++){
        let aux = ult;
        ult = ult + penult;
        penult = aux;;
    }
    return ult;
}