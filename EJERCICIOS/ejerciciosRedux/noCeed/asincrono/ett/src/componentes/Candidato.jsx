
export default function Candidato({valor, index, onBuscarUno, onGuardarUno}) {

  return (
    <>
        <div className='usuario'>
            <div className='foto'>
                <img src={valor.picture.large}/>
            </div>
            <div className='datos'>
                <div className='nombre'>
                    {valor.name.title}. {valor.name.first}. {valor.name.last}
                </div>
                <div>Ubicacion: {valor.location.city} ({valor.location.country})</div>
                <div><a href='#'>{valor.email}</a></div>
                <div><a href='#'>{valor.phone}</a></div>
            </div>
            <div className="botones">
                <button className='rojo' onClick={()=>{onBuscarUno(index)}}>Ocultar</button>
                <button className='verde' onClick={()=>{onGuardarUno(valor)}}>Guardar</button>
            </div>
        </div>
    </>
  )
}
