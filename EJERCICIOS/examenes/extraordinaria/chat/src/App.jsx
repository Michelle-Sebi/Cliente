import UserInputArrow from '../../Arrow'
import './App.css'
import Conversaciones from './componentes/Conversaciones'
import VentanaPpal from './componentes/VentanaPpal'
import MensajeInicio from './componentes/MensajeInicio'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectMensajeActual,
  setMensajeActual,
  peticionServidorIA,
  setMostrar,
  agregarMensajeActual
} from './redux/chatSlice'
import { useEffect, useRef } from 'react'


function App() {
  const dispatch = useDispatch();
  const mensajeActual = useSelector(selectMensajeActual)

  function agregarUser(){
     dispatch(agregarMensajeActual(
      {nuevoRole: "user",
      nuevoContent:mensajeActual}
    ))
  }

  function agregarIA(){
    dispatch(peticionServidorIA())
  }
    

  function enviarMensaje(){
    dispatch(setMostrar(false))
    agregarUser()  
    agregarIA()
    dispatch(setMensajeActual(''))
  }

  const textRef = useRef(null)

  function adjustTextarea() {
    textRef.current.style.height = 'auto' // Reset the height to auto to prevent clipping
    textRef.current.style.height = 10 + textRef.current.scrollHeight + 'px' // Set the height to fit the content
  }

  useEffect(()=>{
    dispatch(adjustTextarea)
  },[mensajeActual,true])

  return (
    <>
      <div>
        <div className="conversations">
          <Conversaciones/>
        </div>

        <div className="chat">
          
          <div className="centered">
            <div className="conversation">
              <MensajeInicio/>
              <VentanaPpal/>
            </div>

            <div className="input">
              <div className="input-container">

                <textarea 
                className="user-input" 
                placeholder="Escribe un mensaje..."
                style={{height: '44px'}}
                value={mensajeActual}
                onChange={(event)=>dispatch(setMensajeActual(event.target.value))}
                  ref={textRef}
                />

                <button  
                disabled={mensajeActual === ''}
                onClick={enviarMensaje}>
                  <UserInputArrow/>
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
                      

export default App
