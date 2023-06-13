var player1 = '';
var player2 = '';
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let displayed = false;
let counter = 1;
let bluePlayer = [];
let redPlayer = [];
let haveWiner = false;
let switchPlayer = null;

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
};


function DisplayGame() {

    array.forEach(e => {
        var cuadrado = document.createElement("button");
        cuadrado.id = 'butt-' + e;
        cuadrado.addEventListener('click', function pressed() {
            playerPressed(e)

        })
        document.getElementById('tablero').appendChild(cuadrado);

    })
};


function playerPressed(e) {

    button = document.getElementById('butt-' + e);

    counter % 2 != 0 ?
        ((!button.classList.contains('red') && !button.classList.contains('blue') ? (button.className = 'red', counter++, redPlayer.push(e)) : null), switchPlayer = redPlayer) :
        ((!button.classList.contains('red') && !button.classList.contains('blue') ? (button.className = 'blue', counter++, bluePlayer.push(e)) : null), switchPlayer = bluePlayer);

    rules()
};

function rules() {
    switchPlayer.includes(1) && switchPlayer.includes(2) && switchPlayer.includes(3) ? (!haveWiner ? ((switchPlayer == redPlayer ? alert(player1 + ' ha ganado') : alert(player2 + ' ha ganado')), haveWiner = true) : null) : null;
    switchPlayer.includes(4) && switchPlayer.includes(5) && switchPlayer.includes(6) ? (!haveWiner ? ((switchPlayer == redPlayer ? alert(player1 + ' ha ganado') : alert(player2 + ' ha ganado')), haveWiner = true) : null) : null;
    switchPlayer.includes(7) && switchPlayer.includes(8) && switchPlayer.includes(9) ? (!haveWiner ? ((switchPlayer == redPlayer ? alert(player1 + ' ha ganado') : alert(player2 + ' ha ganado')), haveWiner = true) : null) : null;

    switchPlayer.includes(1) && switchPlayer.includes(4) && switchPlayer.includes(7) ? (!haveWiner ? ((switchPlayer == redPlayer ? alert(player1 + ' ha ganado') : alert(player2 + ' ha ganado')), haveWiner = true) : null) : null;
    switchPlayer.includes(2) && switchPlayer.includes(5) && switchPlayer.includes(8) ? (!haveWiner ? ((switchPlayer == redPlayer ? alert(player1 + ' ha ganado') : alert(player2 + ' ha ganado')), haveWiner = true) : null) : null;
    switchPlayer.includes(3) && switchPlayer.includes(6) && switchPlayer.includes(9) ? (!haveWiner ? ((switchPlayer == redPlayer ? alert(player1 + ' ha ganado') : alert(player2 + ' ha ganado')), haveWiner = true) : null) : null;

    switchPlayer.includes(3) && switchPlayer.includes(5) && switchPlayer.includes(7) ? (!haveWiner ? ((switchPlayer == redPlayer ? alert(player1 + ' ha ganado') : alert(player2 + ' ha ganado')), haveWiner = true) : null) : null;
    switchPlayer.includes(1) && switchPlayer.includes(5) && switchPlayer.includes(9) ? (!haveWiner ? ((switchPlayer == redPlayer ? alert(player1 + ' ha ganado') : alert(player2 + ' ha ganado')), haveWiner = true) : null) : null;
};



