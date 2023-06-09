var player1 = '';
var player2 = '';
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let displayed = false;
let counter = 1;


function startGame() {
    //call players input value
    player1 = document.getElementById('player1').value;
    player2 = document.getElementById('player2').value;

    //confirm players
    confirmP1 = false;
    confirmP2 = false;

    player1 != '' ? (confirmP1 = true, document.getElementById('errorp1').innerHTML = '') : (confirmP1 = false, document.getElementById('errorp1').innerHTML = 'introduce el jugador Rojo');
    player2 != '' ? (confirmP2 = true, document.getElementById('errorp2').innerHTML = '') : (confirmP2 = false, document.getElementById('errorp2').innerHTML = 'introduce el jugador azul');

    //verify if game are displayed
    if (!displayed) {
        if (confirmP1 && confirmP2) {
            displayed = true
            DisplayGame()
        }
    }
}


function DisplayGame() {

    array.forEach(e => {
        var cuadrado = document.createElement("button");
        cuadrado.id = 'butt-' + e;
        cuadrado.addEventListener('click', function pressed() {
            playerPressed(e)
        })
        document.getElementById('tablero').appendChild(cuadrado);

    })

}


function playerPressed(e) {
    if (counter % 2 != 0) {
        red = document.getElementById('butt-' + e);
        red.className = 'red';

        counter++;
    }
    else {
        blue = document.getElementById('butt-' + e);
        blue.className = 'blue';

        counter++;
    }

}




