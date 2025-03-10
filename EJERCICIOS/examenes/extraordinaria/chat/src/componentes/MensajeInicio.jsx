import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { selectMostrar, setMostrar } from "../redux/chatSlice"


export default function MensajeInicio() {

  const mostrar = useSelector(selectMostrar)
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(setMostrar(true))
  },[])

  if(mostrar){
    return<>
      <div className="start">
        <div className="logo-container"><img className="logo" src="./public/logo.png" alt="logo"/></div>
        <h1>¿Cómo te puedo ayudar hoy?</h1>
      </div>
    </>
  }else{
    return null;
  }
}
