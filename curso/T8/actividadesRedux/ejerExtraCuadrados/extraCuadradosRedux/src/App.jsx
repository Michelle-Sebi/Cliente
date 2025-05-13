// src/App.jsx
import { useSelector } from 'react-redux';
import './App.css';
import Form from './Form';

function App() {
  const bgColor = useSelector((state) => state.bgColor); // Obtener el color de fondo desde el store

  return (
    <>
      <div style={{ background: bgColor }}>
        <Form />
      </div>
    </>
  );
}

export default App;
