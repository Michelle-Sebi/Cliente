function Recuento(props) {
    const{total, pendientes, completadas} = props
    return<>
        <p>Total de tareas:{total}</p>
        <p>Tareas completadas: {completadas}</p>
        <p>Tareas pendientes: {pendientes}</p>
    </>
}

export default Recuento