import { useState } from "react"

export default function Buscador(props) {
  const {tema, nombre, setNombre, setTema}= props 

  const[inputNombre, setInputNombre] = useState(nombre)

  
  function onSetNombre(e){
    e.preventDefault()
    setNombre(inputNombre)
  }

  return<>
    <div className={`form-container tema-${tema}`}>
        <div className="theme-selector">
            <label>
                <input type="radio" name="tema" value="claro" checked={tema ==='claro'} onChange={e => setTema(e.target.value)}/>
                Tema claro
            </label>
            <label>
                <input type="radio" name="tema" value="oscuro" checked={tema ==='oscuro'} onChange={e => setTema(e.target.value)}/>
                Tema oscuro
            </label>
        </div>
        <form>
            <input type="text" onChange={(e)=>setInputNombre(e.target.value)} value={inputNombre}/>
            <button onClick={onSetNombre}>Buscar</button>
        </form>
    </div>
  </>
}
