export function media(n1,n2,n3,n4,n5) {
    let x = (n1 + n2 + n3 + n4 + n5)/5;
    let y;

    if (x >= 5 && x < 10) {
        y = 'O aluno está aprovado !!'
    }

    else if (x >= 0 && x < 5) {
        y = 'O aluno está reprovado !!'
    }

    else {
        y = 'Invalido'
    }

    return y;
}