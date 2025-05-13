import {Gato,imprimirEstado} from './funciones.mjs';

const gato1 = new Gato('Manolo');
const gato2 = new Gato('Juani');

imprimirEstado(gato1);
imprimirEstado(gato2);

console.log ('-----PASAN 3 SEGUNDOS----- \n');

gato1.pasaTiempo(3000);
gato2.pasaTiempo(3000);


imprimirEstado(gato1);
imprimirEstado(gato2);

gato1.alimentar();
gato1.jugar();
gato1.dormir();

imprimirEstado(gato1);
