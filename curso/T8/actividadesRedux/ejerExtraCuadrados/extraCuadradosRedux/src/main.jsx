// src/index.js (o src/main.jsx)

import ReactDOM from "react-dom/client";  // Aquí cambiamos la importación
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';

// Crear un root con createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizamos el componente App dentro del root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
