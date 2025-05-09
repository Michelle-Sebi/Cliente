
import Listado from './Lista.jsx'
import { useState } from 'react'
import './App.css'

function App() {
  
  const [contador, setContador] = useState(0)
  const [num, setNum] = useState (0)
  const [listado, setListado] = useState ([])


  return (
    <>
      <div>
        
        <h1>{contador}</h1>
        <p>Modificar contador en</p>
        <input
        value={num} onChange={(e)=>setNum(Number(e.target.value))}></input>
        <br></br>
        <button 
        style={{marginRight: "6px"}}
        onClick={()=>setContador(contador + num)}>
          Incrementar
        </button>
        <button style={{marginRight: "6px"}} onClick={()=>setContador(contador - num)}>Decrementar</button>
        <button onClick={()=>setContador(0)}>Reiniciar</button>

        <Listado listado={listado} setListado={setListado} num={num}/>

      </div>
      
    </>
  )
}

export default App
