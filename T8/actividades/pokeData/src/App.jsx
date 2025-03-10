
import PokeData from './PokeData'

import './App.css'
import { useState } from 'react'

function App() {
  const [pokemonId, setPokemosId] = useState(1);
  return (
    <>
      
      <PokeData id={pokemonId}/>
      <button onClick={()=>setPokemosId((prev)=> prev +1)}>
        Siguiente
      </button>

    </>
  )
}

export default App
