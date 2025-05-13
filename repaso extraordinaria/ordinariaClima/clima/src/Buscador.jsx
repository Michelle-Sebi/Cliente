import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { selectCiudad, selectFavoritas, setFavoritas, setCiudad, selectUnidadTemperatura, setUnidadTemperatura, peticionClima, setClickado } from "./redux/climaSlice";

export default function Buscador() {
    const dispatch = useDispatch();
    const [inputCiudad,setInputCiudad]= useState('')
    const favoritas = useSelector(selectFavoritas)
    const ciudad = useSelector(selectCiudad)
    const unidadTemperatura = useSelector(selectUnidadTemperatura)

    function guardandoFavoritas(){
        
        console.log('ciudad', ciudad) 
        let nuevasFavoritas = [...favoritas]
        if (inputCiudad !== '' && !nuevasFavoritas.includes(inputCiudad)){
            nuevasFavoritas.push(inputCiudad)
        }
        dispatch(setFavoritas(nuevasFavoritas))
    }

    useEffect(()=>{
        if(ciudad !== ''){
            dispatch(setClickado(true))
            dispatch(peticionClima(inputCiudad, unidadTemperatura))
            console.log('ciudad', ciudad) 
        }
    },[ciudad,dispatch, inputCiudad, unidadTemperatura])

    function buscandoClima(){
        dispatch(setCiudad(inputCiudad)) 
    }
        

    return (
        <div>
            <input 
            type="text" 
            id="city-input" 
            placeholder="Ingresa una ciudad"
            value={inputCiudad}
            onChange={(e)=>setInputCiudad(e.target.value)}    
            />
            <button 
            id="search-btn"
            onClick={()=>buscandoClima()}>
                Buscar Clima
            </button>
            
            <button 
            id="save-fav-btn"
            onClick={()=>guardandoFavoritas()}>
                Guardar Ciudad Favorita
            </button>

            <div>
                <label htmlFor="temp-unit">Unidad de Temperatura:</label>
                <select id="temp-unit" 
                value={unidadTemperatura}
                onChange={(e)=>dispatch(setUnidadTemperatura(e.target.value))}>
                    <option value="metric">°C</option>
                    <option value="imperial">°F</option>
                </select>
            </div>
        </div>
  )
}
