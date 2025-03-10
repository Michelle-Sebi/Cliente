
import "./App.css";

function Gradient({hue,saturation,steps}){
    let squares = [];
    for (let i = 0; i < steps; i++) {
        let lightness = (i * 100)/steps;
        squares.push(
            <div className="square"
                key={i}
                style={{
                    backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`
                    
                }}
            ></div>
        );
    }
    return <div className="squares">{squares}</div>
}

export default Gradient;