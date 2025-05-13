// src/Fila.jsx
import Cuadrados from "./Cuadrados";

function Fila({ size, color }) {
  return (
    <div
      className="fila"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: color,
      }}
    >
      <Cuadrados size={size} color={color} />
    </div>
  );
}

export default Fila;
