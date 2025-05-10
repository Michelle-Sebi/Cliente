const serverDivisa = 'https://api.frankfurter.app'
const url = '/currencies'

const serverCambio = 'https://api.frankfurter.dev/v1/'

async function fetchLista(urlCompleta){
    const response = await fetch(urlCompleta)
    
    if(!response.ok){
        throw new Error(
            'Error en el fetch divisa', response.status
        )
    }
    const resultado = await response.json() 

    return resultado
}

async function obtenerDivisa(text){
    const listadoDivisas = await fetchLista(serverDivisa + url)

    const divisasTexto= Object.entries(listadoDivisas).filter(([codigo,nombre])=>nombre.toLowerCase().includes(text.toLowerCase()))

    if(divisasTexto.length === 0){
        throw new Error(
            `No se ha encontrado ninguna divisa con el nombre ${text}`
        )
    }

    const divisa = divisasTexto[0][0]
 
    return divisa
} 

function obtenerFechas(date, weeks){
    const fechas=[]
    for (let index = 1; index <= weeks; index++) {
        const dateObj = new Date(date)
        dateObj.setDate(dateObj.getDate()-(index*7))
        const newDate = dateObj.toISOString().split('T')[0]; 
        fechas.push(newDate)  
    }
    return  fechas
}
    

async function divisaMinCambio(date, divisa){

    const listaCambio =await fetchLista(serverCambio + date + `?from=${divisa}`)

    let cambio = Object.values(listaCambio.rates)[0];
    let minCambio = 0;
    
    Object.entries(listaCambio.rates).map(([codigo,nuevoCambio])=>{

        if(nuevoCambio < cambio){
            cambio = nuevoCambio
            minCambio = [codigo]
        }
    })
    return minCambio
}
        

async function cambioDiaAnterior(date,divisa){
    const dateObj = new Date(date)
    dateObj.setDate(dateObj.getDate()-1)
    const newDate = dateObj.toISOString().split('T')[0]; 
    const divMinCambio = await divisaMinCambio(date,divisa)
    const response = await fetch(serverCambio + newDate + `?from=${divMinCambio}&to=EUR`)
    if (!response.ok){
        throw new Error(
            'Error en el fetch cambio'
        )
    }
    const listaCambio =await response.json();
    const resultado =Object.entries(listaCambio.rates)
    const respuesta = {
        currency:divMinCambio,
        [resultado[0][0]]:resultado[1]}
    return resultado
}


async function getMinRates(date, currency, weeks){
    const divisa= await obtenerDivisa(currency)
    const promesas = [divisaMinCambio(date,divisa),cambioDiaAnterior(date,divisa)]
    const fechas = obtenerFechas(date,weeks)
    
    const [resulPromesas] = await Promise.all(promesas)
    const resul2 = fechas.map(fecha => ({

        'day': fecha,
        'min': resulPromesas
    }));

   
    const resulFinal = {
        'currency': divisa,
        'rates':resul2
    }
   
    return resulFinal
}

export {getMinRates}