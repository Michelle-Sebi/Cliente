// src/Cuadrados.jsx
import { useDispatch } from "react-redux";
import { setBgColor } from "./actions";

function Cuadrados({ color, size }) {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(setBgColor(color))}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: color,
      }}
    />
  );
}

export default Cuadrados;
