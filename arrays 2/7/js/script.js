var array = [2, -5, 4, 1, 3]
var comparar = null;


const readArray = (a) => {

    for (let i = 0; i < a.length; i++) {
        for (let f = 0; f < a.length; f++) {
            if (a[i] < a[f]) {
                if (comparar == null) {
                    comparar = a[i]
                }
                else if (a[i] < comparar) {
                    comparar = a[i]
                }

            }
        }
    }

    if (comparar < 0) {
        comparar = -1 * comparar;
        console.log("como el numero era negativo he sacado el producto: " + comparar)
    }
    else {
        console.log(comparar)
    }


}


readArray(array)