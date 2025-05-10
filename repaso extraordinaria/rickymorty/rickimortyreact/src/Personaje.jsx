import { useEffect, useState } from 'react'
import Episodios from './Episodios'

export default function Personaje({personalidad}) {
    const [infoEpisodios, setInfoEpisodios]= useState([])

    useEffect(()=>{
        const obtenerInfoEpisodios = async ()=>{
            if(!personalidad?.episode)return
            const urlsEpisodios = personalidad.episode
            const promesas =urlsEpisodios.map(async url=>{
                const res = await fetch(url)
                if(!res.ok){
                    throw new Error(`Error en el fetch de episodios: ${res.status}`)
                }
                return res.json()
            })
            const datosEpisodios = await Promise.all(promesas)
            setInfoEpisodios(datosEpisodios)
        }
        obtenerInfoEpisodios()
    },[personalidad])

        
    return (
        <div className="card">
            <ul key={personalidad.name}>
                <h2>{personalidad.name}</h2>
                <img src={personalidad.image}/>
                <p><strong>Estado:</strong> {personalidad.status}</p>
                <p><strong>Especie:</strong> {personalidad.species}</p>
                
                <h3>Episodios</h3>
                {infoEpisodios.map((episodio, i)=>(
                <Episodios key={i} episodio={episodio}/>
                ))}
            </ul> 
        </div>
    )
}


