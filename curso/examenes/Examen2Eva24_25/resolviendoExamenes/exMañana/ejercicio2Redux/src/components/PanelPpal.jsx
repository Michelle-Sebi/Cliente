import React from 'react'
import Pregunta from './Pregunta'
import Respuestas from './Respuestas'
import Recuento from './Recuento'

export default function PanelPpal() {
  
  return <>
    <div class="quiz">
        <h1>El gran héroe americano</h1>
        <div>
          <div class="question-text">
            <Pregunta/>
          </div>
          <div class="answers">
            <Respuestas/>
          </div>
        </div>
        <div class="total">
          <Recuento/>
        </div>
      </div>

  </>
    
    
  
}
