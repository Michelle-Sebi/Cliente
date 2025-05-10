export default function Ingredientes({ingredients}) {
    
  return (
    <div className="ingredients">
      <h4>Ingredients:</h4>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  )
}
