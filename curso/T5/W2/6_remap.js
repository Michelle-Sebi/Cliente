function map(array, funcion, index = 0, resultado = []) {
    
    if (index >= array.length) {
        return resultado;
    }

    resultado.push(funcion(array[index]));

    return map(array, funcion, index + 1, resultado);
}