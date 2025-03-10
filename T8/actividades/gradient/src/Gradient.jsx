
import "./App.css";

function Gradient({hue,saturation,number}){
    let squares = [];
    for (let i = 0; i < number; i++) {
        let lightness = (i * 100)/number;
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