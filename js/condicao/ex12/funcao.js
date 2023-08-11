export function fatorial(n){
    let fat = 1;
    for(let cont = n; cont > 0 ; cont --){
        fat = cont * fat;
    }
    return fat.toFixed(2);
}