
import './App.css'
import ListaCocteles from './ListaCocteles.jsx'
import Buscador from './Buscador'
import { useState} from "react"


function App() {
  const [nombre, setNombre]= useState('')
  const [tema, setTema]=useState('claro')
  
  return<>
    <div>
      <Buscador
       nombre={nombre}
       tema={tema}
       setNombre = {setNombre}
       setTema ={setTema}/>
    </div>
    <ListaCocteles tema={tema} nombre={nombre} />
  </>
}

export default App
