import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Episodios from './Episodios'
import { selectInfoEpisodios, obtenerInfoEpisodios } from './redux/rickimortySlice'

export default function Personaje({personalidad}) {
    const dispatch = useDispatch();
    const infoEpisodios = useSelector(selectInfoEpisodios)

    useEffect(()=>{
        if (personalidad?.episode) {
            dispatch(obtenerInfoEpisodios(personalidad.episode));
          }
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


