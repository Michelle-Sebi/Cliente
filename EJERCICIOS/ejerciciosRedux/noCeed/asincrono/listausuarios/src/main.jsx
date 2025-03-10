import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UsuariosLista from './componentes/UsuariosLista.jsx'
import { store } from './redux/store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <UsuariosLista />
    </Provider>
  </StrictMode>,
)
