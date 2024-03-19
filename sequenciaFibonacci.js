function verificaFibonacci(posicao) {
    let a = 0;
    let b = 1;
    let c;
    let contador = 1;

    while (contador < posicao) {
        c = a + b;
        a = b;
        b = c;
        contador++;
    }

    if (a === posicao) {
        return true;
    } else {
        return false;
    }
}

let posicaoVerificar = parseInt(prompt("Informe a posição na sequência de Fibonacci que você deseja verificar:"));

if (verificaFibonacci(posicaoVerificar)) {
    console.log("O número na posição " + posicaoVerificar + " pertence à sequência de Fibonacci.");
} else {
    console.log("O número na posição " + posicaoVerificar + " não pertence à sequência de Fibonacci.");
}
