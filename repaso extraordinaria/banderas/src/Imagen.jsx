
import { useSelector } from 'react-redux'
import { selectImagen } from './redux/banderasSlice'

export default function Imagen() {
    const imagen = useSelector(selectImagen)
  return (
    <div id="flag-container">
      <img id="flag" src={imagen} alt="Bandera" />
    </div>
  )
}
