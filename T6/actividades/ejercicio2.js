const asyncRequest = require('./asyncRequest');


let recursos=[];
let cantidadRecursos = 0;

function comprobar() {
    if (cantidadRecursos === 3) {
        recursos.forEach((recurso)=>{
            console.log(`Obtenido: ${recurso}`);
        }) 
        console.log('¡Completado!');
    }
}

asyncRequest('resource1', (result)=>{
    recursos[0]  = result;
    cantidadRecursos ++;
    comprobar();
});

asyncRequest('resource2', (result)=>{
    recursos[1] = result
    cantidadRecursos ++;
    comprobar();
});

    
asyncRequest('resource3', (result)=>{
    recursos[2]  = result
    cantidadRecursos ++;
    comprobar();
});

 






