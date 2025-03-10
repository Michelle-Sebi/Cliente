import { useState } from 'react'
import Picker from './Picker'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Picker/>
      </div>
     
    </>
  )
}

export default App
