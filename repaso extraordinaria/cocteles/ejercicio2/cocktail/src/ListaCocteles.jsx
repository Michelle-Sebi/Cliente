import { apiCall } from './api'
import { useState, useEffect} from "react"
import Coctel from './Coctel'

export default function ListaCocteles(props) {
  const { tema, nombre} = props
  const [drinks, setDrinks] = useState([])

  
  
  useEffect(()=>{
    const fetchApiCall = async ()=>{
      const response = await apiCall(nombre)
      const drinks = response.drinks
      setDrinks(drinks)
    } 
    fetchApiCall()
  },[nombre])

  if(nombre=="") return

  return<>
    <div className="cocktail-list">
      <h2>Cocktail List</h2>
      <ul>
      {drinks.map((drink)=>(
        <Coctel drink={drink} tema={tema} key={drink.name}/>
      ))}
      </ul>
    </div>
  </>
}
