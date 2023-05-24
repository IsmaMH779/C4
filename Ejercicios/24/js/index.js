let N = prompt("introduce un numero")
let i = 0;
let resultado = 0;
while (N.length > i) {

    resultado = Number(N.charAt(i)) + resultado;

    i++
}
console.log(resultado)