import { useDispatch, useSelector } from 'react-redux';
import { selectColores, girar } from './redux/cuadradosSlice'


export default function Cuadrados() {
    const dispatch = useDispatch();
    const colores = useSelector(selectColores)

    function girarDerecha(){
        return dispatch(girar('derecha'))
    }
    function girarIzquerda(){
        return dispatch(girar('izquierda'))
    }

    function onGirar(index){
        if(index < colores.length/2){
            girarIzquerda()
        }else{
            girarDerecha()
        }
    }

    return (
    <>
        <h1>Cuadrados giratorios</h1>

        {colores.map((color, index)=>{
            return(
                <button
                className='cuadrado'
                key={index}
                style={{backgroundColor: color}}
                onClick={() => onGirar(index)}
                />
            )

        })}

    </>
  )
}
