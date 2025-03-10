
import {incrementar,reset} from './modulo1.js';



const parrafo = document.querySelector('.parrafo');
const botonIncrementar = document.querySelector('button:nth-of-type(1)');
const botonReset = document.querySelector('button:nth-of-type(2)');

parrafo.innerHTML = 0;

function incrementarBoton(){
  parrafo.innerHTML = incrementar();
}
function resetearBoton(){
  parrafo.innerHTML = reset();
}
botonIncrementar.addEventListener('click',incrementarBoton);
botonReset.addEventListener('click',resetearBoton);


