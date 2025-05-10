
import Personaje from './Personaje'
import { selectPersonajes } from './redux/rickimortySlice'
import {  useSelector } from 'react-redux';

export default function FichaPersonaje() {
    const personajes = useSelector(selectPersonajes)
    return <>
        <div>
            <h2>Ficha de personaje</h2>
            {personajes.map((personalidad, i)=>(
            <Personaje key={i} personalidad={personalidad}/>
            ))}
        </div>
    </>
}
