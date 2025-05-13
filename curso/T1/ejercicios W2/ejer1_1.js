function uniques(...argumentos){
    return [...new Set (argumentos)];
}

let a = uniques('pt', 5, 'uno', 5);

console.log(a);


