import { useDispatch, useSelector } from 'react-redux';
import { setHue, setSaturation, setSteps } from './features/colorSlice';
import Gradient from "./Gradient"

function Picker(){
    const dispatch = useDispatch();
    const { hue, saturation, steps } = useSelector((state) => state.color);
    return<>
        <div className="picker">
            <label>Hue:</label>
            <input type="range" min="0" max="360" value={hue} onChange={(event)=>dispatch(setHue(Number(event.target.value)))}></input>
            {hue}
            <br></br>

            <label>Saturation:</label>
            <input type="range" min="0" max="100" value={saturation} onChange={(event)=>dispatch(setSaturation(event.target.value))}></input>
            {saturation}
            <br></br>

            <label>Steps:</label>
            <input type="range" min="5" max="100" value={steps} onChange={(event)=>dispatch(setSteps(event.target.value))}></input>
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



