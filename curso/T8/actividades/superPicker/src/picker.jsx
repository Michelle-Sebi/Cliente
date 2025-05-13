import { useState } from "react";
import Gradient from "./Gradient";
import "./App.css";

function Picker(){
    const [hue, setHue] = useState(0);
    const [saturation, setSaturation] = useState(100);
    const [steps, setSteps] = useState(10);

    return <>
        <div className="slidecontainer">
            <div key={hue}>
                <label>Hue:</label>
                <input type="range" min="0" max="360" value={hue}
                onChange={(e) => setHue(e.target.value)}
                />
                {hue}
                <br></br> 
            </div>
                    
            
            <div key={saturation}>
                <label>Saturation:</label>
                <input type="range" min="1" max="10" value={saturation}
                onChange={(e) => setSaturation(e.target.value)}/>
                {saturation}
                <br></br>
            </div>

            <div key={steps}>
                <label>Steps:</label>
                <input type="range" min="5" max="100" value={steps} onChange={(e) => setSteps(e.target.value)}/>
                {steps} 
                <br></br>
            </div>
        </div>

        <div className="results">
            <Gradient hue={hue} saturation={saturation} steps={steps}/>
        </div>
    </>
}

export default Picker;