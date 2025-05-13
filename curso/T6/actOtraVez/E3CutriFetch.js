const asyncRequest = require('./asyncRequest');

function cutriFetch(recurso){
    return new Promise((resolve, reject) => {
        asyncRequest(recurso, (result)=>{
            if (result) {
                resolve(result)
                
            }else{
                reject(new Error('Error'))
            }
        })
    })
}

cutriFetch('resource1')
.then((result)=>{
    console.log(`Obtenido: ${result}`)
})