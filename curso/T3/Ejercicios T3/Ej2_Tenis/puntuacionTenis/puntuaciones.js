let puntuacionJugador1;
let puntuacionJugador2;
let juegoFinalizado = false;
const puntos =[0,15,30,40];

function iniciarJuego(){
    puntuacionJugador1 = 0;
    puntuacionJugador2 = 0;
    juegoFinalizado = false;
};


function puntoJugador(jugador){
    
    let contador1 = 0;
    let contador2 = 0;

    if(juegoFinalizado){
        throw new Error('El juego ya ha finalizado');
    }
    if (jugador !== 1 && jugador !== 2) {
        throw new Error('Jugador inválido');
    }
    
    if (jugador === 1) {
        if (puntuacionJugador1 === 40 && puntuacionJugador2 < 40) {
            juegoFinalizado = true; 
        } else {
            if (puntuacionJugador1 === 0) puntuacionJugador1 = 15;
            else if (puntuacionJugador1 === 15) puntuacionJugador1 = 30;
            else if (puntuacionJugador1 === 30) puntuacionJugador1 = 40;
        }
    } else if (jugador === 2) {
        if (puntuacionJugador2 === 40 && puntuacionJugador1 < 40) {
            juegoFinalizado = true; // El jugador 2 gana el juego
        } else {
            if (puntuacionJugador2 === 0) puntuacionJugador2 = 15;
            else if (puntuacionJugador2 === 15) puntuacionJugador2 = 30;
            else if (puntuacionJugador2 === 30) puntuacionJugador2 = 40;
        }
    }
}
//     else{
//         if (jugador === 1){
//             for(i =0; i<=puntos.length; i++){
//             puntuacionJugador1 += puntos[contador1];
//             contador1 ++;
//             }
//         }else if (jugador == 2) {
//             for(i =0; i<=puntos.length; i++){
//                 puntuacionJugador2 += puntos[contador2];
//                 contador2 ++;
//                 }
//         } else {
//             throw new Error('Jugador inválido');
//         }

//         if(puntuacionJugador1== 40 && puntuacionJugador2== 40){
//             return Deuce;
//         }else if (puntuacionJugador1 = 40) {

            
//         } else {
            
//         } () {
            
//         } else {
            
//         }
//     }
// }

// function resultado(){

// }

// export {resultado, puntoJugador, iniciarJuego};