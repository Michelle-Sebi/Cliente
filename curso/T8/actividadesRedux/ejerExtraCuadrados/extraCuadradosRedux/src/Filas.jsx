// src/Filas.jsx
import { useSelector } from "react-redux";
import Fila from "./Fila";

function Filas({ size, number }) {
  const color = useSelector((state) => state.bgColor); // Obtener el color desde el store

  const todasLasFilas = [];
  for (let i = 0; i < number; i++) {
    todasLasFilas.push(
      <Fila key={i} size={size} color={color} />
    );
  }

  return <div className="filas">{todasLasFilas}</div>;
}

export default Filas;
