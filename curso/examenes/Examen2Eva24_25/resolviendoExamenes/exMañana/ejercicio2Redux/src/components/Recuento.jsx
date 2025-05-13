import { useSelector } from "react-redux"

export default function Recuento() {
  const { correctas, incorrectas} = useSelector(state=>state.juego);

  return <>
    <div class="total">
        Correct: <span class="correct">{correctas}</span>&nbsp;&nbsp;Wrong: <span class="wrong">{incorrectas}</span>
    </div>
  </>
}
