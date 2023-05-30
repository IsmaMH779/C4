var array = [1, 2, 3, 4, 5]
var suma = 0;
var promedio = 0;

const readArray = (a) => {

    for (let i = 0; i < a.length; i++) {
        suma += a[i]
    }

    promedio = suma / a.length
    console.log(promedio)
}


readArray(array)