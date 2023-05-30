var string = prompt('introduce un texto')
var nVocales = 0;

const readArray = (a) => {

    for (let i = 0; i < a.length; i++) {
        switch (string.charAt(i)) {
            case 'a':
                nVocales += 1
                break;
            case 'e':
                nVocales += 1
                break;
            case 'i':
                nVocales += 1
                break;
            case 'o':
                nVocales += 1
                break;
            case 'u':
                nVocales += 1
                break;
        }

    }
    console.log(nVocales)
}


readArray(string)