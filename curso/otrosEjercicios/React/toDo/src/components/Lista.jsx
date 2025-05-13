import { useState } from "react";
import Recuento from "./Recuento";
import Tarea from "./Tarea";

function Lista(){

    const [tarea, setTarea]= useState("")
    const [lista,setLista]=useState([])
    const [completadas, setCompletadas] = useState(0)
    const [total, setTotal] = useState(0)
    const [pendientes,setPendientes] = useState(0)

    function addTarea() {
        if(tarea.trim() !==""){
            setLista([...lista, { texto: tarea, completada: false }]);
            setTarea("");
        }

        setTotal(prev => prev + 1)
        setPendientes(prev => prev + 1)
    }
   
    return<>
        <h1>ToDo List</h1>
        <label>ToDo:</label>
        <input 
        type="text"
        value={tarea} 
        placeholder="Añade a la lista"
        onChange={(event)=>setTarea(event.target.value)}></input>
        <button onClick={addTarea}>Add ToDo</button>

        <ul className="items">
            <Tarea 
            tarea={tarea}
            setTarea = {setTarea} 
            lista={lista}
            setLista={setLista}
            setCompletadas={setCompletadas}
            setPendientes={setPendientes} />
        </ul>

        <div className="recuento"><Recuento
            total={total}
            pendientes ={pendientes}
            completadas = {completadas}
        /></div>
    </>
}

export default Lista;