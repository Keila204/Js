export function potencia(b,e) {
    let pt;

    if(e > 1 && b > 1) {
        pt = b**e;

    }

    else if(b < 1 || e < 0) {
        pt = 'Calculo inválido!!';
    }

    else if(e == 0 ) {
        pt = 1;
    }

    

    return pt;
} 