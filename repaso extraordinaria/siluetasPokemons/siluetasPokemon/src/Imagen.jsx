import { useSelector } from 'react-redux'
import { selectImagen, selectLoading, selectRespondido } from './redux/siluetaSlice'

export default function Imagen() {
  const imagen = useSelector(selectImagen)
  const loading = useSelector(selectLoading)
  const respondido = useSelector(selectRespondido)
  return <>
    <div>
      {loading 
        ? <img id="image" className="black" src="./question_mark.png" alt="Pokemon image"/>
        
        : <img id="image" className= {respondido? "":"black"} src={imagen} alt="Pokemon image"/>
      }
    </div>
    {console.log(imagen)}

    </>
}
