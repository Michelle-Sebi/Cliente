
import {  useSelector } from 'react-redux';
import { selectUsuario } from '../redux/listaSlice';

export default function UsuarioDetalle() {
    
    const usuario = useSelector(selectUsuario)
    

    return <>
        
        <h2>Detalles del Usuario</h2>
        <p><strong>Nombre:</strong> {usuario.name}</p>
        <p><strong>Email:</strong> {usuario.email}</p>
        <p><strong>Teléfono:</strong> {usuario.phone}</p>
        
    </>
}
