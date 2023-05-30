var array = [1, 2, 3, 4, 5]
var suma = 0;

const readArray = (a) => {

    for (let i = 0; i < a.length; i++) {
        suma += a[i]
    }
    console.log(suma)

}


readArray(array)