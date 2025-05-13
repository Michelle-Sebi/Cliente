const asyncRequest = require('./asyncRequest');


let res1 = null;
let res2 = null;
let res3 = null;

function comprobar() {
    if (res1 && res2 && res3) {
        console.log('¡Completado!');
    }
}

asyncRequest('resource1', (result)=>{
    res1 = result
    console.log('haciendoCosas con ' + res1)
    comprobar();
});

asyncRequest('resource2', (result)=>{
    res2 = result
    console.log('haciendoCosas con ' + res2)
    comprobar();
});

asyncRequest('resource3', (result)=>{
    res3 = result
    console.log('haciendoCosas con ' + res3)
    comprobar();
});


console.log('¿completado?');