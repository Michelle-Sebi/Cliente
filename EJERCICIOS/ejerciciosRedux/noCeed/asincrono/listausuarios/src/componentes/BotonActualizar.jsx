import {  selectListaAPI, setLista5 } from "../redux/listaSlice"
import { useDispatch, useSelector } from "react-redux"



export default function BotonActualizar(){
    const dispatch = useDispatch();
    const listaAPI = useSelector(selectListaAPI)

    function crearIndices(){
        const indices = new Set();
        while (indices.size < 5) {
            indices.add(Math.floor(Math.random()*10))
        }
        return Array.from(indices);
    }

    const actualizarLista= ()=>{
        const indices = crearIndices()
        const nuevaLista = indices.map(indice=>listaAPI[indice])
        dispatch(setLista5(nuevaLista))
    }
        

    return<>
        <button onClick={actualizarLista}>Nueva Lista</button>
    </>
}