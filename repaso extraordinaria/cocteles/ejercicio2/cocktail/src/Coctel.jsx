import Ingredientes from "./Ingredientes"

export default function Coctel({drink, tema}) {
    
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
