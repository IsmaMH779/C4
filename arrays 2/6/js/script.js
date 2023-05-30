var array = [1, 2, 5, 4, 3]
var comparar = 0;


const readArray = (a) => {



    for (let i = 0; i < a.length; i++) {
        for (let f = 0; f < a.length; f++) {
            if (a[i] > a[f]) {
                if (a[i] > comparar) {
                    comparar = a[i]
                }
            }
        }
    }

    console.log(comparar)

}


readArray(array)