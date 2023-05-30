var array = [1, 2, 3, 4, 5]
var sumaPares = 0;

const readArray = (a) => {

    for (let i = 0; i < array.length; i++) {
        if (a[i] % 2 == 0) {
            sumaPares += a[i]
        }

    }

    console.log(sumaPares)
}


readArray(array)