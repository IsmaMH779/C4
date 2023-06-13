let N = prompt("introduce un numero maximo");
let N2 = prompt("introduce un numero minimo");



const randomizar = (Nmax, Nmin) => {


    return Math.floor(Math.random() * (Nmax - Nmin + 1) + Nmin);
};

console.log(randomizar(parseInt(N), parseInt(N2)));