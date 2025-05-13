import { useState } from "react"
import Rey from "./Rey"

function Votacion(){
    const [mensaje, setMensaje]= useState("Vota por tu rey preferido")
    
    const recuento=(nombre, voto)=>{
        setMensaje(<div>Has votado por el rey <span className="rojo">{nombre}</span> con <span className="rojo">{voto}</span> votos</div>)
    }

    return<>
        <h2>{mensaje}</h2>
        <div className="contenedor">
            <Rey onAction={recuento} datos = {{nombre:"Ervigio", vacas: 3,imagen: "https://www.html6.es/img/rey_ervigio.png"}}/> 
            <Rey onAction={recuento} datos = {{nombre:"Atanagildo", vacas: 9,imagen: "https://www.html6.es/img/rey_atanagildo.png"}}/>
            <Rey onAction={recuento} datos = {{nombre:"Ataulfo", vacas: 11,imagen: "https://www.html6.es/img/rey_ataulfo.png"}}/>
            <Rey onAction={recuento} datos = {{nombre:"Leovigildo", vacas: 2,imagen: "https://www.html6.es/img/rey_leovigildo.png"}}/>
        </div>
        
    </>
}

export default Votacion