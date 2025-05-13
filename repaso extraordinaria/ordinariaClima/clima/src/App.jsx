
import './App.css'
import Buscador from './Buscador'
import CiudadesFavoritas from './CiudadesFavoritas'
import ClimaActual from './ClimaActual'
import Prediccion from './Prediccion'

function App() {
  

  return (
    <>
      <div className="container">
          <h1>Monitoreo de Clima</h1>
          <Buscador/>
          <ClimaActual/>
          <Prediccion/>
          <CiudadesFavoritas/>
      </div>
    </>
  )
}


export default App
