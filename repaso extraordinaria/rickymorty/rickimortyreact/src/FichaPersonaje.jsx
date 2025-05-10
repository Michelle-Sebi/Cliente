
import Personaje from './Personaje'

export default function FichaPersonaje({results}) {
    
    return <>
        <div>
            <h2>Ficha de personaje</h2>
            {results.map((personalidad, i)=>(
            <Personaje key={i} personalidad={personalidad}/>
            ))}
        </div>
    </>
}
