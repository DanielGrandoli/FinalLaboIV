function FormularioProductos() {
    return (
       <form action="">
        <div>
            <span>Nombre</span>
            <span><input type="text" id="nombre" /></span>
        </div>
        <div>
            <span>Precio</span>
            <span><input type="number" id="precio" /></span>
        </div>
        <div>
            <button type="button">Agregar</button>
        </div>
       </form>
    )
}

export default FormularioProductos;