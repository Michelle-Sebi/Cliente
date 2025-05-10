import { useSelector } from 'react-redux';
import { selectPuntuacion } from "./redux/siluetaSlice";

export default function Puntuacion() {
    const puntuacion = useSelector(selectPuntuacion)
    
    return (
        <div id="score">
            Score: {puntuacion}
        </div>
    )
}
