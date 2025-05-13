
import './App.css'
import Ciudades from './componentes/Ciudades'
import Clima from './componentes/Clima'
import Prevision from './componentes/Prevision'
import { 
  setUnidad, 
  selectUnidad,
  selectCiudad, 
  setCiudad,
  setFavoritas,
  selectFavoritas,
  buscarClima,
  setClickado,
  selectClickado
} from './redux/climaSlice'
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const unidad = useSelector(selectUnidad)
  const ciudad = useSelector(selectCiudad)
  const favoritas = useSelector(selectFavoritas)
  const clickado = useSelector(selectClickado)
  const dispatch = useDispatch();
 

  const agregarFavoritas = ()=>{
    const nuevasFavoritas=[...favoritas]
    nuevasFavoritas.push(ciudad)
    dispatch(setFavoritas(nuevasFavoritas))
  }

  const onBuscarClima = ()=>{
    dispatch(buscarClima( ciudad, unidad ))
    dispatch(setClickado(true))
    dispatch(setCiudad(''))
  }

  return (
    <>
      <div className="container">
        <h1>Monitoreo de Clima</h1>

        <input 
        type="text" 
        id="city-input" 
        placeholder="Ingresa una ciudad"
        value={ciudad}
        onChange={(e)=>{dispatch(setCiudad(e.target.value))}}  
        />
        <button 
        id="search-btn"
        onClick={onBuscarClima}>Buscar Clima</button>
        
        <button 
        id="save-fav-btn"
        onClick={()=>{agregarFavoritas()}}>Guardar Ciudad Favorita</button>

        {console.log("ciudad elegida:", ciudad)}
        {console.log("ciudades favoritas:", favoritas)}
       
        <div>
            <label htmlFor="temp-unit">Unidad de Temperatura:</label>
            <select id="temp-unit" value={unidad} onChange={(e)=>{dispatch(setUnidad(e.target.value))}}>
                <option value="metric">°C</option>
                <option value="imperial">°F</option>
            </select>
            {console.log("unidad elegida:", unidad)}
        </div>

        <div id="weather-info" style={{ display: clickado ? "block" : "none"}}>
            <Clima/>
        </div>

        <div id="forecast-info" style={{ display: clickado ? "block" : "none"}}>
            <Prevision/>
        </div>

        <div id="favorite-cities">
            <Ciudades/>
        </div>

      </div>
    
    </>
  )
}

export default App
