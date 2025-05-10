import { apiCall } from './api'
import { useEffect} from "react"
import {useSelector, useDispatch} from 'react-redux'
import Coctel from './Coctel'
import { selectDrinks,setDrinks, selectNombre} from './redux/coctelSlice'

export default function ListaCocteles() {
  const dispatch = useDispatch();
  const nombre = useSelector(selectNombre)
  const drinks = useSelector(selectDrinks)

  useEffect(()=>{
    const fetchApiCall = async ()=>{
      const response = await apiCall(nombre)
      const drinks = response.drinks
      dispatch(setDrinks(drinks)) 
    } 
    fetchApiCall()
  },[nombre])

  if(nombre=="") return

  return<>
    <div className="cocktail-list">
      <h2>Cocktail List</h2>
      <ul>
      {drinks.map((drink)=>(
        <Coctel drink={drink} key={drink.name}/>
      ))}
      </ul>
    </div>
  </>
}
