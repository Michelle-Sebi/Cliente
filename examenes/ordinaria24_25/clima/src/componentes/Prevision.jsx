import { selectDatos } from "../redux/climaSlice"
import {  useSelector } from 'react-redux';

export default function Prevision() {

    const datos = useSelector(selectDatos)
    const prediccion = datos?.prediccion
    const lista = prediccion?.list?? []
    
    // console.log("obteniendo datos:", datos)
    // console.log("obteniendo prediccion:", prediccion)
    // console.log("obteniendo lista:", lista)

    return <>
        <h2>Predicción</h2>
        <ul id="forecast-list">
            {lista.slice(0, 5).map((item, index) => {
                // Crear el icono del clima
                const iconSrc = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
                const iconAlt = item.weather[0].description;
        
                // Crear la información del clima
                const date = new Date(item.dt * 1000).toLocaleString();
                const temp = `${item.main.temp}°`;
                const description = item.weather[0].description;
                return(
                    <li key={index}>
                        <img src = {iconSrc} alt={iconAlt}/>
                        <p>{date}</p>
                        <p>{temp}</p>
                        <p>{description}</p>
                    </li>
                )    
            })}

        </ul>

    </>
}

    