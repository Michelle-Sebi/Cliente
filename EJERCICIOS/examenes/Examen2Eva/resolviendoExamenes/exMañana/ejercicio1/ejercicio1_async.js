import {banana, papaya, fruit} from "./fruits.js";

//APARTADO 1

async function getFruit() {
    const which = await fruit()
    return which == 'banana' ? banana() : papaya()
  }
  
  console.log(await getFruit())

//APARTADO 2


async function fiveFruits(){

    const frutas = []

    for (let index = 0; index < 5; index++) {
        const result =  getFruit();

        frutas.push(result);
    }
    const resultado = await Promise.all(frutas)
    return resultado;
}


// fiveFruits()
// .then((result) => {
//     console.log(result); })


//APARTADO 3



async function tenFruits() {

    try {
        const repeticiones = [fiveFruits(), fiveFruits(), fiveFruits()];
    //    const repeticiones = Array.from({length: 3}, ()=>fiveFruits());

       for await (const fruits of repeticiones){
            fruits.forEach(fruit => {
                console.log(fruit)
            });
       }
        
        
    } catch{
        throw new Error("Mango!")
        
    }
    
    
}

tenFruits();
