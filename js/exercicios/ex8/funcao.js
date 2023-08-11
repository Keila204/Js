export function Eprimo(numero){
     let Eprimo = true

   for(let cont = 2; cont < numero; cont++){
    if( numero % cont == 0){
        Eprimo = false;
        break;
    }
   }
   return Eprimo;
}