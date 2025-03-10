function obtenerInformacionUsuario(idUsuario){
    let infoUsuario = {
        id:idUsuario, 
        nombre: 'Usuario Par',
        tipo: 'Regular'
    }
    return new Promise((resolve, reject) => {
        let delay = Math.random()*(3000 - 500) + 500;
        setTimeout(() => {
            if(idUsuario % 2 == 0){
                resolve(infoUsuario)
            }else{
                reject(new Error('Usuario no permitido'))
            }

        }, delay);
    })
}

obtenerInformacionUsuario(2)
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
});

// obtenerInformacionUsuario(5)
// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// });