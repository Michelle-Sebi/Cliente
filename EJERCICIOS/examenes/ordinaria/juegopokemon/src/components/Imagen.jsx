import { useSelector } from 'react-redux';
import { selectSprite, selectLoading, selectClickado } from '../pokemonSlice';

export default function Imagen() {
  const sprite = useSelector(selectSprite);
  const loading = useSelector(selectLoading);
  const clickado= useSelector(selectClickado)

  return (
    <div>
      {loading ? (
        <div>
          <p>Cargando...</p>
          <img src='./src/assets/question_mark.png' alt="question_mark" />
        </div> 
      ) : (
        <img id="image" className= {clickado? "": "black"} src={sprite} alt="Pokemon image" />
      )}
    </div>
  );
}