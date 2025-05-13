import { selectDatos } from "../redux/climaSlice"
import {  useSelector } from 'react-redux';

export default function Clima() {
    const datos = useSelector(selectDatos)
    const clima = datos?.clima
    const name = clima?.name?? []
    const country = clima?.sys?.country ?? "N/A"; 
    
    console.log("obteniendo datos:", datos)
    console.log("obteniendo clima:", clima)
  
    
    console.log("obteniendo name:", typeof name, name);

    if (!datos) {
        return <p>Obteniendo datos...</p>
      }
    
      if (!clima) {
        return <p>Error: No se pudo obtener el clima.</p>
      }

    return <>
        <h2>Clima Actual</h2>
        
        <div>
            <li id="id">{name}, {country}</li>
            <p id="temperature">Temperatura: {clima?.main?.temp ?? "N/A"}</p>
            <p id="description">Descripción: {clima?.weather?.[0]?.description ?? "N/A"}</p>
            <p id="humidity">Humedad: {clima?.main?.humidity ?? "N/A"}%</p>
            <p id="wind-speed">Velocidad del viento: {clima?.wind?.speed ?? "N/A"} m/s</p>
      </div>
    </>
}
