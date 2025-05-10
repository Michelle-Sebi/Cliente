import { useSelector } from 'react-redux'
import {selectPuntuacion} from './redux/banderasSlice'

export default function Puntuacion() {
    const puntuacion = useSelector(selectPuntuacion)
  return <>
    <h3>Puntuación:</h3>
    <div id="score">{puntuacion}</div>
  </>
}
