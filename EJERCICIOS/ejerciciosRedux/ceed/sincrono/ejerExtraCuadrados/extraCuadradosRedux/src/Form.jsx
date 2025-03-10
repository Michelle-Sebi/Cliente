// src/Form.jsx
import { useDispatch, useSelector } from "react-redux";
import Filas from "./Filas";
import { setSize, setNumber, setSelectColor, setFilas } from "./actions";

function Form() {
  const dispatch = useDispatch();

  // Obtener valores desde el store
  const size = useSelector((state) => state.size);
  const number = useSelector((state) => state.number);
  const selectColor = useSelector((state) => state.selectColor);
  const filas = useSelector((state) => state.filas);

  const colores = [
    { color: "red", valor: 1 },
    { color: "blue", valor: 2 },
    { color: "green", valor: 3 },
    { color: "yellow", valor: 4 },
    { color: "purple", valor: 5 },
  ];

  const minSize = 20;
  const maxSize = 150;
  const minNumber = 1;
  const maxNumber = 20;

  function calcularTotalSize(number, size) {
    return number * size + number * 5;
  }

  function crearFilas() {
    if (calcularTotalSize(number, size) <= 888) {
      const nuevasFilas = {
        color: selectColor,
        size: size,
        number: number,
      };
      dispatch(setFilas([nuevasFilas])); // Guardamos las filas en el store
    } else {
      console.log("Tamaño total superior a 888px");
    }
  }

  return (
    <div className="form">
      <label>Size: {size}</label>
      <input
        id="sizeInput"
        name="size"
        min={minSize}
        max={maxSize}
        type="range"
        value={size}
        onChange={(e) => dispatch(setSize(Number(e.target.value)))}
      />

      <label>Number: {number}</label>
      <input
        id="numberInput"
        name="number"
        min={minNumber}
        max={maxNumber}
        type="range"
        value={number}
        onChange={(e) => dispatch(setNumber(Number(e.target.value)))}
      />

      <label>Color:</label>
      <select
        className="colorOption"
        onChange={(e) => dispatch(setSelectColor(e.target.value))}
        id="colorSelect"
        name="color"
      >
        {colores.map(({ color }) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>

      <button onClick={crearFilas}>Crear Filas</button>

      {/* Renderizamos las filas si existen */}
      {filas.length > 0 && (
        <Filas size={filas[0].size} number={filas[0].number} color={filas[0].color} />
      )}
    </div>
  );
}

export default Form;
