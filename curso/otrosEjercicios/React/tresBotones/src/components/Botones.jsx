import { useState } from "react"
import logo from "../assets/react.svg"

function Botones(){
    const [contenido, setcontenido] = useState("")
    const [colorFondo, setColorFondo] = useState("white")

    return<>
        
        <button onClick={()=>setcontenido("un texto")} >Botón 1</button>
        <button onClick={()=>setcontenido(<img src={logo}/>)} >Botón 2</button>
        <button onClick={()=>setColorFondo("red")}>Botón 3</button>

        <div className="caja" style={{background:colorFondo}}>{contenido}</div>


    </>
}
export default Botones