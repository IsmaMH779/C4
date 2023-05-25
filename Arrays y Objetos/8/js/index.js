let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
let javascript2 = ["Objetos", "Arrays", "ParseInt"];
let array = []
for (let i = 0; i < javascript1.length; i++) {

    for (let a = 0; a < javascript2.length; a++) {

        if (javascript2[a] == javascript1[i]) {
            array.push(javascript1[i])
        }
    }

}

console.log(array)
