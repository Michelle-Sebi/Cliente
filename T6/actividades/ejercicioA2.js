const { Promise } = require("node-fetch");

function obtenerInformacionUsuario(Id){
    
    return new Promise((resolve, reject) => {
        let randomDelay = Math.random()*(1000-500) + 500;
        setTimeout(() => {
            let llamada;
            if(Math.random() < 0.95){    
                resolve({ id: Id, nombre: `Usuario ${Id}`});
            }else{
                reject(new Error('Error: algo ha fallado'))
            }
        }, randomDelay);
    })
}

function generarLoremAleatorio(long){
    const palabrasLorem = [
        "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", 
        "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", 
        "et", "dolore", "magna", "aliqua", "ut", "enim", "ad", "minim", "veniam","quis", "nostrud", "exercitation", "ullamco", "laboris", "nisi","ut", "aliquip", "ex", "ea", "commodo", "consequat", "duis", "aute","irure", "dolor", "in", "reprehenderit", "in", "voluptate", "velit","esse", "cillum", "dolore", "eu", "fugiat", "nulla", "pariatur"
    ];

    let frase = [];
    for (let i =0; i<long; i++){
        let index = Math.floor(Math.random()*palabrasLorem.length);
        frase.push(palabrasLorem[index]);
    }
    return frase.join(' ');
}

function obtenerInfoPosts(Id){
    return new Promise((resolve, reject) => {
        let randomDelay = Math.random()*(1000-500) + 500;
        let contenido = generarLoremAleatorio(10);
        setTimeout(() => {
            if(Math.random() < 0.95){
                resolve({ id:Id, titulo: `Post ${Id}`, contenido: contenido});
            }else{
                reject(new Error('Error: algo ha fallado'))
            }
        }, randomDelay);
    })
}

function obtenerInformacionCompleta(Id){
    return Promise.all([obtenerInformacionUsuario(Id), obtenerInfoPosts(Id)])
    .then(([usuario,posts])=>{
        return{
            usuario,
            posts
        }
    })
    .catch((error)=>{
        throw new Error(`Alguna promesa ha fallado: ${error.message} `);
    })
}
        

obtenerInformacionCompleta(1)
.then((result)=>{
    console.table(result);
})        
.catch((error)=>{
    console.error(error.message);
})

                
module.exports = obtenerInformacionCompleta;                
