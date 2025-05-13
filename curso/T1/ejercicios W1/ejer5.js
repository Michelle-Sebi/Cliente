let matriz= [];
let cont = 1;
while (cont <= 20){
    matriz.push(Math.floor(Math.random() * 10));
    cont ++;
}

console.log(matriz);

matriz.sort((a,b)=> a - b);
console.log(matriz);

let veces = 1;
let moda = 0;
let repeticiones = 0;
for(let i=1; i <= matriz.length; i++){
    
    if (matriz[i]== matriz[i-1]){
        veces ++;
    }

    else{

        if(veces>repeticiones){
            repeticiones = veces;
            moda = matriz[i-1];
        }
        veces= 1;
    }       
}
console.log("Moda: "+ moda);
