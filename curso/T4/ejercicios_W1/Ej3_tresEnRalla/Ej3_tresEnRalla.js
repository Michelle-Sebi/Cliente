
class Juego{

    constructor() {
        this.jugadorActual = null;
        this.tablero = [
            ["_", "_", "_"],
            ["_", "_", "_"],
            ["_", "_", "_"]
        ];
    }

    jugarEnCasilla (event){
        let casillaJugada = event.target;

        if(casillaJugada.textContent === "_"){
        casillaJugada.textContent = this.jugadorActual.simbolo;
        }

        this.jugadorActual = this.jugadorActual === this.jugador1 ? this.jugador2 : this.jugador1;

    }



    comprobarVictoria(){
        const t = this.tablero;
        // Comprobación de filas, columnas y diagonales
        for (let i = 0; i < 3; i++) {
            if (t[i][0] === this.jugadorActual.simbolo && t[i][1] === this.jugadorActual.simbolo && t[i][2] === this.jugadorActual.simbolo) return true;
            if (t[0][i] === this.jugadorActual.simbolo && t[1][i] === this.jugadorActual.simbolo && t[2][i] === this.jugadorActual.simbolo) return true;
        }
        if (t[0][0] === this.jugadorActual.simbolo && t[1][1] === this.jugadorActual.simbolo && t[2][2] === this.jugadorActual.simbolo) return true;
        if (t[0][2] === this.jugadorActual.simbolo && t[1][1] === this.jugadorActual.simbolo && t[2][0] === this.jugadorActual.simbolo) return true;

        return false;
    }
        
    
    setJugadores(jugador1, jugador2) {
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
        this.jugadorActual = jugador1;
    }

}


class Jugador{
    constructor(nombre,simbolo){
        this.nombre = nombre;
        this.simbolo = simbolo;
        

        if (simbolo !== "0" || simbolo !== "X"){
            throw console.error("Símbolo no permitido. Sólo 0 o X.");
        }
    }
}

export {Juego, Jugador};