function Cuadrados(props){
    const {color, setBgColor, size} = props
    
    return(
        <div 
            onClick={()=>setBgColor(color)} 
            style={{
                width:`${size}px`,
                height:`${size}px`,
                background: color
            }}    
        />
    )
}

export default Cuadrados