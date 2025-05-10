import {   getMinRates} from "./infoDivisa.js";







const date = '1999-01-05'
const currency = 'dol'
const weeks = 3

// const minCambio = divisaMinCambio(date)
// console.log(cambioDiaAnterior(minCambio,date))


// console.log(getMinRates())

getMinRates(date, currency, weeks)
    .then(resultado => {
        console.log( resultado);
    })
    .catch(error => {
        console.error("Error:", error); 
    });