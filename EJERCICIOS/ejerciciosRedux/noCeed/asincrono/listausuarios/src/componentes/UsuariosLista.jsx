import BotonActualizar from "./BotonActualizar"
import Lista from "./Lista"
import UsuarioDetalle from "./UsuarioDetalle"

function UsuariosLista(){
    
    return<>
        <div className="container">
            <h1>Lista de Usuarios</h1>
            
            <BotonActualizar/>
            
            <div className="usuarios-lista">
                <ul>
                    <Lista/>
                </ul>
            </div>
            
            <div className="usuario-detalle">
                <UsuarioDetalle/>
            </div>
        </div>
    </>
}

export default UsuariosLista