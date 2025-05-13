import { useSelector } from 'react-redux';
import { selectClickado, selectClima } from './redux/climaSlice';

export default function ClimaActual() {
    const clima = useSelector(selectClima)
    const clickado =useSelector(selectClickado)
    
    return (
    <div>
        {console.log(clima)}
        {clima?.main ? (
            <div 
            id="weather-info" 
            style={{display:clickado?"block" : "none"}}>
                <h2>Clima Actual</h2>
                <p id="city-name">{clima.name}, {clima.sys.country}</p>
                <p id="temperature">Temperatura: {clima.main.temp}</p>
                <p id="description">Descripción: {clima.weather[0].description}</p>
                <p id="humidity">Humedad: {clima.main.humidity}</p>
                <p id="wind-speed">Velocidad del viento: {clima.wind.speed}</p>
            </div>
        ) : (
            <p>Cargando Clima...</p>
        )}
    </div>
  )

}


