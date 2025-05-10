import Ingredientes from "./Ingredientes"
import {useSelector} from 'react-redux'
import {selectTema} from './redux/coctelSlice'


export default function Coctel({drink}) {
  const tema = useSelector(selectTema)

  return (
    <li>
    <div className={`cocktail tema-${tema}`}>
      <h3>{drink.name}</h3>
      <div className="image-container">
        <img src={drink.image} />
      </div>
      <Ingredientes ingredients ={drink.ingredients}/>
    </div>
  </li>
  )
}
