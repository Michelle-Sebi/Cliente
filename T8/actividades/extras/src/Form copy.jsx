import { useState } from "react";

function Form(){

    const colores = [
        {color :'red', valor:1},
        {color :'blue', valor:2},
        {color :'green', valor:3},
        {color :'yellow', valor:4},
        {color :'purple', valor:5}

    ]

    const minSize = 20;
    const maxSize = 150;
    const minNumber = 1;
    const maxNumber = 20;

    const [number, setNumber]=useState(1)
    const [size, setSize]=useState(20)
    // const [color, setColor]=useState(colores[0].color)
    const [selectColor, setSelectColor] = useState(colores[0].color)
    const [filas, setFilas]=useState([])

    function calcularTotalSize(number, size){
        let totalSize = ((number*size) + (number*5))
        return totalSize
    }

    function changeNumber(event){
        setNumber(Number(event.target.value))
    }

    // function changeColor(selectColor){
    //     setColor(selectColor)
    // }

    function changeSelectedColor(event){
        setSelectColor(event.target.value)
    }

    function changeSize(event){
        setSize(Number(event.target.value))
    }

    function crearFila(){
        // changeColor(selectColor)
        const nuevasFilas = [...filas];
        for(let i=0;i<number;i++){
           nuevasFilas.push({
            id:nuevasFilas.length, 
            color:selectColor,
            size :size
            }) 
        }
        
        if (calcularTotalSize(number, size) > 888){
            setFilas(filas)
            console.log('Tamaño total superior a 888px')
        }else{
            setFilas(nuevasFilas);
        }
        
        
    }
    return <>
        <div className="form">
            <label>Size:{size}</label>
            <input 
            id="sizeInput" 
            name="size"
            min={minSize} 
            max={maxSize} 
            type="range" 
            value={size}
            onChange={changeSize}    
            />
            <label>Number:{number}</label>
            <input 
                id="numberInput"
                name="number"
                min={minNumber} 
                max={maxNumber} 
                type="range" 
                value={number}
                onChange = {changeNumber}
            />
                
            <label>Color:</label>
            <select className="colorOption" onChange={changeSelectedColor} id="colorSelect" name="color" >
                <option value="red">{colores[0].color}</option>
                <option value="blue">{colores[1].color}</option>
                <option value="green">{colores[2].color}</option>
                <option value="yellow">{colores[3].color}</option>
                <option value="purple">{colores[4].color}</option>
            </select>
            
            <button onClick={crearFila}>Añadir Fila</button>
            <div className="filas">
                {filas.map(({id, color, size})=>(
                    <div 
                    key={id} 
                    className="fila"    
                    style={{width:`${size}px`, background: color}}
                    >.....</div>
                ))}
            </div>

        </div>

    </>
}

export default Form