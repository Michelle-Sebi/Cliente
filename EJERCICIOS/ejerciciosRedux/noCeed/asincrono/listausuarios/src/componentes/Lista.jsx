import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { 
    peticionAPI,
    selectListaAPI, 
    selectLista5,
    setLista5,
    setUsuario
} from '../redux/listaSlice';



export default function Lista() {

    const listaAPI = useSelector(selectListaAPI)
    const lista5 = useSelector(selectLista5)
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(peticionAPI())
        // console.log("listaAPI:",JSON.parse(JSON.stringify(listaAPI)))
    },[])

    
    useEffect(()=>{
        const nuevaLista5 = listaAPI.slice(0, 5);
        // const nuevaLista10 = [];
        // for (let index = 0; index < 10; index++) {
        //     nuevaLista10.push(...listaAPI);
        // }
        dispatch(setLista5(nuevaLista5))
        // console.log("listaAPI:",JSON.parse(JSON.stringify(listaAPI)))
    },[listaAPI])

    function seleccionUsuario(index){
        console.log('usuario selecionado:', lista5[index])
        dispatch(setUsuario(lista5[index]))
    }

    return <>
        
        {lista5.map((usuario,index)=>(
            <li 
            className="usuario-item"
            key={index}
            onClick={()=>seleccionUsuario(index)}>
                {usuario.name}
            </li>
        ))}
         
    </>
}
