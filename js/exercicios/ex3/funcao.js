export function potencia(numero,expoente){
    if(expoente == 0)
    return 1
    if(numero < 0 || expoente < 0)
    return 'calculo invalido'
    
    let pot = 1
    for(let cont = 1; cont <= expoente; cont++){
        pot = pot * numero 
    }
      return pot 
}