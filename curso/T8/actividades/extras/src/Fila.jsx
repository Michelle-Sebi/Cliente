import Cuadrados from "./Cuadrados"

function Fila(props){
    console.log('creando fila')
    const { size, color, setBgColor } = props
    
    const fila = [<div
        
        className="fila"    
        style={{
            width:`${size}px`,
            height:`${size}px`,
            background: color
        }}>
        <Cuadrados 
            size = {size}
            color = {color}
            setBgColor = {setBgColor}
        />
    </div>]    

    return fila
}

export default Fila
    
    
        
   

   
