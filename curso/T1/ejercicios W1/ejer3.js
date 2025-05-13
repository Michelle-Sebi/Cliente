
const dia = 7;
const mes = 6;

let arrayDias=["viernes", "sábado", "domingo", "lunes", "martes", "miércoles", "jueves"];
let arrayMeses=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


let contador = 0;
for (let i = 0; i<arrayMeses.length && i < (mes -1); i++){
    contador += (arrayMeses[i]);
}

let diasTotal = contador + dia;
let diaDeLaSemana = arrayDias[(diasTotal%7)-1];

console.log(diaDeLaSemana);