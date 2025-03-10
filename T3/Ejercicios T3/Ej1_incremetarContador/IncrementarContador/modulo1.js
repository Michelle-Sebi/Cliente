let contador = 0;

function incrementar(){
    contador += 1;
    return contador;
}

function reset(){
    contador = 0;
    return contador;
}

export {incrementar,reset};