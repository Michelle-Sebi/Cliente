function obtenerInformacionUsuario(Idusuario){
    let nombre, tipo;


    return new Promise((resolve, reject) => {
        let randomDelay = Math.random()*(3000-500) + 500;
        setTimeout(() => {
            if(Idusuario % 2 == 0){
                nombre ='Usuario Par'
                tipo = 'Regular'
                
                resolve({ id:  Idusuario,nombre: nombre, tipo: tipo});
            }else{
                reject(new Error('Error: Usuario Impar no permitido'))
            }

        }, randomDelay);
    })
}

obtenerInformacionUsuario(2)
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})

obtenerInformacionUsuario(3)
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})
