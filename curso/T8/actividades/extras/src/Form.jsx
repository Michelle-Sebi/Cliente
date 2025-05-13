import { useState } from "react";
import Filas from "./Filas";

function Form(props){
    const {setBgColor} = props
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

    const [number, setNumber] = useState(1)
    const [size, setSize] = useState(20)
    const [selectColor, setSelectColor] = useState(colores[0].color)
    const [filas, setFilas] = useState([])

    function changeNumber(event){
        setNumber(Number(event.target.value))
    }

    function changeSelectedColor(event){
        setSelectColor(event.target.value)
    }

    function changeSize(event){
        setSize(Number(event.target.value))
    }

    function calcularTotalSize(number, size){
        let totalSize = number*size + number*5
        return totalSize
    }

    function crearFilas(){
        if (calcularTotalSize(number, size) <= 888){
            const nuevasFilas = {
                color:selectColor,
                size :size,
                number : number,
            }
            setFilas([nuevasFilas])
        }else{
            console.log('Tamaño total superior a 888px')
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
            <select 
                className="colorOption" 
                onChange={changeSelectedColor} 
                id="colorSelect" 
                name="color" >
                {colores.map(({color})=>(
                    <option key= {color} value={color}>{color}</option>
                ))}
            </select>
            
            <button onClick={crearFilas}>Crear Filas</button>
            
            <Filas  size={filas[0].size} 
        number={filas[0].number} 
        color={filas[0].color} 
        setBgColor={setBgColor}  />
        </div>
    </>
}

export default Form

