const asyncRequest = require('./asyncRequest');


function cutriFetch(recurso){
    
    return new Promise((resolve, reject) => {
        asyncRequest(recurso, (result)=>{
            if(result){
                resolve(result)
            }else{
                reject(new Error('Error'))
            }
        })
    })
}

cutriFetch('resource1').then((result)=>{
    console.log(`Obtenido: ${result}`);
    })
    .catch((error) => {
        console.error(error.message);
});


//EJERCICIO 1

let res1 = null;
let res2 = null;
let res3 = null;

function comprobar() {
    if (res1 && res2 && res3) {
        console.log('¡Completado!');
    }
}

cutriFetch('resource1')
.then((result)=>{
    res1 = result;
    console.log(`Obtenido: ${result}`);
    comprobar();
    return cutriFetch('resource2')
})
.then((result)=>{
    res2 = result;
    console.log(`Obtenido: ${result}`);
    comprobar();
    return cutriFetch('resource3')
})
.then((result)=>{
    res3 = result;
    console.log(`Obtenido: ${result}`);
    comprobar();
})
.catch((error) => {
    console.error(error.message);
});