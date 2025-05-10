
import Personaje from './Personaje'
import { selectResults } from './redux/rickimortySlice'
import {  useSelector } from 'react-redux';

export default function FichaPersonaje() {
    const results = useSelector(selectResults)
    return <>
        <div>
            <h2>Ficha de personaje</h2>
            {results.map((personalidad, i)=>(
            <Personaje key={i} personalidad={personalidad}/>
            ))}
        </div>
    </>
}
