let N = prompt("introduce una palabra")
let Nvocales = 0;

for (let i = 0; i < N.length; i++) {

    if (N.charAt(i) == "a" || N.charAt(i) == "e" || N.charAt(i) == "i" || N.charAt(i) == "o" || N.charAt(i) == "u") {
        Nvocales++
    }
}

console.log(Nvocales)
