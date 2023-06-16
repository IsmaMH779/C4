let confirmN = false;
let confirmL = false;

const validation = () => {
    inputVal = document.getElementById('name').value;

    inputVal.length > 0 ? (confirmN = true, document.getElementById('errN').innerHTML = '') : (document.getElementById('errN').innerHTML = 'llena el capo Nombre', confirmN = false)
}

const validation2 = () => {
    inputVal2 = document.getElementById('lastN').value;

    inputVal2.length > 0 ? (confirmL = true, document.getElementById('errL').innerHTML = '') : ((document.getElementById('errL').innerHTML = 'llena el capo apellido', confirmL = false))
}

const send = () => {
    confirmL && confirmN ? alert('enviado') : alert('llena todos los campos');
}