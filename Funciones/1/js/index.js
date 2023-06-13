





const area = (r, b, a, l, la) => {
    circulo = (r ^ 2) * Math.PI;
    Triangulo = (b * a) / 2;
    Cuadrado = l * la;

    return (
        "El area del ciruclo es :" + Math.floor(circulo) + "// El area del triangulo es :" + Triangulo + "// El area del cuadrado es :" + Cuadrado
    )
}


console.log(area(4, 5, 7, 8, 9)) 