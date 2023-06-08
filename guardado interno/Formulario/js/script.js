let NombreError = EmailError = NumeroError = CheckError = CheckDNINIE = true;
const LETRASDNI = "TRWAGMYFPDXBNJZSQVHLCKE";


//leer el local storage
function read() {
    document.formulario.nombre.value = localStorage.getItem('nombre');
    document.formulario.email.value = localStorage.getItem('email');
    document.formulario.telef.value = localStorage.getItem('numero');
    document.formulario.dni.value = localStorage.getItem('dni');
};

window.addEventListener('load', read);
//Mensaje de error
function mensajeDeError(id, mensaje) {

    document.getElementById(id).innerHTML = mensaje;

}

//validar nombre
function validarNombre() {
    var nombre = document.formulario.nombre.value;
    localStorage.setItem('nombre', nombre);
    if (nombre == "") {
        mensajeDeError('errorNombre', 'ERROR: campo de nombre')
    }
    else {
        mensajeDeError('errorNombre', '')
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(nombre) === false) {
            mensajeDeError('errorNombre', 'ERROR: campo de nombre')
        }
        else {
            mensajeDeError('errorNombre', '')
            NombreError = false;
        }
    }
}

//validar email
function validarEmail() {
    var Email = document.formulario.email.value;
    localStorage.setItem('email', Email);
    if (Email == "") {
        mensajeDeError('errorEmail', 'ERROR: campo Email')
    }
    else {
        mensajeDeError('errorEmail', '')
        var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (regex.test(Email) === false) {
            mensajeDeError('errorEmail', 'ERROR: campo Email')

        }
        else {
            mensajeDeError('errorEmail', '')
            EmailError = false;
        }
    }
}

//validar Numero
function validarNum() {
    var num = document.formulario.telef.value;
    localStorage.setItem('numero', num);
    if (num == "") {
        mensajeDeError('errorNum', 'ERROR: campo Telf')
    }
    else {
        mensajeDeError('errorNum', '');
        var regex = /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/;
        if (regex.test(num) === false) {
            mensajeDeError('errorNum', 'ERROR: campo Telf')
        }
        else {
            mensajeDeError('errorNum', '');
            NumeroError = false;

        }
    }
}

function validarCheckbox() {
    let grpd = document.formulario.grpd.checked;
    if (!grpd) {
        mensajeDeError('errorCheck', 'ERROR: acepta los terminos');
    }
    else {
        mensajeDeError('errorCheck', '');
        CheckError = false;
    }
};


function validarDniNie() {
    var dninie = ''
    dninie = document.formulario.dni.value;
    localStorage.setItem('dni', dninie);
    if (dninie == "") {
        mensajeDeError('errorDni', 'ERROR: DNI')
    }
    else {
        mensajeDeError('errorDni', '')
        var regex = /^[XYZ]?\d{8}[A-Z]$/i;
        if (regex.test(dninie) === false) {
            mensajeDeError('errorDni', 'ERROR: DNI')
        }
        else {
            mensajeDeError('errorDni', '')
            CheckDNINIE = false;
            let letra = dninie[dninie.length - 1];
            regex = /\d+/g;
            dni = parseInt(dninie.match(regex));
            if (LETRASDNI[dni % 23] != letra) {
                mensajeDeError('errorDni', 'ERROR: Letra no correcta')
            }
            else {
                mensajeDeError('errorDni', 'ERROR: DNI')
                CheckDNINIE = false;
            }
        }
    }
}

function validar() {
    if (!NombreError && !EmailError && !NumeroError && !CheckError && !CheckDNINIE) {
        localStorage.clear()
        return true;
    }
    else {
        validarNombre();
        validarEmail();
        validarNum();
        validarCheckbox();
        return false;
    }
}






