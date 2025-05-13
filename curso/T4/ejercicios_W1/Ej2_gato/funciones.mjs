
class Gato {

    valorAleatorio(){
       return Math.floor(Math.random() * 11); 
    }
    
    valoresLimite(propiedad){
        return Math.max(0, Math.min(propiedad, 10))
    }

    constructor(nombre){
        this.nombre = nombre;
        this.hambre = this.valorAleatorio();
        this.cansancio = this.valorAleatorio();
        this.felicidad = this.valorAleatorio();
    }


    pasaTiempo(ms){
        const tiempoPasado = ms / 1000; 
        
        this.hambre += tiempoPasado;
        this.cansancio += tiempoPasado;
        this.felicidad -= tiempoPasado;

        this.hambre = this.valoresLimite(this.hambre);
        this.cansancio = this.valoresLimite(this.cansancio);
        this.felicidad = this.valoresLimite(this.felicidad);
    }

    alimentar(){
        this.hambre --;

        return (this.hambre = this.valoresLimite(this.hambre));
    }

    dormir(){
        this.cansancio --;

        return (this.cansancio = this.valoresLimite(this.cansancio));
    }

    jugar() {
        this.felicidad++;
        
        return (this.felicidad = this.valoresLimite(this.felicidad));
    }
}

function imprimirEstado(gato){
    console.log(`Nombre: ${gato.nombre}\n`);
    console.log(`Hambre = ${gato.hambre}`);
    console.log(`Cansancio = ${gato.cansancio}`);
    console.log(`Felicidad = ${gato.felicidad}\n`);
}


export {Gato,imprimirEstado};
