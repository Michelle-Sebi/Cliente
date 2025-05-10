import { useState } from "react"
import { selectNombre, selectTema, setNombre, setTema} from './redux/coctelSlice'
import {useSelector, useDispatch} from 'react-redux'

export default function Buscador() {
  const dispatch = useDispatch();
  const tema = useSelector(selectTema)
  const nombre = useSelector(selectNombre)
  const[inputNombre, setInputNombre] = useState(nombre)

  
  function onSetNombre(e){
    e.preventDefault()
    dispatch(setNombre(inputNombre))
  }

  return<>
    <div className={`form-container tema-${tema}`}>
        <div className="theme-selector">
            <label>
                <input type="radio" name="tema" value="claro" checked={tema ==='claro'} onChange={e =>dispatch( setTema(e.target.value))}/>
                Tema claro
            </label>
            <label>
                <input type="radio" name="tema" value="oscuro" checked={tema ==='oscuro'} onChange={e => dispatch( setTema(e.target.value))}/>
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
