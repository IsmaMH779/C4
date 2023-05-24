let N = prompt("introduce un numero");
let resultado = 1;

do {
    if (N % 2 == 0) {

        resultado = resultado * N;
        console.log(resultado)
        N--
    }
    N--
} while (N >= 1);
