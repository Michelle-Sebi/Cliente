import { useState } from "react"

function Tarea(props) {
   const {lista, setCompletadas, setPendientes,setLista}= props
   

   function actualizarRecuento(index) {
        setLista(prevLista => 
            prevLista.map((tarea, i) => 
                i === index ? { ...tarea, completada: true } : tarea
            )
        );
        setCompletadas(prev => prev + 1)
        setPendientes(prev => prev - 1)
        
    }

    return<>
        <ul>
            {lista.map((tarea, index)=>(
                    <li
                     key={index}
                     style={{textDecoration: tarea.completada ? "line-through" : "none" }}>
                        {tarea.texto}
                        {!tarea.completada && (
                        <button onClick={() => actualizarRecuento(index)}
                        //En JavaScript, la expresión condición && elemento solo muestra el elemento si la condición es true
                        >Hecho</button>
                        )}
                    </li>
                ))
            }
            
        </ul>       
    </>
}


export default Tarea