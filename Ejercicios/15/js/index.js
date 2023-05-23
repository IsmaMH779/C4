let N = prompt("ingresa un año");

if (N % 4 == 0) {
    if (N % 100 == 0) {
        if (N % 400 == 0) {
            alert(N + " es un año bisiesto")
        }
        else {
            alert(N + " No es un año bisiesto")
        }
    }
    else {
        alert(N + " es un año bisiesto")
    }
}
else {
    alert(N + " No es un año bisiesto")
}


