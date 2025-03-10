
let cont = 1;
let salida;
while (cont <= 300){

    if(cont % 100 == 15){
        salida = "fizzbuzz";
    }
    
    else if (cont % 10 == 3){
        salida = "fizz";
    }

    else if (cont % 10 == 5){
        salida = "buzz";
    }

    else{
        salida = cont;
    }

    console.log(salida);

    cont ++;
}