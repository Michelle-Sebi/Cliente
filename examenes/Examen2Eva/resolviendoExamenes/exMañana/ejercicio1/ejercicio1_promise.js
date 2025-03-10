import {banana, papaya, fruit} from "./fruits.js";


//APARTADO 1

//OPCION CON NEW PROMISE

function getFruit(){

    return fruit()
        .then((datos)=>{
            if(datos === 'papaya'){
                return (papaya()) // Devuelve la promesa de papaya
            
            }else if(datos === 'banana'){
                return (banana())
            }
        })

    // return new Promise((resolve, reject) => {
    //     const response = fruit().then((datos)=>{
    //         console.log(datos)
    //         return datos
    //     });
    //     if(response === 'papaya'){
    //         resolve (papaya())
    //     }
    //     else if(response === 'banana'){
    //         resolve (banana())
    //     }
    // })
}
    

getFruit()
.then((result)=>{
    
        console.log(result)
    })
    
.catch((error) => {
        console.error(error.message);
})


//APARTADO 2

function fiveFruits(){
    
    const frutas = []

    for (let index = 0; index < 5; index++) {
        frutas.push(getFruit())
    }
    
    return Promise.all(frutas)
    .then((result)=>{
        return result
    })
}


fiveFruits()
    .then((result)=>{
        console.log(result)
})
        

//APARTADO 3
