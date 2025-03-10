import Fila from "./Fila"

function Filas({size, number, color, setBgColor}){
   
    const todasLasFilas=[]
    for(let i=0; i < number; i++){
        
        todasLasFilas.push(
        <Fila 
            key={i}
            size={size}
            color={color} 
            setBgColor = {setBgColor}
        />)
    }

    return<>
        <div className="filas">
        {todasLasFilas}
        </div>
    </>
}

export default Filas

