import { useState } from 'react'
import './App.css'
import Form from './Form'

function App() {
  const [bgColor, setBgColor] = useState("white")

  return (
    <>
      <div style={{background: bgColor}}>
        <Form 
          setBgColor = {setBgColor}
        />
      </div>
    </>
  )
}

export default App
