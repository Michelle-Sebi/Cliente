const obtenerInformacionCompleta = require('./ejercicioA2');

async function ObtenerInfoMuchosUsuarios() {
    const ids = [1, 2, 3, 4, 5]; 
    try {
        
        const resultados = await Promise.all(ids.map(id => obtenerInformacionCompleta(id)));

        resultados.sort((a, b) => {
            const nombreA = a.usuario.nombre.toLowerCase();
            const nombreB = b.usuario.nombre.toLowerCase();
            return nombreA.localeCompare(nombreB);
        });
        
        console.log("Datos completos de los usuarios ordenados alfabéticamente:");
        console.table(resultados);
    } catch (error) {
        console.error("Error al obtener la información de los usuarios:", error.message);
    }
}

        
ObtenerInfoMuchosUsuarios();    
