export function temperatura(temp) {
    let x;

    if (temp >= 37) {
        x = 'Se cuide você está com febre!!'
    }

    else if (temp == 36) {
        x = 'Você está bem !!'
    } 

    else if (temp < 36) {
        x = 'Você está com hiportemia!!'
    }

    return x;
}