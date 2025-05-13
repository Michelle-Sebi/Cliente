import {Juego, Jugador} from "./Ej3_tresEnRalla";

function dibujarTablero(){
    let tableroBase =[
       [ "_", "_", "_"],
       [ "_", "_", "_"],
       [ "_", "_", "_"]
    ];

    
    let tablero = document.getElementById('tablero');
    tablero.innerHTML = "";
    tablero.style.display = "grid"
    tablero.style.gridTemplateColumns = "repeat(3, 30px)";
    tablero.style.gridTemplateRows = "repeat(3, 30px)";

    tableroBase.forEach((fila, filaIndex) => {
        fila.forEach((celda, columnaIndex) => {
           let casilla = document.createElement('div');
            casilla.textContent = celda;
            tablero.appendChild(casilla);
            casilla.style.fontSize = "24px";

            casilla.addEventListener('click',(event) => Juego.jugarEnCasilla(event));
        })
    });
    
};


function estadoJuego(){
    let tableroActual;
    tableroBase = tableroActual;
    tableroActual.forEach((fila, filaIndex) => {
        fila.forEach((celda, columnaIndex) => {
           
            casilla.textContent = celda;
        })
    });
}

function iniciarJuego(){
    const jugador1 = new Jugador('Ramon','X', 0);
    const jugador2 = new Jugador('Ana','O', 0);

    Juego.setJugadores(jugador1, jugador2);

    dibujarTablero();

}

function tirada(){
   jugarEnCasilla();

   estadoJuego();
}

export {
    iniciarJuego,
    tirada
}