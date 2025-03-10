
function obtenerInfoUsuarios(id){
    let infoUsuario={
        id:id,
        nombre:`Usuario ${id}`
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() < 0.95){
                resolve(infoUsuario)
            }else{
                reject(new Error('Error'))
            }
            
        }, 1000);
    })
}

function obtenerInfoPosts(id){
    let postUsuario = [
        {id: {id}, 
        titulo: `Post ${id}`,
        contenido: 'Lorem ipsum dolor sit amet' }
    ]
        
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() < 0.95){
                resolve(postUsuario)
            }else{
                reject(new Error('Error'))
            }
        }, 2000);
    })
}

function  obtenerInformacionCompleta(idUsuario){
    return Promise.all([obtenerInfoUsuarios(idUsuario), obtenerInfoPosts(idUsuario)])
    .then(([usuario, posts])=>{
        return{
             usuario,   
             posts
        }
    })
    .catch((error)=>{
        throw new Error(`Alguna promesa ha fallado: ${error.message} `);
    })
}
  

obtenerInformacionCompleta(3)
.then((result)=>{
    console.table(result);
})
.catch((error)=>{
    console.error(error.message)
})

