import { banana, papaya } from './fruits.js'

// banana().
// then((data)=>{
//     console.log(`obteniendo ${data}`)
// })

//APARTADO 1


async function timedExecution(funcion){
    
    const timeStart = performance.now()
    
    const result = await funcion()
    const timeEnd = performance.now()
    const time = timeEnd - timeStart
    return{
        result: result,
        time: time
    }
}

// timedExecution(banana())
// .then((data)=>{
//    const res =JSON.stringify(data)
//    console.log(res)
// })   

console.log(await timedExecution(banana))

//APARTADO 2

async function quickFruits(fruta, num) {
    let frutaElegida;
    const promesas=[];

    fruta === 'papaya'? frutaElegida=papaya: frutaElegida=banana

    for (let index = 0; index < num; index++) {
        promesas.push(timedExecution(frutaElegida))
    }

    const result = await Promise.all(promesas)
    return result.map(({result,time})=>({
        fruit: result,
        time
    }))
}
     
// quickFruits(papaya,4)
// .then((data)=>{
//     const res =JSON.stringify(data)
//     console.log(res)
//  }) 

console.log(await quickFruits('banana', 3))

//APARTADO 3

async function fruitRace() {
    try {
        return await Promise.any([
            quickFruits('banana', 5),
            quickFruits('papaya', 5)
        ])
    } catch (error) {
        throw new Error('¡Piña!')
    }


    // try {
    //     const promesas = [quickFruits(banana,5), quickFruits(papaya,5)]
    //     for await (const result of promesas){
    //         console.log(result)
    //     }
    // }catch (error) {
    //     console.error('Piña!')
    // }
 }

// fruitRace();

console.log(await fruitRace())