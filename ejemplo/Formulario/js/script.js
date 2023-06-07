let NombreError = EmailError = NumeroError = true;

//Mensaje de error
function mensajeDeError(id, mensaje) {

    document.getElementById(id).innerHTML = mensaje;

}

//validar nombre
function validarNombre() {
    var nombre = document.formulario.nombre.value;
    if (nombre == "") {
        mensajeDeError('errorNombre', 'ERROR: campo de nombre')
    }
    else {
        mensajeDeError('errorNombre', '')
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(nombre) === false) {
            document.getElementById("errorNombre").innerHTML = "ERROR: campo de nombre";
        }
        else {
            document.getElementById("errorNombre").innerHTML = "";
            NombreError = false;
        }
    }
}

//validar email
function validarEmail() {
    var Email = document.formulario.email.value;
    if (Email == "") {
        mensajeDeError('errorEmail', 'ERROR: campo Email')
    }
    else {
        mensajeDeError('errorEmail', '')
        var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (regex.test(Email) === false) {
            document.getElementById("errorEmail").innerHTML = "ERROR: campo de Email";
        }
        else {
            document.getElementById("errorEmail").innerHTML = "";
            EmailError = false;
        }
    }
}

//validar Numero
function validarNum() {
    var num = document.formulario.telef.value;
    if (num == "") {
        mensajeDeError('errorNum', 'ERROR: campo Telf')
    }
    else {
        mensajeDeError('errorNum', '');
        var regex = /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/;
        if (regex.test(num) === false) {
            document.getElementById("errorNum").innerHTML = "ERROR: campo Telf";
        }
        else {
            document.getElementById("errorNum").innerHTML = "";
            NumeroError = false;

        }
    }
}


function validar() {

    if (!NombreError && !EmailError && !NumeroError) return true;
    else {
        validarNombre();
        validarEmail();
        validarNum();
        return false;
    }

}




