import { useState } from "react"
import Gradient from "./Gradient"

function Picker(){
    const [hue,setHue]=useState(0)
    const [saturation,setSaturation]=useState(0)
    const [steps,setSteps]=useState(5)
    return<>
        <div className="picker">
            <label>Hue:</label>
            <input type="range" min="0" max="360" value={hue} onChange={(event)=>setHue(event.target.value)}></input>
            {hue}
            <br></br>

            <label>Saturation:</label>
            <input type="range" min="0" max="100" value={saturation} onChange={(event)=>setSaturation(event.target.value)}></input>
            {saturation}
            <br></br>

            <label>Steps:</label>
            <input type="range" min="5" max="100" value={steps} onChange={(event)=>setSteps(event.target.value)}></input>
            {steps}
            <br></br>

            <Gradient
                hue={hue}
                saturation={saturation}
                number={steps}
            />

        </div>
    </>
}

export default Picker
