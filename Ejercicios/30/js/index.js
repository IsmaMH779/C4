let N = prompt("introduce un numero")
let suma = 0;

for (let i = 0; i < N; i++) {
    if (N % i == 0) {
        suma = suma + i;
        if (suma == N) {
            console.log(N + " es un numero perfecto")
        }
    }
}