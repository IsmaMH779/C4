var array = ['hola', 'adios', 'mundo']
var sumaArrays = ''


const readArray = (a) => {

    for (let i = 0; i < a.length; i++) {

        if (i == a.length - 1) {
            sumaArrays += a[i];
        }
        else {
            sumaArrays += a[i] + ' ';
        }


    }
    console.log(sumaArrays)

}


readArray(array)