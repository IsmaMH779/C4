var string = prompt('introduce un texto')
var sParentesis = '';

const readArray = (a) => {
    console.log(a.substring(a.indexOf('(') + 1, a.indexOf(')') == -1 ? a.length - 1 : a.indexOf(')')))
}


readArray(string)