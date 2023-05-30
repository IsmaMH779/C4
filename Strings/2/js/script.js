var string = prompt('introduce un texto')
var suma = '';

const readArray = (a) => {

    for (let i = 0; i < a.length; i++) {
        if (i == a.length - 1) {
            suma += a.charAt(i)
        }
        else {
            suma += a.charAt(i) + '-';
        }

    }
    console.log(suma)
}


readArray(string)