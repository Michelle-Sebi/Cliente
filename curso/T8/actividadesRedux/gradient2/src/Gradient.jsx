
function Gradient({hue, saturation, number}){
    let squares = []
    const lightnessIntervalo = (100/number)
    for (let i = 0; i < number; i++){
        let lightness= (i*lightnessIntervalo)
        squares.push( 
            <div className="square"
                key={i}
                style={{backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`}}
            />
        )
    }
    return <div className="squares">{squares}</div>
}

export default Gradient
    