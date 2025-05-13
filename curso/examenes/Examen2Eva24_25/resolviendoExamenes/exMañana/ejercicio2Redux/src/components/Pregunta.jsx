import { useSelector } from "react-redux";

export default function Pregunta() {
    
    const pregunta = useSelector((state)=>state.juego.preguntas[state.juego.preguntaActual].text)
  return <>
    <p>{pregunta}</p>
  </>
}
