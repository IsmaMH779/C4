let participantes = ["carlos", "marcos", "javier", "jorge", "oscar", "pepe"];

let LeaderBoard = [];
let i = 1;
while (participantes.length > 0) {

    let random = Math.floor(Math.random() * participantes.length);
    LeaderBoard = [...LeaderBoard, "#" + i + " " + participantes[random]]
    participantes.splice(random, 1);
    i++
}

console.log(LeaderBoard)