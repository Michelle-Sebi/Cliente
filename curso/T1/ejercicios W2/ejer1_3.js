function sumNumbers(...argumentos){
    
    let suma = 0;
    
    for (let i = 0; i < argumentos.length; i++) {
        
        if (typeof argumentos[i] === 'number') {
            suma += argumentos[i];
        }
    }

    return suma;
}

let resultado = sumNumbers('hola', 2, 3, [10, 20, 30], { value: 300 });
console.log(resultado);