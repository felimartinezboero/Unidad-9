let jugador = 0;
let computadora = 0;

const opciones = ["piedra", "papel", "tijera"];

const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

const result = document.getElementById("result");
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");


// Botones del juego
document.getElementById("rock").addEventListener("click", function() {
comenzar("piedra");
});

document.getElementById("paper").addEventListener("click", function() {
comenzar("papel");
});

document.getElementById("scissors").addEventListener("click", function() {
comenzar("tijera");
});


// Función principal
function comenzar(eleccion) {

if (jugador >= 3 || computadora >= 3) {
return;
}

let numero = Math.floor(Math.random() * 3);
let maquina = opciones[numero];

playerChoice.innerText = "Jugador: " + eleccion;
computerChoice.innerText = "Computadora: " + maquina;


if (eleccion === maquina) {

result.innerText = "🤝 Empate";

} else if (ganaJugador(eleccion, maquina)) {

jugador++;
result.innerText = "🎉 Ganaste esta ronda";

} else {

computadora++;
result.innerText = "💻 Ganó la computadora";
}


mostrarPuntos();

comprobarFinal();
}


// Decide si ganó el jugador
function ganaJugador(jugador, maquina) {

if (jugador === "piedra" && maquina === "tijera") {
return true;
}

if (jugador === "papel" && maquina === "piedra") {
return true;
}

if (jugador === "tijera" && maquina === "papel") {
return true;
}

return false;
}


// Actualiza el marcador
function mostrarPuntos() {

playerScore.innerText = jugador;
computerScore.innerText = computadora;
}


// Comprueba si alguien llegó a 3
function comprobarFinal() {

if (jugador === 3) {

result.innerText = "🏆 ¡Ganaste el juego!";

} else if (computadora === 3) {

result.innerText = "💻 ¡La computadora ganó!";
}
}


// Reiniciar
document.getElementById("resetGame").addEventListener("click", function() {

jugador = 0;
computadora = 0;

mostrarPuntos();

result.innerText = "Elegí una opción para jugar";

playerChoice.innerText = "Jugador: -";
computerChoice.innerText = "Computadora: -";
});
